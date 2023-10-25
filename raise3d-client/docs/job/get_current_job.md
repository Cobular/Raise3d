Get Current Job Information

GET /job/currentjob

Example request URI:

_http://192.168.0.57:10800/v1/job/currentjob?token=7e03512ff53f81356d86af32ff58402e_

### Request

###### QUERY PARAMETERS

| parameter | type     | description         |
| --------- | -------- | ------------------- |
| `token`   | _string_ | user authentication |

### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of current job information

###### EXAMPLE

    {
      "data": {
        "file_name": "Local/a.gcode",
        "print_progress": 0.04945080354809761,
        "printed_layer": 1,
        "printed_time": 197,
        "job_id": "4C530E1EB1D4_D0E782BF5B17_7e10712090a1b3600f",
        "total_layer": 470,
        "total_time": 11333,
        "job_status": "running"
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

| parameter        | type     | description                                       |
| ---------------- | -------- | ------------------------------------------------- |
| `status`         | _int_    | 1-ok 0-failed                                     |
| `file_name`      | _string_ | absolute path of printed file including file name |
| `print_progress` | _float_  | percentage of current job print progress,         |

range(0~100)  
`printed_layer` | _int_ | the number of layers printed with current job  
`total_layer` | _int_ | the number of total layers with current job  
`printed_time` | _long_ | printed in seconds of current job  
`total_time` | _long_ | the total print time estimated for current job in
seconds  
`job_id` | _string_ | id of job which is used to distinguish between different
jobs  
`job_status` | _string_ |

The running status of current job. Possible status is

paused - the printer has paused current job

running - current job is printing

completed - current job has been completed successfully

stopped - current job has been stopped

`code` | _int_ | error code  
`msg` | _string_ | error message

###### Error Code

| code  | msg           | description                                   |
| ----- | ------------- | --------------------------------------------- |
| `401` | _token error_ | token verification failed, please login first |
| `503` | _no server_   | service is not started                        |
