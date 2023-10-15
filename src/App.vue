<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { store } from './data/store';
import axios from 'axios';
import Results from './components/partials/Results.vue';


export default {
  name: "App",
  components:{
    Header,
    Main,
    Results
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl, {
        params:{
          num: 20,
          offset: 1
        }
      })
      .then( risultato =>{
        console.log(risultato.data.data)
        store.cardList = risultato.data.data;
        store.cardList.forEach(card=>{
          if(!store.archetypeList.includes(card.archetype)){
            store.archetypeList.push(card.archetype)
          }
        })
      })
      .catch( error =>{
        store.cardList= [];
      })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">

@use "../src/scss/main.scss";

</style>