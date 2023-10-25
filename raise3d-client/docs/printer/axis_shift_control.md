Axis Shift Control

POST /printer/axiscontrol/set

This API provides function of shifting the xAxis, yAxis,zAxis,eAxis. There are
two control modes, relative movement and absolute movement. In absolute
movement mode all coordinates from now on are absolute relative to the origin
of the machine. In relative movement mode all coordinates from now on are
relative to the last position.

Example request URI:

_http://192.168.0.57:10800/v1/printer/axiscontrol/set?token=7e03512ff53f81356d86af32ff58402e_

Example request Body

_-application/json_

###### EXAMPLE

    {
      "is_relative_pos": 0,
      "feed": 6000,
      "x": 300,
      "y": 300
    }



    {
      "is_relative_pos": 0,
      "feed": 1200,
      "z": 300
    }



    {
      "is_relative_pos": 0,
      "nozzle": 0,
      "feed": 600,
      "e": 10
    }


### Request

###### QUERY PARAMETERS

| parameter         | type     | description         |
| ----------------- | -------- | ------------------- |
| `token`           | _string_ | user authentication |
| `is_relative_pos` | _int_    |

0 - absoulte mode

1 - relative mode

`feed` | _int_ | feedrate of axis shift in millimeters per minute,range is
(0~8000) for xAxis, yAxis, zAxis and (0~2400) for eAxis  
`x` | _int_ | In absoulte mode, the value is the xAxis coordinate in
millimeters, if it is negative it will be set to zero. In relative mode, the
value is the vector movement to xAxis in millimeters, the range of value is
(-10~10). This parament is not necessary to send.  
`y` | _int_ | In absoulte mode, the value is the yAxis coordinate in
millimeters, if it is negative it will be set to zero. In relative mode, the
value is the vector movement to yAxis in millimeters, the range of value is
(-10~10). This parament is not necessary to send.  
`z` | _int_ | In absoulte mode, the value is the zAxis coordinate in
millimeters, if it is negative it will be set to zero. In relative mode, the
value is the vector movement to zAxis in millimeters, the range of value is
(-10~10). This parament is not necessary to send.  
`nozzle` | _int_ | Indicate feed which nozzle

0 - left nozzle

1 - right nozzle

`e` | _int_ | the value of material feeding in millimeters,range is (-10~10)
in relative mode and (-10000~10000) in aboslute mode. If the value is
negative, it will exit material from printer

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
        "msg": "feed_xy error value(60~6000)"
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
| `404` | _no right nozzle_         | the printer does't have right nozzle          |
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
`10002` | _nozzle error value(0 or 1)_ | the value of nozzle is error, 0-left
nozzle and 1-right nozzle  
_feed error xyz value(0~8000)_ | the value of feedrate setting for xyz axis is
error and the range is (0~8000) in millimeters per minute  
_feed error e value(0~2400)_ | the value of feedrate setting for eAxis is
error and the range is (0~2400) in millimeters per minute  
_x error relative model value(-10~10)_ | In relative mode, the range of vector
movement to xAxis is (-10~10) in millimeters  
_x error aboslute model value(0~305)_ | In absolute mode, the range of xAxis
coordinate is (0~305) in millimeters. The max value is different to different
printer models  
_y error relative model value(-10~10)_ | In relative mode, the range of vector
movement to yAxis is (-10~10) in millimeters  
_y error aboslute model value(0~305)_ | In absolute mode, the range of yAxis
coordinate is (0~305) in millimeters. The max value is different to different
printer models  
_z error relative model value(-10~10)_ | In relative mode, the range of vector
movement to zAxis is (-10~10) in millimeters  
_z error aboslute model value(0~305)_ | In absolute mode, the range of zAxis
coordinate is (0~305) in millimeters. The max value is different to different
printer models  
_e error relative model value(-10~10)_ | In relative mode, the range of
movement to eAxis is (-10~10) in millimeters  
_e error aboslute model value(-10000~10000)_ | In absolute mode, the range of
eAxis coordinate is (-10000~10000) in millimeters.
