<template>
  <div id="app">
    <img src="./assets/logo.png">
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import { Button } from 'mint-ui';
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created () {
    this.getLunbotu();
  },
  methods:{
    //获取轮播图data
    getLunbotu(){
      console.log("11111")
      this.api.lunbotu({}).then(result =>{
        console.log(result);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
