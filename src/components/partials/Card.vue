<script>
export default {
  name:"Card",
  props:{
    name: String,
    archetype: String,
    image: String
  }
}
</script>

<template>
  <div class="col-3">
    <div class="card">
      <img :src="image" alt="name">
      <div class="text">
        <h4>{{ name }}</h4>
        <span>{{ archetype }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;
.card{
  background-color: $background;
  width: 250px;
  margin-bottom: 20px;
        
  img{
    width: 100%;
    height: 100%;
  }
  .text{
    margin: 10px 0;

    h4{
      color: $naming;
    }
    span{
      color: $text;
    }
  }
}

</style>