<template>
  <div class="document">
    <v-container>
      <v-layout
        align-center
      >
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h1>
                <reversible-text-field
                  :value.sync="displayName"
                  :default-value="displayName"
                  :rules="rules.displayName"
                  :action="onDisplayNameChange"
                  label="Application Name"
                />
                <v-subheader>
                  <reversible-text-field
                    :value.sync="variableName"
                    :default-value="codeName(displayName)"
                    :rules="rules.variableName"
                    :action="onVariableNameChange"
                    label="Variable Name for this Application"
                  />
                </v-subheader>
              </h1>
              <data-objects
                :appId="appId"
              />
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from "../../modules/applications"
  import * as actions from "../../modules/applications/types"

  import ReversibleTextField from "../ReversibleTextField"

  export default {
    name: 'Application',
    components: {
      ReversibleTextField,
    },
    props: {
      appId: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        rules: {
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
            v => (v && this.reservedWords.indexOf(v) < 0) || `${v} is reserved and cannot be used`
          ]
        },
      }
    },
    computed: {
      ...mapState({
        displayName: function ({items}) { return items.find(item => item._id === this.appId).displayName },
        description: function ({items}) { return items.find(item => item._id === this.appId).description },
        variableName: function ({items}) { return items.find(item => item._id === this.appId).variableName },
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
      ...mapGetters({
        codeName: function () {
          this.$store.getters.DISPLAYNAME_TO_VARIABLENAME(this.displayName)
        }
      }),
      onDisplayNameChange(updatedValue) {
        this[actions.PUT_DISPLAYNAME]({
          appId: this.appId,
          updatedValue
        })
      },
      onDescriptionChange(updatedValue) {
        this[actions.PUT_DESCRIPTION]({
          appId: this.appId,
          updatedValue
        })
      },
      onVariableNameChange(updatedValue) {
        this[actions.PUT_VARIABLENAME]({
          appId: this.appId,
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
