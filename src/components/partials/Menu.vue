<script>
import { store } from '../../data/store';

export default {
  name: "Menu",
  data(){
    return{
      store
    }
  },
  methods:{
    reset(){
      store.archetypeToSearch="";
      this.$emit("startSearch")
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
.menu{
    width: fit-content;
    padding: 20px 10px;
  }
</style>