import reservedWords from "../../lib/reservedWords"

export const DEFAULT_POINT = 'DEFAULT_POINT'
export const POINT_ATTRIBUTE_RULES = 'POINT_ATTRIBUTE_RULES'

function generatePoint(timestamp) {
  return {
    id: `unsaved_point_${timestamp}`,
    displayName: 'My New Point',
    description: 'This point serves to fulfill a purpose',
    variableName: 'my_new_point', // auto-generated
    objects: [],
  }
}

export default {
  [DEFAULT_POINT]: () => timestamp => generatePoint(timestamp),
  [POINT_ATTRIBUTE_RULES]: () => {
    return {
      displayName: [
        v => !!v || 'Provide a label to be used in User Interfaces'
      ],
      description: [
        v => !!v || 'Describe this point to your users and your future self'
      ],
      variableName: [
        v => !!v || 'Provide a variable title to represent this point in code',
        v => (v && !v.match(/^\d/)) || 'Variable title must not begin with a number',
        v => (v && v.match(/^[\w$]+$/)) !== null || 'Variable title can only contain the letters a-z, A-Z, 0-9, and _ or $', // todo: revisit upon ES9 release with RegExp unicode block shorthands.. \p{L}
        v => (v && [...reservedWords].indexOf(v) < 0) || `${v} is reserved and cannot be used`
      ]
    }
  }
}
