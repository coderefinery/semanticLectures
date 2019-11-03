import reservedWords from "../../lib/reservedWords"

export const DEFAULT_EXPANSION = 'DEFAULT_EXPANSION'
export const EXPANSION_ATTRIBUTE_RULES = 'EXPANSION_ATTRIBUTE_RULES'

function generateExpansion(timestamp) {
  return {
    id: `unsaved_expansion_${timestamp}`,
    displayName: 'My New Expansion',
    description: 'This expansion serves to fulfill a purpose',
    variableName: 'my_new_expansion', // auto-generated
    objects: [],
  }
}

export default {
  [DEFAULT_EXPANSION]: () => timestamp => generateExpansion(timestamp),
  [EXPANSION_ATTRIBUTE_RULES]: () => {
    return {
      displayName: [
        v => !!v || 'Provide a label to be used in User Interfaces'
      ],
      description: [
        v => !!v || 'Describe this expansion to your users and your future self'
      ],
      variableName: [
        v => !!v || 'Provide a variable title to represent this expansion in code',
        v => (v && !v.match(/^\d/)) || 'Variable title must not begin with a number',
        v => (v && v.match(/^[\w$]+$/)) !== null || 'Variable title can only contain the letters a-z, A-Z, 0-9, and _ or $', // todo: revisit upon ES9 release with RegExp unicode block shorthands.. \p{L}
        v => (v && [...reservedWords].indexOf(v) < 0) || `${v} is reserved and cannot be used`
      ]
    }
  }
}
