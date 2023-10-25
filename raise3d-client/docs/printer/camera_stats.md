
  Get Camera Information

GET  /printer/camera

Printer provides a camera http server, you can get information about the
server by the api.

Example request URI:

_http://192.168.0.57:10800/v1/printer/camera?token=7e03512ff53f81356d86af32ff58402e_

### Request

###### QUERY PARAMETERS

parameter | type | description  
---|---|---  
`token` | _string_ | user authentication  
  
### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of camera information

###### EXAMPLE

    
    
    {
      "data": {
        "camerserver_URI": ":30216/api/v1/camera/auth_stream",
        "is_camera_connected": true,
        "password": "368d8d",
        "user_name": "raise3d_camera"
      },
      "status": 1
    }
    						

###### EXAMPLE

    
    
    {
      "data": {
        "camerserver_URI": ":30216/api/v1/camera/auth_stream",
        "is_camera_connected": false,
      },
      "status": 1
    }
    						

Returns an error

###### EXAMPLE

    
    
    {
      "error": {
        "code": 401,
        "msg": "token error"
      },
      "status": 0
    }
    					

###### RESPONSE PARAMENTS

parameter | type | description  
---|---|---  
`status` | _int_ | 1-ok 0-failed  
`camerserver_URI` | _string_ | camera http server URI include port like 30216  
`is_camera_connected` | _bool_ | the status of camera connection  
`password` | _string_ | password to login camera http server  
`user_name` | _string_ | user name to login camera http server  
`code` | _int_ | error code  
`msg` | _string_ | error message  
  
###### Error Code

code | msg | description  
---|---|---  
`401` | _token error_ | token verification failed, please login first  
`503` | _no server_ | service is not started  
  