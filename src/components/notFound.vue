<template>
  <div class="notFound">
    <h2 class="message">
      Under Construction
    </h2>
  </div>
</template>

<script>
  export default {
    name: "notFound"
  }
</script>

<style scoped>
  .notFound {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: repeating-linear-gradient(
      45deg,
      #000,
      #000 10px,
      #ffd809 10px,
      #ffd809 20px
    )
  }
  .message {
    background-color: rgba(255,255,255,0.95);
    padding: 6em;
    color: black;
    text-align: center;
    border-radius: 5px;
    box-shadow: rgba(0,0,0,0.3) 8px 10px 3px;
  }
</style>
