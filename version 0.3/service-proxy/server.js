//Author: Nandun Bandara
//Service-proxy to direct requests and responses between the frontend and the services
//Validate authentic requests from the frontend before directing them towards the services

'use strict'

const http = require('http');
const httpProxy = require('http-proxy');

const redis = require('redis');

const proxy_options = {
    'auth-service-user-auth-path': '/authenticate',
    'auth-service-url': '127.0.0.1:9001',
    'allowed-origins': 'localhost',
    'token-lifetime': 3600,
    'services':[{
        'name': 'User Authentication and Management',
        'url': '127.0.0.1:9001',
        'path': '/users',
        'authenticate': true,
        'allowed-methods': 'GET,POST,PUT,DELETE'
    },{
        'name': 'Drug/Inventory',
        'url': '127.0.0.1:9002',
        'path': '/drug',
        'authenticate': true,
        'allowed-methods': 'GET,POST,PUT'
    },{
        'name': 'Prescription',
        'url': '127.0.0.1:9003',
        'path': '/prescription',
        'authenticate': true,
        'allowed-methods': 'GET,POST'
    },{
        'name': 'Reports',
        'url': '127.0.0.1:9004',
        'path': '/reports',
        'authenticate': true,
        'allowed-methods': 'GET,POST,DELETE'
    }]
}