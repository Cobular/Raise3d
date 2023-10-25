Copy File

POST /filepos/copy

Example request URI:

_http://192.168.0.57:10800/v1/filepos/copy?token=7e03512ff53f81356d86af32ff58402e_

Example request Body

_-application/json_

###### EXAMPLE

    {
      "file_src": "Local/mmm/nnn/a.gcode",
      "file_dst": "Loacl/mmmm/bbb/a.gcode"
    }


### Request

###### QUERY PARAMETERS

| parameter  | type     | description                 |
| ---------- | -------- | --------------------------- |
| `token`    | _string_ | user authentication         |
| `file_src` | _string_ | path of source file to copy |
| `file_dst` | _string_ | path of destination file    |

### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of operation success or not

###### EXAMPLE

    {
      "status": 1
    }


Returns an error

###### EXAMPLE

    {
      "error": {
        "code": 500,
        "msg": "fail to copy file"
      },
      "status": 0
    }


###### RESPONSE PARAMENTS

| parameter | type     | description   |
| --------- | -------- | ------------- |
| `status`  | _int_    | 1-ok 0-failed |
| `code`    | _int_    | error code    |
| `msg`     | _string_ | error message |

###### Error Code

| code  | msg                     | description                                      |
| ----- | ----------------------- | ------------------------------------------------ |
| `401` | _token error_           | token verification failed, please login first    |
| `404` | _source file not exist_ | can not find the source file to copy             |
| `500` | _fail to copy file_     | please check the file_src and file_dst or try it |

again later  
`503` | _no server_ | service is not started  
`10005` | _file_src root path error_ | the root directory that you can access
is "Local/"  
_file_dst root path error_ | the root directory that you can access is
"Local/"

Copyright © 2018, Raise3D Technologies Inc.
