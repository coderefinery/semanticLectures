import reservedWords from "../../lib/reservedWords"

export const DEFAULT_APPLICATION = 'DEFAULT_APPLICATION'
export const APPLICATION_ATTRITUTE_RULES = 'APPLICATION_ATTRITUTE_RULES'

function generateApplication(timestamp) {
  return {
    id: `unsaved_application_${timestamp}`,
    displayName: 'My New Application',
    description: 'This application serves to fulfill a purpose',
    variableName: 'my_new_application', // auto-generate
    objects: [],
  }
}

export default {
  [DEFAULT_APPLICATION]: () => timestamp => generateApplication(timestamp),
  [APPLICATION_ATTRITUTE_RULES]: () => {
    return {
      displayName: [
        v => !!v || 'Provide a label to be used in User Interfaces'
      ],
      description: [
        v => !!v || 'Describe this application to your users and your future self'
      ],
      variableName: [
        v => !!v || 'Provide a variable title to represent this application in code',
        v => (v && !v.match(/^\d/)) || 'Variable title must not begin with a number',
        v => (v && v.match(/^[\w$]+$/)) !== null || 'Variable title can only contain the letters a-z, A-Z, 0-9, and _ or $', // todo: revisit upon ES9 release with RegExp unicode block shorthands.. \p{L}
        v => (v && [...reservedWords].indexOf(v) < 0) || `${v} is reserved and cannot be used`
      ]
    }
  }
}
