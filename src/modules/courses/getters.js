import reservedWords from "../../lib/reservedWords"

export const DEFAULT_COURSE = 'DEFAULT_COURSE'
export const COURSE_ATTRIBUTE_RULES = 'COURSE_ATTRIBUTE_RULES'

function generateCourse(timestamp) {
  return {
    id: `unsaved_course_${timestamp}`,
    displayName: 'My New Course',
    description: 'This course serves to fulfill a purpose',
    variableName: 'my_new_course', // auto-generated
    episodes: []
  }
}

export default {
  [DEFAULT_COURSE]: () => timestamp => generateCourse(timestamp),
  [COURSE_ATTRIBUTE_RULES]: () => {
    return {
      displayName: [
        v => !!v || 'Provide a label to be used in User Interfaces'
      ],
      description: [
        v => !!v || 'Describe this course to your users and your future self'
      ],
      variableName: [
        v => !!v || 'Provide a variable title to represent this course in code',
        v => (v && !v.match(/^\d/)) || 'Variable title must not begin with a number',
        v => (v && v.match(/^[\w$]+$/)) !== null || 'Variable title can only contain the letters a-z, A-Z, 0-9, and _ or $', // todo: revisit upon ES9 release with RegExp unicode block shorthands.. \p{L}
        v => (v && [...reservedWords].indexOf(v) < 0) || `${v} is reserved and cannot be used`
      ]
    }
  }
}
