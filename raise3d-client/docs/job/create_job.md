Create New Job

POST /job/newjob/set

Example request URI:

_http://192.168.0.57:10800/v1/job/newjob/set?token=7e03512ff53f81356d86af32ff58402e_

Example request Body

_-application/json_

###### EXAMPLE

    {
      "file_path": "Local/a.gcode"
    }


### Request

###### QUERY PARAMETERS

| parameter  | type     | description                |
| ---------- | -------- | -------------------------- |
| `token`    | _string_ | user authentication        |
| `filepath` | _string_ | path of file to be printed |

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
        "code": 10005,
        "msg": "root path error"
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

| code  | msg                                | description                                   |
| ----- | ---------------------------------- | --------------------------------------------- |
| `401` | _token error_                      | token verification failed, please login first |
| `503` | _no server_                        | service is not started                        |
| `500` | _printer show completed interface_ | printer is showing completed                  |

interface that you can not operate printer  
_printer show powerloss interface_ | printer is showing powerloss interface
that you can not operate printer  
_printer show powerdown interface_ | printer is showing powerdown interface
that you can not operate printer  
_printer show extrude retract interface_ | printer is showing extrude retract
interface that you can not operate printer  
_printer show calibrate interface_ | printer is showing calibrate interface
that you can not operate printer  
_print file is not exist_ | the file to print is not exist,please check
file*path parament  
\_printer is busy* | someone is operating the printer, or the printer is
pausing, resuming, recovering or stopping  
_printer is printing_ | printer is already printing,create new job is not
supported  
_printer is paused_ | printer is already paused,create new job is not
supported  
_printer is stoped_ | printer is already stoped,no operation is supported  
_unknown error_ | an unknown error was detected  
`10005` | _root path error_ | the root directory that you can access is
"Local/"

Recover Last Job

POST /job/recover/set

If the power outage or other errors cause the printer interrupted, you can use
this API to recover printing

Example request URI:

_http://192.168.0.57:10800/v1/job/recover/set?token=7e03512ff53f81356d86af32ff58402e_

### Request

###### QUERY PARAMETERS

| parameter | type     | description         |
| --------- | -------- | ------------------- |
| `token`   | _string_ | user authentication |

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
        "code": 10002,
        "msg": "no last job found"
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

| code  | msg                                | description                                   |
| ----- | ---------------------------------- | --------------------------------------------- |
| `401` | _token error_                      | token verification failed, please login first |
| `503` | _no server_                        | service is not started                        |
| `500` | _printer show completed interface_ | printer is showing completed                  |

interface that you can not operate printer  
_printer show powerloss interface_ | printer is showing powerloss interface
that you can not operate printer  
_printer show powerdown interface_ | printer is showing powerdown interface
that you can not operate printer  
_printer show extrude retract interface_ | printer is showing extrude retract
interface that you can not operate printer  
_printer show calibrate interface_ | printer is showing calibrate interface
that you can not operate printer  
_printer is busy_ | someone is operating the printer, or the printer is
pausing, resuming, recovering or stopping  
_printer is printing_ | printer is already printing,recover operation is not
supported  
_printer is paused_ | printer is already paused,recover operation is not
supported  
_printer is stoped_ | printer is already stoped,no operation is supported  
_unknown error_ | an unknown error was detected  
`10002` | _no last job found_ | there is no last job to be recovered

Dashborad

Get Statistics Information

GET /dashboard/statistics

Get printer statistical information like toatal printed time,number of total
printed files etc.

Example request URI:

_http://192.168.0.57:10800/v1/dashboard/statistics?token=7e03512ff53f81356d86af32ff58402e_

### Request

###### QUERY PARAMETERS

| parameter | type     | description         |
| --------- | -------- | ------------------- |
| `token`   | _string_ | user authentication |

### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of printer statistical information

###### EXAMPLE

    {
      "data": {
        "printed_file_num": 41,
        "printed_total_time": 492527,
        "printed_used_filament_0": 1473.8792724609375,
        "printed_used_filament_1": 0.0,
        "printed_used_filament": 1473.8792724609375
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

| parameter            | type   | description                                 |
| -------------------- | ------ | ------------------------------------------- |
| `status`             | _int_  | 1-ok 0-failed                               |
| `printed_file_num`   | _int_  | number of successfully printed files        |
| `printed_total_time` | _long_ | total time of successfully printed files in |

seconds  
`printed_used_filament` | _float_ | total fileament used by successfully
printed files in gram  
`printed_used_filament_0` | _float_ | total fileament used by successfully
printed files in gram from left nozzle  
`printed_used_filament_1` | _float_ | total fileament used by successfully
printed files in gram from right nozzle, if the printer only have one nozzle,
this parament will not be sent  
`code` | _int_ | error code  
`msg` | _string_ | error message

###### Error Code

| code  | msg           | description                                   |
| ----- | ------------- | --------------------------------------------- |
| `401` | _token error_ | token verification failed, please login first |
| `503` | _no server_   | service is not started                        |

Get Job List

GET /dashboard/joblist

Get the list of jobs displayed in the dashboard

Example request URI:

_http://192.168.0.57:10800/v1/dashboard/joblist?token=1a820f79c8cb9d201bc25d7754979300
&max_num=2&start_pos=9_

### Request

###### QUERY PARAMETERS

| parameter | type     | description                                               |
| --------- | -------- | --------------------------------------------------------- |
| `token`   | _string_ | user authentication                                       |
| `max_num` | _int_    | maximum number of job list that you want to get,but there |

may not be so many jobs in statistical job list  
`start_pos` | _int_ | index of the start job that you want to get in
statistical job list

### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of job list

###### EXAMPLE

    {
      "data": {
        "job_list": [
          {
            "file_name": "Loacl/a.gcode",
            "job_id": "4C530E1EB1D4_D0E782BF5B17_7e10712060a0703715",
            "user_tag": "hello",
            "job_index": 9
          },
          {
            "file_name": "Loacl/b.gcode",
            "job_id": "4C530E1EB1D4_D0E782BF5B17_7e10712090a1b3600f",
            "user_tag": "world",
            "job_index": 10
          }
        ]
      },
      "status": 1
    }


Returns an error

###### EXAMPLE

    {
      "error": {
        "code": 10002,
        "msg": "max_num error value(1~12)"
      },
      "status": 0
    }


###### RESPONSE PARAMENTS

| parameter   | type     | description                                              |
| ----------- | -------- | -------------------------------------------------------- |
| `status`    | _int_    | 1-ok 0-failed                                            |
| `file_name` | _string_ | absolute path of printed file including file name        |
| `job_id`    | _string_ | id of job which is used to distinguish between different |

jobs  
`job_index` | _int_ | Index of job in job list,which is used to find the job
that you can use it to get job details.  
`user_tag` | _string_ | the tag of job that added by user  
`code` | _int_ | error code  
`msg` | _string_ | error message

###### Error Code

| code    | msg                         | description                                   |
| ------- | --------------------------- | --------------------------------------------- |
| `401`   | _token error_               | token verification failed, please login first |
| `503`   | _no server_                 | service is not started                        |
| `10002` | _max_num error value(1~12)_ | the value of parament max_num is out          |

of the range (1~12)  
_start_pos error_ | the value of start*pos must be positive,and it also need
to smaller than the number of statistical printed files in dashborad, you can
get it from Get Statistics Information API.  
`10003` | \_busy* | server is busy that we can not get the response, please try
it again later.  

