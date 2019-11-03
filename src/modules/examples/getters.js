import reservedWords from "../../lib/reservedWords"

export const DEFAULT_EXAMPLE = 'DEFAULT_EXAMPLE'
export const EXAMPLE_ATTRIBUTE_RULES = 'EXAMPLE_ATTRIBUTE_RULES'

function generateExample(timestamp) {
  return {
    id: `unsaved_example_${timestamp}`,
    displayName: 'My New Example',
    description: 'This example serves to fulfill a purpose',
    variableName: 'my_new_example', // auto-generated
    objects: [],
  }
}

export default {
  [DEFAULT_EXAMPLE]: () => timestamp => generateExample(timestamp),
  [EXAMPLE_ATTRIBUTE_RULES]: () => {
    return {
      displayName: [
        v => !!v || 'Provide a label to be used in User Interfaces'
      ],
      description: [
        v => !!v || 'Describe this example to your users and your future self'
      ],
      variableName: [
        v => !!v || 'Provide a variable title to represent this example in code',
        v => (v && !v.match(/^\d/)) || 'Variable title must not begin with a number',
        v => (v && v.match(/^[\w$]+$/)) !== null || 'Variable title can only contain the letters a-z, A-Z, 0-9, and _ or $', // todo: revisit upon ES9 release with RegExp unicode block shorthands.. \p{L}
        v => (v && [...reservedWords].indexOf(v) < 0) || `${v} is reserved and cannot be used`
      ]
    }
  }
}
