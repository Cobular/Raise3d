Down Load Image

GET /fileops/imagedownload

DownLoad image in png from data file

Example request URI:

_http://192.168.0.57:10800/v1/fileops/imagedownload?data_path=Local%2Fcat.data
&width=32&height=32&token=544b232705ec326fc0919a8ac4daf926_

### Request

###### QUERY PARAMETERS

| parameter   | type     | description           |
| ----------- | -------- | --------------------- |
| `token`     | _string_ | user authentication   |
| `data_path` | _string_ | the path of data file |
| `width`     | _int_    | width of image        |
| `height`    | _int_    | height of image       |

### Response

STATUS 200 OK _-application/json_

Returns a full JSON representation of image content

###### EXAMPLE

    {
      "data": {
        "img_data": "iVBORw0KGgoAAAANSUhEUgAAABcAAAAgCAYAAAD5VeO1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHElEQVRIiYWW229cVxXGf+vcxhfi2k4cGij1bRJBy6VClaiEqCoqikQfKiGohIpA4qV9qZCQ+lRE6Bt/AC/NW3loRaW2bzwhEQEStBRIA00jmvEtjpMm9szYjn3OzDl7fzzMmfHYM42XNDrSPut8+9vf+tbaA8fErxYWzu889V398+w5HZd7NOy4BP3gh9re3mZifIwr//2QL1/7eOg3t7/2iNaLgkaW8mStZgDR8dsbZBk3V5aZDEOuP/SwWs6ReUfLiz1EjLGUZSRReIhvBHDj7FnlFrDlHOvyPLO0ZAAfVKvauPRvgjjmxKkZoiSh7Qr83j5pmuJVEApaiP08Z1qirQP1gsvVqm5XKrzaytiQmItifjM3J4ApM97Mc6ZmTuOcY3d7m53mNlma4pxDwGwYYiXfK3mb3T7w6G+FY/fuXZoSl5xj2owl76lVz4ogxMj5y/p1EmA2iikA7z0mD4IV5ygE7znHuSBgs5/58yvLtuw9Drguz2t5u1fpdmA8HSdUk4RvLCwyeuYMgffYiRNEI6O8kec05VmW7yndb6kIwB2p4U/jhFsSM16cnJjgg2aDq7UafyhyHg1Dikadd53jyTDijkQFoxoYBdDug++V9pezs9qU8MD3oxgBi1HEtaLgrtQj8CdX8EQYkSG2yvXTZrTVIVmXuC7PhbU161nxK0FIxYxteTYlEuBynuOAZXkmMTwwYwHr8rQFGcKAzwYhl7xjVZ6xo1bsSrMvkQrW5ficBRgQGdyH8ewDn2fqvkmQ+P1HH3FNnhjjx5UKv2tlbEqMYqTDZLkwN6+Kgafzu+QcMxYQW4eBQY+tK8kE5TMX7NORFODC2podAgd4dW5eIwYhRoZ4zzkMGMEQIsBQ+VGBOrZkMLrgh9q/iZjGqCCcYNYCVuX7jnrv2fVyUqGOeHphQVe8Hxxcv52b16hBJtiRqCMeC0NOWsD9k5Ns7e/zbppy1R8Y+HylQiZoSNySWPaeJe8/fXCFdIr5i7Fx2u2cFvB+vc5fXUHRl/fzJGFqbp56mtK4ucGa9/yn3HgAfI9O1R3w7MgoJ06dYvX2Hd5JU86Y8dIDX+CTRoP9vI2XeD3P+VatxttFzrfDiO1hbumPFx58UC8mFcI4YnJ6mndubLCH+J/3PB4e5vNn1znHV4OQPcQdL3YQF9bWLBgG/lwcc1einhesbtV5OEkGgE9ah9fjYcRpMy57R817dhBhmTNU8x1BiAgkinabogTpj62+6ffFIOS0RIbYlGiW74aC1yXiUjPP4cG2IxEAn7EDRR3QlNjnAPhTwVuobBbDIaK+0kzYYJkq5TfZkTYYCl4IZABC6ljyXlEAqeg1W7dDhxb0hZVleywI+V6c8NTYWM8R94qfVRJ+FMfEfWtDwQFGzZBBnucDxTwa3xkfJxLEGOeCA8ihB/7XYlX/cI5qFJIJ/l7kzFjA9BC9pwzGzNhSx+NfiiImJL5euzaY/cb8gr4ZhryW58QGOXDDe0YwHg3DXt5DJcMb8qSCD+W56Tsz8okw4qIrBpm/Pr+gUYMKxv1RxCOLi+RZyubtO7SLAucdvrzSCiBH7EnsCja852N5GhIbaXpxQMyum1oInOOtq1d7QK68KAo6jsrLmZ4DLcG4dZ4A7+/uvjJQ0Lca9V8P26w/VspZbRhW5gR0mq+bfyvLLg6Av91svtIDkeePrujdPt2YC4LeWv+7n8TJIaxj/+W+Ob+g7gjoXm2OjixdzbuynF9dOYT3f6t4vBhDcXT+AAAAAElFTkSuQmCC"
      },
      "status": 1
    }


Returns an error

###### EXAMPLE

    {
      "error": {
        "code": 404,
        "msg": "data file not exist"
      },
      "status": 0
    }


###### RESPONSE PARAMENTS

| parameter  | type     | description             |
| ---------- | -------- | ----------------------- |
| `status`   | _int_    | 1-ok 0-failed           |
| `img_data` | _string_ | data of image in base64 |
| `code`     | _int_    | error code              |
| `msg`      | _string_ | error message           |

###### Error Code

| code  | msg                   | description                                   |
| ----- | --------------------- | --------------------------------------------- |
| `401` | _token error_         | token verification failed, please login first |
| `404` | _data file not exist_ | the path of data file is error, there is no   |

such file  
`500` | _can not open IODevice_ | memory is not enough or other server error  
`503` | _no server_ | service is not started  
`10002` | _width error, range(1~1024)_ | witdh value error, range is (1~1024)  
_height error, range(1~1024)_ | height value error, range is (1~1024)  
`10004` | _data file error_ | the data file is corrupt and can not be parsed  
`10005` | _root path error_ | the root directory that you can access is
"Local/"  

