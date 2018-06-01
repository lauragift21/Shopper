<template>
  <div class="form card">
    <div class="card-header">
      <nav class="mt-4 w-75">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-create" aria-selected="true">Create Product</a>
        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-view" aria-selected="false">View Products</a>
      </div>
    </nav>
    </div>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <form class="w-75 mr-3" @submit.prevent="postProduct">
          <div class="row">
            <div class="col-6">
               <div class="form-group">
            <label for="email">Product Name</label>
            <input type="text" class="form-control w-75" id="name" required>
          </div>
            </div>
            <div class="col-6">
              <div class="form-group">
            <label for="dsc">Price:</label>
            <input type="number" class="form-control w-50" id="price" required>
          </div>
            </div>
          </div>
          <div class="form-group">
            <label for="dsc">Description:</label>
            <textarea type="text" cols="10" class="form-control" id="dsc"></textarea>
          </div>
          <div class="form-group">
            <label for="img">Image:</label>
            <input type="url" class="form-control" required id="img">
          </div>
          <button type="submit" class="btn btn-dark">Submit</button>
        </form>
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <table class="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
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
          'Content-Type': 'application/x-www-form-urlencoded'
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
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
    getProduct() {
      axios
        .get('http://localhost:1337/api/v1/products')
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.form {
  width: 90vw;
  margin: 6vw 8vw;
}
</style>

