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
      store.isPresent=true;
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
          if(!store.raceList.includes(card.race)){
            store.raceList.push(card.race)
          }
        })
      })
      .catch( error =>{
        console.log("error")
        store.isPresent=false;
      })
    },
    reset(){
      store.archetypeToSearch="";
      store.raceToSearch="";
      this.getApi();
    }
  }
}
</script>

<template>
    <div class="menu d-flex">
      <select v-model="store.archetypeToSearch" class="form-select" aria-label="Default select example">
        <option selected value="">Select archetype</option>
        <option v-for="(archetype, index) in store.archetypeList" :key="index" :value="archetype">{{ archetype }}</option>
      </select>

      <select v-model="store.raceToSearch" class="form-select" aria-label="Default select example">
        <option selected value="">Select race</option>
        <option v-for="(race, index) in store.raceList" :key="index" :value="race">{{ race }}</option>
      </select>

      <button @click="$emit('startSearch')" class="btn btn-info mx-4">Search</button>
      <button @click="reset" class="btn btn-warning">Reset</button>
    </div>
  
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;

  .menu{
    width: 700px;
    padding: 20px 10px;

    select{
      margin-right: 20px;
    }
  }


</style>