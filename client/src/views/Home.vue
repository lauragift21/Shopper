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
            <img src="http://res.cloudinary.com/lauragift/image/upload/c_scale,h_194,w_396/v1527371027/100_4494_trhsnb.jpg" alt="bag">
          </div>
        </div>
        <div class="card">
          <div class="card-body d-flex justify-content-center">
            <img src="http://res.cloudinary.com/lauragift/image/upload/c_scale,h_176,w_181/v1527180596/81Teq12zAYL._UX395__y4wshb.jpg" alt="kors">
          </div>
        </div>
        <div class="card">
          <div class="card-body d-flex justify-content-center">
            <img src="http://res.cloudinary.com/lauragift/image/upload/c_scale,h_191,w_344/v1527371012/thrift-store-secrets-12_dfaii3.jpg" alt="store">
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
