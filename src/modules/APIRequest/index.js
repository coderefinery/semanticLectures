import axios from 'axios'
import urls from './urls'

const client = axios.create({
  baseURL: urls.base
})

function lookupUrl(model, action, ...ids) {
  console.log('model:',model, 'action:', action, 'ids:', ids)
  let url = urls[model][action](...ids)
  if (url.indexOf('/undefined') >= 0) {
    console.error('malformed url lookup', model, action, ...ids)
    console.error('url catalog', urls)
    url = undefined
  }
  return url
}

function getMethod(action) {
  let method = action.toLowerCase()
  if (action.indexOf('_') >= 0) {
    method = action.toLowerCase().substring(0, action.indexOf('_'))
  }
  const isSupportedMethod = ['post', 'get', 'put', 'delete'].indexOf(method) >= 0
  if (!isSupportedMethod) {
    console.error('unsupported HTTP method', method, action)
    throw 'unsupported HTTP method'
  }
  return method
}

export function getRequestContext(model, action, ...ids) {
  console.warn('REDO REQUESTS...')

  return {
    method: getMethod(action),
    url: lookupUrl(model, action, ...ids)
  }
}

export default function APIRequest(context, update, next) {
  if (context.method === 'PUT' && update.updatedValue === undefined) { // debugging feature
    console.error('for HTTP PUT requests update.updatedValue cannot be <undefined>')
    return
  }
  client[context.method](context.url, update)
      .then((response) => {
        if (response !== undefined) {
          console.log('response', response)
          next(response.data)
        }
      })
      .catch(error => {
        console.warn('request error', error)
        // todo: revert update
        Promise.reject(error)
      })
}

