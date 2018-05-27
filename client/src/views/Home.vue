<template>
  <div class="header">
    <!-- header -->
    <div class="jumbotron text-center">
      <b class="display-3">Shopper</b>
      <p class="lead"> Thrift shop for every fashion items on the internet at discounted prices</p>
      <a href="#/login"><button class="btn btn-dark">
        Start Shopping
      </button></a>
    </div>
    <!-- cards -->
    <section id="about">
      <div class="card-columns">
        <div class="card">
          <div class="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Adipisci molestiae alias laborum eligendi
              necessitatibus tempora culpa at fuga quas libero? Animi vel a
              ccusantium quos iste, quia exercitationem t
              enetur fuga laudantium!
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body d-flex justify-content-center">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              officia ducimus facilis libero eius, alias
              consequatur quas saepe quisquam fuga tenetur obcaecati impedit
               rerum labore distinctio. Soluta natus laborum perferendis.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body d-flex justify-content-center">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Non, natus. Eligendi ad, ex magni pra
              aliquid placeat nostrum exercitationem, ab modi nobis aliquam perferend
              is eveniet, reprehenderit earum consequatur at. Maxime!
            </p>
          </div>
        </div>
      </div>
    </section>
   <!-- Footer -->
    <footer class="py-4 bg-dark navbar-fixed-bottom">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Shopper 2018</p>
      </div>
    </footer>
  </div>
</template>


<style scoped>
.btn {
  margin-top: 20px;
}
a {
  text-decoration: none;
}
.card-columns {
  margin: 10px;
}
@media screen and (max-width: 600px) {
  .header {
    max-width: 100%;
  }
  .display-3 {
    font-size: 2.7rem;
    font-weight: 300;
    line-height: 1;
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
  }
  .jumbotron {
    border-radius: 0rem !important;
  }
}
</style>
