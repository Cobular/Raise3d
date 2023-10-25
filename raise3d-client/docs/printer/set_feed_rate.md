Set Feed Rate

POST /printer/feedrate/set

This API provides the function that you can set the speed of nozzles move

Example request URI:

_http://192.168.0.57:10800/v1/printer/feedrate/set?token=7e03512ff53f81356d86af32ff58402e_

Example request Body

_-application/json_

###### EXAMPLE

    {
      "feedrate":300
    }


### Request

###### QUERY PARAMETERS

| parameter  | type     | description                                  |
| ---------- | -------- | -------------------------------------------- |
| `token`    | _string_ | user authentication                          |
| `feedrate` | _int_    | the value of feedrate setting，Range(1~350)% |

### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of set command success or not

###### EXAMPLE

    {
      "status": 1
    }


Returns an error

###### EXAMPLE

    {
      "error": {
        "code": 10002,
        "msg": "feedrate error value(1~350)"
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

| code  | msg                       | description                                   |
| ----- | ------------------------- | --------------------------------------------- |
| `401` | _token error_             | token verification failed, please login first |
| `503` | _no server_               | service is not started                        |
| `500` | _printer is in safe mode_ | If the hardware or serial port error, then    |

it will enter the safe mode. In safe mode, you can not control the shift axis,
advance and retreat material, set the job running state, set the temperature,
set the extrusion head speed, set the flow rate, set the extrusion head speed
etc.  
_printer is not ready_ | the printer is not fully started  
_printer is busy_ | someone is operating the printer, or the printer is
pausing, resuming, recovering or stopping  
_serial is disconnected_ | Serial port is not connected, the possible reason
is that the serial line is not connected or other hardware error  
_unknown error_ | an unknown error was detected  
`10002` | _feedrate error value(1~350)_ | the value of feedrate setting is
error and the range of the value is (1~350)%  
