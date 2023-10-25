Raise Touch Remote Access API

## Structure of the REST URIs

The template of API URI like http://{ip}:10800/v1/{api interface}

{ip} represents printer IP

Example: http://192.168.0.57:10800/v1/login

Attention: Url need to be encoded to UTF-8 to prevent special characters

Example:
http://192.168.0.57:10800/v1/fileops/imagedownload?data_path=Local%2Fmmm%2Fcat.data&width=32&height=32&token=544b232705ec326fc0919a8ac4daf926

## HTTP Response Status Code

parameter | description  
---|---  
`200 OK` |

success  
  
`400 Bad Request` |

Please check whether the parameters in the sent data are missing or incorrect,
or the parameter format does not match the content-type  
  
`404 Not Found` |

Resource not found or API interface address error  
  
`405 Method Not Allowed` |

Request method does not support, currently only supports POST, GET, OPTION
request  
  
`413 Request Entity Too Large` |

Transmission data is too large, non-file transmission ceiling 1MB  
  
`415 Unsupported Media Type` |

The interface that is accessed does not support this data format  
  
`429 Too Many Requests` |

Too many requests, please visit later  
  
`500 Internal Server Error` |

You need to restart the API.Turn off the Enable Remote Access API switch and
turn on the swicth that will restart the API.  
