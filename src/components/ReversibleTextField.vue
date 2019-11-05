<template>
  <span>
    <span
      v-if="!showEditor"
      class="displayValue"
      @click="showEditor = true"
      v-text="visibleFieldValue(value)"
    ></span>
    <v-form
      v-else
      :model="validValue"
    >
      <v-text-field
        :value="visibleFieldValue(value, defaultValue)"
        :label="label"
        :rules="rules"
        :color="color"
        @keyup.enter="checkValue"
        @keyup.tab="checkValue"
        @keyup.esc="restoreValue"
        @blur="checkValue"
      />
    </v-form>
  </span>
</template>

<script>

  export default {
    name: "ReversibleTextField",
    props: {
      label: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      rules: {
        type: Array,
        default: function () {
          return [v => !!v || 'Describe this application to your users and your future self']
        }
      },
      action: {
        type: Function,
        required: true
      },
      color: {
        type: String,
        default: 'grey'
      },
      indexOfEditedField: {
        type: Boolean,
        default: false
      },
      defaultValue: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        showEditor: false,
        previousValue: '',
        validValue: true
      }
    },
    methods: {
      visibleFieldValue(value, defaultValue) {
        if (!defaultValue) defaultValue = '&lt;empty&gt;'
        return value || defaultValue
      },
      checkValue(e) {
        if (this.validValue) {
          this.previousValue = this.value
          this.value = e.target.value
          this.action(this.value)
          this.showEditor = false
        }
      },
      restoreValue(e) {
        this.value = this.previousValue
        this.action(this.previousValue)
        // compensate for broken watcher (force input update)
        e.target.value = this.value
        this.showEditor = false
      }
    }
  }
</script>

<style scoped>
  .displayValue {
    padding: 0;
    margin: 0;
  }
</style>
