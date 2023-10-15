<script>
export default {
  name: "Header"
}
</script>

<template>
  <header>
    <div class="text d-flex">
      <div class="image-logo">
        <img src="../../public/yu-gi-oh-logo.png" alt="">
      </div>
      <h1>Yu-Gi-Oh Api</h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>

header{
  background-color: white;
  height: 60px;
  padding: 5px 20px;

  .text{
    height: 100%;
    width: fit-content;
    align-items: center;

    div{
      margin-right: 20px;
    }

    .image-logo{
      width: 150px;
      height: 50px;
      

      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}

</style>