<script>
export default {
  name: "Main"
}
</script>

<template>
  <main>
    <div class="container">

      <div class="menu">
        <select class="form-select" aria-label="select">
          <option value="1">Alien</option>
          <option value="2">Altro</option>
          <option value="3">Altro</option>
        </select>
      </div>

      <div class="card-box">
        <div class="found">
          <span>Founds 39 cards</span>
        </div>
        <div class="box-interno">
          <div class="row">
            <div class="col-5">
              <div class="card">
                <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="immagine">
                <div class="text">
                  <h4>Nome</h4>
                <span>Alien</span>
                </div>
              </div>
            </div>
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
  
  .menu{
    width: 140px;
    padding: 20px 10px;
  }
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

    .box-interno{
      .card{
        background-color: $background;
        width: 250px;
        
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
    }
    
  }
}

</style>