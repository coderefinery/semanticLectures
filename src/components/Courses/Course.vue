<template>
  <div class="course mb-4">
     {{ item.displayName }}
     <re-structured-text :txt="item.body" :id="id"/>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from "../../modules/courses"
  import * as actions from "../../modules/courses/types"

  import ReStructuredText from '../ReStructuredText/ReStructuredText'
  import generateJSName from "../../lib/generateVariableName"

  export default {
    name: 'Course',
    components: {
      ReStructuredText
    },
    props: {
      id: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        rules: {
          displayName: [
            v => !!v || 'Give this course a title'
          ],
          description: [
            v => !!v || 'Describe this Course to your users and your future self'
          ],
          variableName: [ // todo: keep this behind the scenes
            v => !!v || 'Provide a variable title to represent this Course in code',
            v => (v && !v.match(/^\d/)) || 'Variable title must not begin with a number',
            v => (v && v.match(/^[\w$]+$/)) !== null || 'Variable title can only contain the letters a-z, A-Z, 0-9, and _ or $', // todo: revisit upon ES9 release with RegExp unicode block shorthands.. \p{L}
            v => (v && this.reservedWords.indexOf(v) < 0) || `${v} is reserved and cannot be used`
          ]
        },
      }
    },
    computed: {
      ...mapState({
        item: function ({items}) {return items.find(item => {
          this.$store.commit('box/SET_SCENE_HEIGHT_IS_DIRTY', true, {root: true})
          return item.id === this.id
        })},
      }),
      reservedWords: state => [...state.reservedWords]
    },
    methods: {
      ...mapActions([
          actions.PUT_DISPLAYNAME,
          actions.PUT_DESCRIPTION,
          actions.PUT_VARIABLENAME
        ]
      ),
      codeName: generateJSName,
      onDisplayNameChange(updatedValue) {
        this[actions.PUT_DISPLAYNAME]({
          id: this.id,
          updatedValue
        })
      },
      onDescriptionChange(updatedValue) {
        this[actions.PUT_DESCRIPTION]({
          id: this.id,
          updatedValue
        })
      },
      onVariableNameChange(updatedValue) {
        this[actions.PUT_VARIABLENAME]({
          id: this.id,
          updatedValue
        })
      }
    },
  }
</script>

<style scoped>
  .json .string.editable {
    color: darkgreen
  }
  .json .colon {
    margin-right: .3em;
  }
  .json .block {
    margin-left: 1em;
  }
  .container {
    padding: 0
  }
</style>
