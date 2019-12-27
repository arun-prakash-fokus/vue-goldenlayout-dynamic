<template>
  <div>
    <h1>Component 3 Heading</h1>
    <p>hello from component 3</p>
    <button @click="someVal++">Increment</button>
    <br />
    <p>{{someVal}}</p>
  </div>
</template>

<script>
export default {
  name: "component-3",
  data: () => ({
    someVal: 0
  })
};
</script>

<style>
</style>