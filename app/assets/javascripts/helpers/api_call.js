import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

export default function apiCall({
  url, type, data, success, error
}) {
  let requestData = {}

  if (!url) { throw new Error('apiCall: Missing url') }

  requestData.method = 'GET'
  requestData.credentials = 'same-origin'

  if (type && type.toLowerCase() !== 'get') {
    requestData.method = type.toUpperCase()
    url = `${url}?authenticity_token=${encodeURIComponent(_token)}`

    if (data) {
      requestData.body = JSON.stringify(data)
      requestData.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }

  let promise = fetch(url, requestData)

  if (success) {
    return promise
      .then((response) => response.json())
      .then((responseData) => success ? success(responseData) : null)
      .catch((ex => error ? error(ex) : console.log(ex)))
  }

  return promise
}
