import reservedWords from "../../lib/reservedWords"

export const DEFAULT_SUMMARY = 'DEFAULT_SUMMARY'
export const SUMMARY_ATTRIBUTE_RULES = 'SUMMARY_ATTRIBUTE_RULES'

function generateSUmmary(timestamp) {
  return {
    id: `unsaved_summary_${timestamp}`,
    displayName: 'My New SUmmary',
    description: 'This summary serves to fulfill a purpose',
    variableName: 'my_new_summary', // auto-generated
    objects: [],
  }
}

export default {
  [DEFAULT_SUMMARY]: () => timestamp => generateSUmmary(timestamp),
  [SUMMARY_ATTRIBUTE_RULES]: () => {
    return {
      displayName: [
        v => !!v || 'Provide a label to be used in User Interfaces'
      ],
      description: [
        v => !!v || 'Describe this summary to your users and your future self'
      ],
      variableName: [
        v => !!v || 'Provide a variable title to represent this summary in code',
        v => (v && !v.match(/^\d/)) || 'Variable title must not begin with a number',
        v => (v && v.match(/^[\w$]+$/)) !== null || 'Variable title can only contain the letters a-z, A-Z, 0-9, and _ or $', // todo: revisit upon ES9 release with RegExp unicode block shorthands.. \p{L}
        v => (v && [...reservedWords].indexOf(v) < 0) || `${v} is reserved and cannot be used`
      ]
    }
  }
}
