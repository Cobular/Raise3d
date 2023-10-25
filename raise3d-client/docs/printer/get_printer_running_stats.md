Get Printer Running Status

GET /printer/runningstatus

Example request URI:

_http://192.168.0.57:10800/v1/printer/runningstatus?token=7e03512ff53f81356d86af32ff58402e_

### Request

###### QUERY PARAMETERS

| parameter | type     | description         |
| --------- | -------- | ------------------- |
| `token`   | _string_ | user authentication |

### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of printer running status

###### EXAMPLE

    {
      "data": {
        "running_status": "idle"
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

| parameter        | type     | description   |
| ---------------- | -------- | ------------- |
| `status`         | _int_    | 1-ok 0-failed |
| `running_status` | _string_ |

The running status of printer. Possible status is

idle - the printer is idle

paused - the printer has paused current job

running - the printer is printing

busy - someone is operating the printer, or the printer is pausing, resuming,
recovering or stopping

completed - the printer is showing completed view

error - the serial port is disconnected or the printer is in safe mode

`code` | _int_ | error code  
`msg` | _string_ | error message

###### Error Code

| code  | msg           | description                                   |
| ----- | ------------- | --------------------------------------------- |
| `401` | _token error_ | token verification failed, please login first |
| `503` | _no server_   | service is not started                        |
