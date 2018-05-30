<template>
  <div class="header">
    <!-- header -->
    <div class="jumbotron text-center">
      <b class="display-3">Shopper</b>
      <p class="lead"> Thrift shop for every fashion items on the internet at discounted prices</p>
      <a href="#/register"><button class="btn btn-dark">
        Start Shopping
      </button></a>
    </div>
    <!-- cards -->
    <section id="about">
      <div class="card-columns">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img src="../assets/shop.svg" alt="shop" width="200px">
              <h4 class="mt-3">Shop Discounted Items</h4>
              <p class="text-center mt-1">
                Browse through items available int he store and pick the one you like best.
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img src="../assets/cart.svg" alt="shop" width="200px">
              <h4>Add to Cart</h4>
              <p class="text-center mt-1">
                Add products to cart without stress.
                Change your mind? You easily switch items in your cart.
              </p>
            </div>

          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <img src="../assets/card.svg" alt="shop" width="200px">
              <h4>Make Payment</h4>
              <p class="text-center mt-1">
                Pay for product with your credit card we accept all kind of payment.
              </p>
            </div>
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
