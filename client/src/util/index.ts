import EndpointDetails from '../model/endpoint'

interface ResultData {
  response: object,
  valid: boolean,
  errorMsg: string
}

interface ServerEndpointDetails {
  endpoint: string, status: number, response: object, method: string
}


export function convertResponseToObj(response: string) {
  let newResult: ResultData = {
    response: {},
    valid: true,
    errorMsg: ''
  }
  try {
    newResult.response = JSON.parse(response)
  } catch (e) {
    newResult.valid = false
    newResult.errorMsg = 'Invalid JSON input'
    return newResult
  }
  return newResult
}


export function parseEndpoint(endpointArray: ServerEndpointDetails[]) {
  let parsedEndpointArray: EndpointDetails[]
  parsedEndpointArray = endpointArray.map((data) => {
    let newData = {
      endpoint: data.endpoint, 
      status: data.status, 
      response: JSON.stringify(data.response, null, 2), 
      method: data.method
    }
    return newData
  })
  return parsedEndpointArray
}