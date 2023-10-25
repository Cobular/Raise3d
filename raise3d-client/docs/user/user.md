## Resources

User

  Login

GET  /login

User login and get new token

Example request URI:

_http://192.168.0.57:10800/v1/login?sign=ed416d3d02cf58efe4f65d3bbc8a4dc6
&timestamp=1503477369615_

### Request

###### QUERY PARAMETERS

parameter | type | description  
---|---|---  
`sign` | _string_ |

Signature, used to verify whether it is a legitimate client.  
The formula to generate sign like  
md5(sha1("password=123456&timestamp=1503477369615"))  
123456 represents password  
1503477369615 represents timestamp parament  
example:  
step 1：use sha1 to encrypt "password=123456&timestamp=1503477369615"  
step 2： if the encryption result of step 1 is garbled , then converts it to a
hexadecimal string as "17ab297629a0662dfdd75bb15ad67465f302819b"  
step 3：use MD5 to encrypt the result of step 2  
step 4: if the encryption result of step 3 is garbled , then converts it to a
hexadecimal string as the final result "ed416d3d02cf58efe4f65d3bbc8a4dc6"  
  
`timestamp` | _int_ |

the number of milliseconds from (1970-01-01 00:00:00.000) to now  
  
### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of a new token

###### EXAMPLE

    
    
    {
      "data": {
        "token": "e4e4ab1407dfec7c5beb566173d81340"
      },
      "status": 1
    }
    					

Returns an error

###### EXAMPLE

    
    
    {
      "error": {
        "code": 10000,
        "msg": "sign error or password error"
      },
      "status": 0
    }
    					

###### RESPONSE PARAMENTS

parameter | type | description  
---|---|---  
`status` | _int_ | 1-ok 0-failed  
`token` | _string_ | token identification, access to other APIs must use the
identity, the token valid 24 hours  
`code` | _int_ | error code  
`msg` | _string_ | error message  
  
###### Error Code

code | msg | description  
---|---|---  
`401` | _token error_ | token verification failed, please login first  
`503` | _no server_ | service is not started  
`10000` | _sign error or password error_ | signature error, not verified  
  