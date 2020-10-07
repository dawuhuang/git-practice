<template>
  <div id="app">
    <my-addition></my-addition>

    <p>----------------</p>
    <my-subtraction></my-subtraction>
  </div>
</template>
<script>
import Addition from './components/Addition'
import Subtraction from './components/Subtraction'

export default {
  data() {
    return {}
  },
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction
  }
}
</script>

<style l scoped></style>
