<template>
  <div class="form card mt-4">
    <div class="card-header">
      <nav class="mt-2">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-create" aria-selected="true">Create Product</a>
        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-view" aria-selected="false">View Products</a>
      </div>
    </nav>
    </div>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <form class="w-75 my-4 mx-4" @submit.prevent="postProduct">
          <div class="row">
            <div class="col-4">
              <div class="form-group">
                <label for="email">Product Name</label>
                <input
                  type="text"
                  class="form-control w-75"
                  v-model="name"
                  id="name"
                  required>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label for="dsc">Price:</label>
                <input
                  type="number"
                  class="form-control w-50"
                  v-model="price"
                  id="price"
                  required>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label for="img">Image:</label>
                <input type="url" class="form-control" v-model="image" required id="img">
            </div>
            </div>
          </div>
          <div class="form-group">
            <label for="dsc">Description:</label>
            <textarea
              type="text"
              cols="10"
              class="form-control"
              v-model="description"
              id="dsc">
              </textarea>
          </div>
          <button
            type="submit"
            class="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
      <div
        class="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab">
        <table class="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {{products}}
            <tr v-for="product in products" :key="product.id">
              <td>{{products}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      description: '',
      price: '',
      image: '',
      products: []
    };
  },
  methods: {
    postProduct() {
      const url = 'http://localhost:1337/api/v1/products';
      const AUTH = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      };
      axios
        .post(
          url,
          {
            name: this.name,
            description: this.description,
            price: this.price,
            image: this.image
          },
          AUTH
        )
        .then(res => {
          console.dir(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
    getProduct() {
      const url = 'http://localhost:1337/api/v1/products';
      axios
        .get(url)
        .then(response => {
          this.products = response.data.data;
          console.log(this.products);
        })
        .catch(error => {
          console.log(this.products);
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.form {
  width: 70%;
  margin: 0 auto;
}
</style>

