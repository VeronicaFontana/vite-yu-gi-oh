<script>
import { store } from '../../data/store';

export default {
  name: "Results",
  data(){
    return{
      store
    }
  },
  computed:{
    outputResult(){
      if(store.cardList.length > 0){
        return "Risultati trovati: " + store.cardList.length;
      }
    }
  }
}
</script>

<template>
  <p>{{ outputResult }}</p>
</template>

<style lang="scss" scoped>
p{
  color: white;
  margin: auto 0;
}
</style>