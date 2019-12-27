<template>
  <div>
    <h1>Component 2 Heading</h1>
    <p>hello from component 2</p>
    <button @click="someVal--">Decrement</button>
    <br />
    <p>{{someVal}}</p>
  </div>
</template>

<script>
export default {
  name: "component-2",
  data: () => ({
    someVal: 0
  })
};
</script>

<style>
</style>