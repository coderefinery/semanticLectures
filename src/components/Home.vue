<template>
  <div class="home">
    <v-container>
      <v-layout
        align-center
      >
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h1>Semantic Lectures</h1>
            </v-card-title>
            <v-card-text>
              <p>
                This app aims at providing layered Lectures for studying complex topics in workshops, classrooms, or
                 self-study.
              </p>
              <p>
                Please edit the .md files in course
              </p>
              <vue-markdown># vue Markdown</vue-markdown>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  //import Md from './Md/Md'
  export default {
    name: 'Home',
    data() {
      return {
        course: `# _Hello World!_`
      }
    }
  }
</script>
<style scoped>

</style>
