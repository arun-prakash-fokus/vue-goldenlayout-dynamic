<template>
  <div class="nested">
    I am nested inside another component
    <h1>Nested Component</h1>
    <p>hello from Nested component</p>
    <button @click="someVal++">Nested Increment</button>
    <br />
    <p>{{someVal}}</p>
  </div>
</template>

<script>
export default {
  name: "nested-component",
  data: () => ({
    someVal: 0
  })
};
</script>

<style lang="css" scoped>
.nested {
  background: red;
}
</style>
