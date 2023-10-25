Upload File

POST /fileops/upload

Upload file to printer, the type of data is multipart/form-data.There is two
parts, the first part is desc, the second part is file. The order of the two
parts can not be reversed. The content-type of desc part is apllication/json
and file part is application/octet-stream.

Example request URI:

_http://192.168.0.57:10800/v1/fileops/upload?token=ede89895ce990a4700ce9fba990e8b02_

Example request Body

_-application/json_

###### EXAMPLE

    ------WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="desc"
    Content-Type:apllication/json
    {
      "dir_path": "Local/webapi_store"
    }
    ------WebKitFormBoundary7MA4YWxkTrZu0gW
    Content-Disposition: form-data; name="file"; filename="1.txt"
    Content-Type:application/octet-stream
    *************************************
    ------WebKitFormBoundary7MA4YWxkTrZu0gW--


### Request

###### QUERY PARAMETERS

| parameter  | type     | description                               |
| ---------- | -------- | ----------------------------------------- |
| `token`    | _string_ | user authentication                       |
| `dir_path` | _string_ | path of directory that you want to upload |

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
        "code": 404,
        "msg": "directory not exist"
      },
      "status": 0
    }


###### RESPONSE PARAMENTS

| parameter   | type     | description                                  |
| ----------- | -------- | -------------------------------------------- |
| `status`    | _int_    | 1-ok 0-failed                                |
| `dir_list`  | _array_  | name list of subdirectorys in this directory |
| `file_list` | _array_  | name list of files in this directory         |
| `code`      | _int_    | error code                                   |
| `msg`       | _string_ | error message                                |

###### Error Code

| code  | msg                   | description                                   |
| ----- | --------------------- | --------------------------------------------- |
| `401` | _token error_         | token verification failed, please login first |
| `404` | _directory not exist_ | the path of directory is error, there is no   |

such directory  
`500` | _IODevice can not open_ | maybe the server is busy, you can try it
again later, or the printer available storage is not enough  
_IODevice write failed_ | maybe the server is busy, you can try it again
later, or the printer available storage is not enough  
`10003` | _file too large size(0~500MB)_ | Upload file size is limited to 0 ~
500MB  
`10005` | _root path error_ | the root directory that you can access is
"Local/"  

