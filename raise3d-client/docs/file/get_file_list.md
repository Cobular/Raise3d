Get File List

GET /fileops/list

Get the list of print files and directorys in the specified directory.

Example request URI:

_http://192.168.0.57:10800/v1/fileops/list?token=ede89895ce990a4700ce9fba990e8b02
&dir=Local/webapi_store&start_pos=0&max_num=10_

### Request

###### QUERY PARAMETERS

| parameter | type     | description                                           |
| --------- | -------- | ----------------------------------------------------- |
| `token`   | _string_ | user authentication                                   |
| `dir`     | _string_ | path of directory that you want to get, for example : |

logs/api  
`start_pos` | _int_ | start index of the list of print files and directorys  
`max_num` | _int_ | max number of elements in list that you want to get

### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of file list

###### EXAMPLE

    {
      "data": {
        "dir_list": [
          "d1",
          "d2",
          "d3",
          "d4"
        ],
        "file_list": [
          {
            "data_path": "",
            "file_name": "a.gcode"
          },
          {
            "data_path": "Local/webapi_store/b.data",
            "file_name": "b.gcode"
          },
          {
            "data_path": "Local/webapi_store/c.data",
            "file_name": "c.gcode"
          },
          {
            "data_path": "Local/webapi_store/d.data",
            "file_name": "d.gcode"
          },
          {
            "data_path": "Local/webapi_store/e.data",
            "file_name": "e.gcode"
          },
          {
            "data_path": "Local/webapi_store/f.data",
            "file_name": "f.gcode"
          }
        ]
      },
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

| parameter   | type     | description                                           |
| ----------- | -------- | ----------------------------------------------------- |
| `status`    | _int_    | 1-ok 0-failed                                         |
| `dir_list`  | _array_  | name list of subdirectorys in this directory          |
| `file_list` | _array_  | list of print files in this directory                 |
| `file_name` | _string_ | name of print file in this directory                  |
| `data_path` | _string_ | path of data file corresponding to print file in this |

directory. if it is empty, there is no data file corresponds to this print
file  
`code` | _int_ | error code  
`msg` | _string_ | error message

###### Error Code

| code  | msg                   | description                                   |
| ----- | --------------------- | --------------------------------------------- |
| `401` | _token error_         | token verification failed, please login first |
| `404` | _directory not exist_ | the path of directory is error, there is no   |

such directory  
`503` | _no server_ | service is not started  
`10002` | _start_pos error, it must be non-negative_ | start*pos must be non-
negative  
\_max_num error, range(1~24)* | the value of max*num is out of the range (1~24)  
`10005` | \_root path error* | the root directory that you can access is
"Local/"  

