import * as applications from '../applications/types'

export const base = '/api'

export default {
  /*
  * requirements:
  *
  *   maintain following structure: model.action = url
  *   action title must start with CRUD counterpart in HTTP methods (POST, GET, PUT DELETE)_
  */
  applications: {
    [applications.GET_LIST]: () => `${base}/applications`,
    [applications.POST]: () => `${base}/applications`,
    [applications.GET]: (appId) => `${base}/applications/${appId}`,
    [applications.PUT_DISPLAYNAME]: (appId) => `${base}/applications/${appId}/displayName`,
    [applications.PUT_DESCRIPTION]: (appId) => `${base}/applications/${appId}/description`,
    [applications.PUT_VARIABLENAME]: (appId) => `${base}/applications/${appId}/variableName`,
    [applications.DELETE]: (appId) => `${base}/applications/${appId}`,
  }
}

