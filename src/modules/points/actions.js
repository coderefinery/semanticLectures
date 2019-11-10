import namespace, * as model from './types'
import axios from 'axios'

const baseUrl = 'https://github.com/mehimself/semanticLecturesData/blob/master'
export default {
  [model.GET_LIST]({commit}){
    // todo: request points from backend
    // todo: hold them ready in rootState.points
    commit[model.GET_LIST]([
      {
        'git is a version control system': 'Git is a *version control system*: can record snapshots and track the content of a folder as it changes over time.'
      }
    ])
  },
  [model.GET]({commit}, name) {
    const url = `${baseUrl}/${encodeURIComponent(namespace)}/${encodeURIComponent(name)}}`
    axios.get(url,
      function (response) {
        console.log(response)
      })
  }
}
