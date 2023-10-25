Set Current Job

POST /job/currentjob/set

Example request URI:

_http://192.168.0.57:10800/v1/job/currentjob/set?token=7e03512ff53f81356d86af32ff58402e_

Example request Body

_-application/json_

###### EXAMPLE

    {
      "operate": "pause"
    }


### Request

###### QUERY PARAMETERS

| parameter | type     | description                                          |
| --------- | -------- | ---------------------------------------------------- |
| `token`   | _string_ | user authentication                                  |
| `operate` | _string_ | Operation to printer. The possible value you can set |

is:

pause - pause current job

resume - resume current job from paused status

stop - stop printing current job

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
        "msg": "operate parament error"
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
_printer is printing_ | printer is already printing,resume operation is not
supported  
_printer is paused_ | printer is already paused,pause operation is not
supported  
_printer is stoped_ | printer is already stoped,no operation is supported  
_unknown error_ | an unknown error was detected  
`10002` | _operate parament error_ | please check operate parament, the
possible value is pause, resume and stop  

