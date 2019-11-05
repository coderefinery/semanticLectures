<template>
  <div>
    <re-structured-text-output
      v-for="(kidStruct, index) in struct.children"
      :key="index"
      :id="hrefId"
      :struct="kidStruct"
    ></re-structured-text-output>
  </div>
</template>

<script>
  function findTextLeaf(struct) {
    let text = ''
    if (struct.children) {
      for (let i = 0; i < struct.children.length; i++) {
        text += findTextLeaf(struct.children[0])
      }
    } else {
      text = struct.value
    }
    return text
  }
  export default {
    name: "RestTitle",
    props: {
      struct: {
        type: Object,
        required: true
      }
    },
    computed: {
      hrefId() {

        return encodeURIComponent(findTextLeaf(this.struct))
      }
    }
  }
</script>

<style scoped>

</style>
