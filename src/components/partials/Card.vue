<script>
export default {
  name:"Card",
  props:{
    name: String,
    archetype: String,
    image: Object
  }
}
</script>

<template>
  <div class="col-3">
    <div class="card">
      <div class="img-box">
        <img :src="image" alt="img">
      </div>
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
  margin-bottom: 20px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .img-box{
    img{
      width: 100%;
      height: 100%;
    }
  }
  
  .text{
    margin: 10px 0;
    padding: auto 0;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h4{
      color: $naming;
    }
    span{
      color: $text;
    }
  }
}

</style>