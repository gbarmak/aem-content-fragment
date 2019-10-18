<template>
  <div class="main">
        <div class="left-section"><LeftNav /></div>
        <div class="right-section"><Banner /></div>
    </div>
</template>

<script>
import Banner from './components/Banner'
import LeftNav from './components/LeftNav'

export default {
  name: 'app',
  components: {
    Banner,
    LeftNav
  }
}
</script>

<style scoped>
.main{
  font-family: TradeGothic,Arial Narrow,helvetica,arial,sans-serif;
  display: flex;
}

.left-section{
  flex-grow: 1;
  background-color: #f5f5f5;
}

.right-section{
  flex-grow: 4;
}
</style>
