import namespace, * as model from './types'
import axios from 'axios'

const baseUrl = 'https://github.com/mehimself/semanticLecturesData/blob/master'
export default {
  [model.GET]({commit}, name) {
    const url = `${baseUrl}/${encodeURIComponent(namespace)}/${encodeURIComponent(name)}}`
    axios.get(url,
      function (response) {
        console.log(response)
      })
  }
}
