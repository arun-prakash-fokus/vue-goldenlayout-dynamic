<template>
  <div>
    <h1>Component 1 Heading</h1>
    <p>hello from component 1</p>
    <button @click="someVal++">Increment</button>
    <br />
    <p>{{someVal}}</p>
    <nested-component />
  </div>
</template>

<script>
import NestedComponent from "./NestedComponent";
export default {
  name: "component-1",
  components: {
    NestedComponent
  },
  data: () => ({
    someVal: 0
  })
};
</script>

<style>
</style>