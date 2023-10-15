<script>
import Card from "./partials/Card.vue";
import {store} from "../data/store";
import Results from "./partials/Results.vue";
import Menu from "./partials/Menu.vue";
import axios from "axios";

export default {
  name: "Main",
  components:{
    Card,
    Results,
    Menu
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApiArch(){
      axios.get(store.apiUrl, {
        params:{
          num: 20,
          offset: 1,
          archetype: store.archetypeToSearch
        }
      })
      .then( risultato =>{
        console.log(this.archetype)
        store.cardList = risultato.data.data;
        console.log(risultato.data.data)
        store.cardList.forEach(card=>{
          if(!store.archetypeList.includes(card.archetype)){
            store.archetypeList.push(card.archetype)
          }
        })
      })
      .catch( error =>{
        console.log(this.archetype)
        console.log("errore")
      })
    }
  }
}
</script>

<template>
  <main>
    <div class="container">
      <div class="card-box">
        <Menu @startSearch="getApiArch" />
        <div class="found">
          <Results />
        </div>
        <div class="box-interno">
          <div class="row d-flex justify-content-between">
            <Card v-for="singleCard in store.cardList" :key="singleCard.id" :name="singleCard.name" :archetype="singleCard.archetype" 
            :image="singleCard.card_images[0].image_url" /> <!-- indice 0 perchè gli devo passare la prima proprietà di un array di oggetti -->
          </div>
        </div>
      </div>

    </div>
    
  </main>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

main{
  background-color: $background;
  text-align: center;
  padding-bottom: 20px;
  
  .card-box{
    background-color: white;
    padding: 30px;

    .found{
      background-color: $found-box;
      text-align: start;
      padding: 10px 10px;

      span{
        color: white;
        font-weight: bold;
      }
    }
  }
}

</style>