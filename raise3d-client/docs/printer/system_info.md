Get Printer System Information

GET /printer/system

Get printer system information, like language, brightness

Example request URI:

_http://192.168.0.57:10800/v1/printer/system?token=7e03512ff53f81356d86af32ff58402e_

### Request

###### QUERY PARAMETERS

| parameter | type     | description         |
| --------- | -------- | ------------------- |
| `token`   | _string_ | user authentication |

### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of printer system information

###### EXAMPLE

    {
      "data": {
        "Serial_number": "12345678942",
        "api_version": "0.1.0.307",
        "battery": 3.957441568374634,
        "brightness": 1,
        "date_time": "2017-08-16 07:08:59",
        "firmware_version": "1.1.6-rev1",
        "language": "English",
        "machine_id": "16363785338095344960",
        "machine_ip": "192.168.0.57",
        "machine_name": "raise3d",
        "model": "Raise3D N2Plus",
        "nozzies_num": 2,
        "storage_available": 4914340,
        "update": "",
        "version": "0.9.3.1165"
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

| parameter           | type     | description                   |
| ------------------- | -------- | ----------------------------- |
| `status`            | _int_    | 1-ok 0-failed                 |
| `Serial_number`     | _string_ | serial number                 |
| `api_version`       | _string_ | API VERSION                   |
| `battery`           | _float_  | battery voltage               |
| `brightness`        | _int_    | screen brightness             |
| `date_time`         | _string_ | UTC Time                      |
| `firmware_version`  | _string_ | firmware version              |
| `language`          | _string_ | locales                       |
| `machine_id`        | _string_ | printer Id                    |
| `machine_ip`        | _string_ | printer IP                    |
| `machine_name`      | _string_ | printer name                  |
| `model`             | _string_ | the model of printer          |
| `nozzies_num`       | _int_    | the number of nozzles         |
| `storage_available` | _int_    | available storage space in KB |
| `update`            | _string_ | update                        |
| `version`           | _string_ | printer system version        |
| `code`              | _int_    | error code                    |
| `msg`               | _string_ | error message                 |

###### Error Code

| code  | msg           | description                                   |
| ----- | ------------- | --------------------------------------------- |
| `401` | _token error_ | token verification failed, please login first |
| `503` | _no server_   | service is not started                        |
