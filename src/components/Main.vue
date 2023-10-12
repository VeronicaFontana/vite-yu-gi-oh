<script>
import Card from "./partials/Card.vue";
import Menu from "./partials/Menu.vue";
import {store} from "../data/store";

export default {
  name: "Main",
  components:{
    Card,
    Menu
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <main>
    <div class="container">

      <Menu />

      <div class="card-box">
        <div class="found">
          <span>Founds xxx cards</span>
        </div>
        <div class="box-interno">
          <div class="row d-flex justify-content-between">
            <Card v-for="singleCard in store.cardList" :key="singleCard.id" :name="singleCard.name" :archetype="singleCard.archetype" 
            :image="singleCard.card_images[0].image_url" />
          </div>
        </div>
      </div>

    </div>
    
  </main>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

main{
  height: calc(100vh - 60px);
  background-color: $background;
  text-align: center;
  
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