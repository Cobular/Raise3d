Get Right Nozzle Information

GET /printer/nozzle2

Example request URI:

_http://192.168.0.57:10800/v1/printer/nozzle2?token=7e03512ff53f81356d86af32ff58402e_

### Request

###### QUERY PARAMETERS

| parameter | type     | description         |
| --------- | -------- | ------------------- |
| `token`   | _string_ | user authentication |

### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of rignt nozzle information

###### EXAMPLE

    {
      "data": {
        "flow_cur_rate": 100,
        "flow_tar_rate": 100,
        "nozzle_cur_temp": 26,
        "nozzle_tar_temp": 10
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

| parameter         | type    | description                                 |
| ----------------- | ------- | ------------------------------------------- |
| `status`          | _int_   | 1-ok 0-failed                               |
| `flow_cur_rate`   | _float_ | right nozzle current extrusion speed        |
| `flow_tar_rate`   | _float_ | right nozzle target extrusion speed         |
| `nozzle_cur_temp` | _float_ | right nozzle current temperature in degrees |

Celsius  
`nozzle_tar_temp` | _float_ | right nozzle target temperature in degrees
Celsius  
`code` | _int_ | error code  
`msg` | _string_ | error message

###### Error Code

| code  | msg               | description                                   |
| ----- | ----------------- | --------------------------------------------- |
| `401` | _token error_     | token verification failed, please login first |
| `404` | _no right nozzle_ | the printer does't have right nozzle          |
| `503` | _no server_       | service is not started                        |
