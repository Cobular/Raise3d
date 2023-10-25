Get Printer Basic Information

GET /printer/basic

Get printer basic information that is unrelated to specific nozzle.

Example request URI:

_http://192.168.0.57:10800/v1/printer/basic?token=7e03512ff53f81356d86af32ff58402e_

### Request

###### QUERY PARAMETERS

| parameter | type     | description         |
| --------- | -------- | ------------------- |
| `token`   | _string_ | user authentication |

### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of printer basic information

###### EXAMPLE

    {
      "data": {
        "fan_cur_speed": 0,
        "fan_tar_speed": 0,
        "feed_cur_rate": 100,
        "feed_tar_rate": 100,
        "heatbed_cur_temp": 25,
        "heatbed_tar_temp": 0
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

| parameter          | type     | description                                    |
| ------------------ | -------- | ---------------------------------------------- |
| `status`           | _int_    | 1-ok 0-failed                                  |
| `fan_cur_speed`    | _float_  | fan current speed                              |
| `fan_tar_speed`    | _float_  | fan target speed                               |
| `feed_cur_rate`    | _float_  | nozzle feed current speed                      |
| `feed_tar_rate`    | _float_  | nozzle feed target speed                       |
| `heatbed_cur_temp` | _float_  | heatbed current temperature in degrees Celsius |
| `heatbed_tar_temp` | _float_  | heatbed target temperature in degrees Celsius  |
| `code`             | _int_    | error code                                     |
| `msg`              | _string_ | error message                                  |

###### Error Code

| code  | msg           | description                                   |
| ----- | ------------- | --------------------------------------------- |
| `401` | _token error_ | token verification failed, please login first |
| `503` | _no server_   | service is not started                        |
