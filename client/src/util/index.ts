import EndpointDetails from '../model/endpoint'

interface ServerEndpointDetails {
  endpoint: string, status: number, response: object, method: string
}
interface ClientEndpointDetails {
  endpoint: string, status: number, response: string, method: string
}

export function isValidJson(response: string) {
  let result: boolean = false
  try {
    JSON.parse(response)
    result = true
  } catch (e) {
    return result
  }
  return result
}


export function parseServerToClientEndpointList(endpointArray: ServerEndpointDetails[]) {
  let parsedEndpointArray: EndpointDetails[]
  parsedEndpointArray = endpointArray.map((data) => {
    return parseServerToClient(data)
  }
  )
  return parsedEndpointArray
}

export function parseServerToClient(serverEndpoint: ServerEndpointDetails) {
  let clientEndpoint = {
    endpoint: serverEndpoint.endpoint,
    status: serverEndpoint.status,
    response: JSON.stringify(serverEndpoint.response, null, 2),
    method: serverEndpoint.method
  }
  return clientEndpoint
}

export function parseClientToServer(clientEndpoint: ClientEndpointDetails) {
  let serverEndpoint = {
    endpoint: clientEndpoint.endpoint,
    status: clientEndpoint.status,
    response: JSON.parse(clientEndpoint.response),
    method: clientEndpoint.method
  }
  return serverEndpoint
}