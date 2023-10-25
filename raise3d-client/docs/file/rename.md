Rename File

POST /filepos/rename

Example request URI:

_http://192.168.0.57:10800/v1/filepos/rename?token=7e03512ff53f81356d86af32ff58402e_

Example request Body

_-application/json_

###### EXAMPLE

    {
      "file_path": "Local/mmmmm/a.gcode",
      "new_name": "b.gcode"
    }


### Request

###### QUERY PARAMETERS

| parameter  | type     | description            |
| ---------- | -------- | ---------------------- |
| `token`    | _string_ | user authentication    |
| `dir_path` | _string_ | path of file to rename |
| `new_name` | _string_ | new name of file       |

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
        "msg": "fail to rename file"
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

| code  | msg                   | description                                   |
| ----- | --------------------- | --------------------------------------------- |
| `401` | _token error_         | token verification failed, please login first |
| `404` | _file not exist_      | can not find the file to rename               |
| `500` | _fail to rename file_ | please check the file_path or try it again    |

later  
`503` | _no server_ | service is not started  
`10005` | _root path error_ | the root directory that you can access is
"Local/"  

