<script>
import { store } from '../../data/store';
import axios from 'axios';

export default {
  name: "Menu",
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
    },
    reset(){
      store.archetypeToSearch="";
      this.getApi();
    }
  }
}
</script>

<template>
    <div class="menu d-flex">
      <select v-model="store.archetypeToSearch" class="form-select" aria-label="Default select example">
        <option selected value="">Select status</option>
        <option v-for="(archetype, index) in store.archetypeList" :key="index" :value="archetype">{{ archetype }}</option>
      </select>
      <button @click="$emit('startSearch')" class="btn btn-info mx-4">Search</button>
      <button @click="reset" class="btn btn-warning">Reset</button>
    </div>
  
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

  .menu{
    width: fit-content;
    padding: 20px 10px;
  }


</style>