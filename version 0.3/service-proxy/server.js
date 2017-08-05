//Author: Nandun Bandara
//Service-proxy to direct requests and responses between the frontend and the services
//Validate authentic requests from the frontend before directing them towards the services

'use strict'

const http = require('http');
const httpProxy = require('http-proxy');

const redis = require('redis');
const redisClient = redis.createClient(9666, 'localhost');

const proxy_options = {
    port: 9009,
    auth_service_user_auth_path: '/authenticate',
    auth_service_url: '127.0.0.1:9001',
    allowed_origins: 'localhost',
    token_lifetime: 3600,
    services:[{
        name: 'User Authentication and Management',
        url: '127.0.0.1:9001',
        path: '/users',
        authenticate: true,
        allowed_methods: 'GET,POST,PUT,DELETE'
    },{
        name: 'Drug/Inventory',
        url: '127.0.0.1:9002',
        path: '/drug',
        authenticate: true,
        allowed_methods: 'GET,POST,PUT'
    },{
        name: 'Prescription',
        url: '127.0.0.1:9003',
        path: '/prescription',
        authenticate: true,
        allowed_methods: 'GET,POST'
    },{
        name: 'Reports',
        url: '127.0.0.1:9004',
        path: '/reports',
        authenticate: true,
        allowed_methods: 'GET,POST,DELETE'
    }]
}

//get the service from the url
const getServicePath = function(url){
    const services = proxy_options.services;
    for(var service in services){
        if(url.startsWith(service.path))
            return service;
    }
}

//forward request to service
const forwardRequest = function(service, req, res){
    req.url = req.url.substr(service.path.length, req.url.length - service.path.length);
    proxy.web(req,res,
        {
            target: service.url
        },
        function(error){
            //log error on failure to proxy the request
            console.log(error);
        }
    )
}
//create proxy server
const proxy = httpProxy.createProxyServer({});

proxy.on('proxyResponse', function(proxyRequest, req, res, options){

})

const server = http.createServer(function(req,res){
    //check if the request comes from an allowed origin
    if(proxy_options.allowed_origins){
        if(!req.headers.origin || proxy_options.allowed_origins.indexOf(req.headers.origin) < 0){
            res.status(401).json({success:false, message:'You are not authorized to access this API'});
        }
    }
    //user authentication
    const request_url = req.url.toLowerCase();
    if(request_url.startsWith(proxy_options.auth_service_user_auth_path)){
        req.token_request = true;
        req.url = proxy_options.auth_service_user_auth_path;
        proxy.web(req,res,
            {
                target: proxy_options.auth_service_url
            },
            function(err){
                //log error
                //failed
                console.log(err);
            }
        )
    }else{
        //send the request to the target service
        const service = getServicePath(request_url);
        if(!service){
            res.status(404).json({ success:false, message: 'Requested service not found'});
        }
        if(service.allowed_methods.indexOf(req.method)<0){
            res.status(405).json({ success:false, message: 'Method not allowed'});
        }
        if(service.authenticate){
            if(req.headers.auth){
                redisClient.exists(req.headers.auth, function(error, result){
                    if(result === 1){
                        forwardRequest(service, req, res);
                    }else{
                        res.status(401).json({success:false, message:'You are not authorized to access this service'});
                    }
                })
            }else{
                res.status(401).json({success:false, message:'Missing access token'});
            }
        }else{
            forwardRequest(service, req, res);
        }

    }
})

server.listen(proxy_options.port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Service proxy started');
    console.log('Listening on port 9009');
})
