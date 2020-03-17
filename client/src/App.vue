<template>
  <div id="app">
    <page-header />
    <router-view/>
  </div>
</template>

<script>
import PageHeader from './components/Header'
export default {
  name: 'App',
  components:{
    PageHeader
  }
}
</script>

<style>
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
html{
    height: 100%;
}
body{
    font-family: 'Segoe UI', sans-serif;;
    font-size: 1rem;
    min-height: 100%;
}

#app {
  margin-top: 60px;
}
.danger-red {
  color: red;
}
</style>
