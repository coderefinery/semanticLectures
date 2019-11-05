<template>
  <div :class="struct.type">
    <div
      v-if="struct.children"
    >
      <render-re-s-t-component
        v-for="(kid, index) in struct.children"
        :key="index"
        :struct="struct.children[index]"
      ></render-re-s-t-component>
    </div>
    <span
      v-if="struct.type === 'text'"
      v-html="struct.value"
    ></span>
    <component
      v-else
      :is="getMappedComponentName(struct.type)"
      :type="struct.type"
      :value="struct.value"
    ></component>
  </div>
</template>

<script>
  import Text from './components/Text'
  export default {
    name: "renderReSTComponent",
    components: {
      Text
    },
    props: {
      struct: {
        type: Object,
        required: true
      }
    },
    methods: {
      getMappedComponentName(typename) {
        const map = {
          comment: 'Text'
        }
        return map[typename]
      }
    }
  }
</script>

<style scoped>

</style>
