!TEAM CYBORGS!
    (x)(x)
 (Devs ONLY)
    (    )
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
FRONTEND --
1. Use a HTTP Server to run the frontend. (http-server for node is suggested)
2. Include your service URI in the confServices.js file in the frontend.
3. Include the 'Conf' service in your AngularJS services.

    Usage example: $http.get(Conf.auth_service.concat('/users'))

SERVICES --
* Develop your service under services/{service_name} directory
* Port: 9xxx
  Example: Auth_service: 9001
 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^