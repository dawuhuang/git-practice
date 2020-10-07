<template>
  <div>
    <h3>当前最新的count值为：{{ count }}</h3>
    <button @click="btnHandler2">-1</button>
    <button @click="btnHandler3">-3</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['sub','subN']),
    btnHandler2() {
      this.sub()
    },
    btnHandler3() {
      this.subN(3)
    }
  }
}
</script>
