<script>
export default {
  name:"Card",
  props:{
    name: String,
    archetype: String,
    image: String,
    race: String
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
        <p v-if="archetype != null">Archetype: <span>{{ archetype }}</span></p>
        <p v-if="race != null">Race: <span>{{ race }}</span></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../scss/partials/variables" as *;
.card{
  background-color: $background;
  margin-bottom: 20px;
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
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h4{
      color: $naming;
    }
    span{
      color: $text;
    }
    span:last-child{
      color: brown;
    }
  }
}

</style>