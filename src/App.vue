<template>
  <div class="main">
        <div class="left-section"><LeftNav /></div>
        <router-view />
    </div>
</template>

<script>
import LeftNav from './components/LeftNav'

export default {
  name: 'app',
  components: {
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
