<template>
  <div class="form card mt-4">
    <div class="card-header">
      <nav class="mt-2">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-create" role="tab" aria-controls="nav-create" aria-selected="true">Create Product</a>
        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-view" role="tab" aria-controls="nav-view" aria-selected="false">View Products</a>
      </div>
    </nav>
    </div>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-create" role="tabpanel" aria-labelledby="nav-home-tab">
        <form class="w-75 my-4 mx-4" @submit.prevent="postProduct">
          <div class="alert alert-success alert-dismissible fade show" v-if="success">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <b>Product Added successfully!</b>
          </div>
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
      <div class="tab-pane fade" id="nav-view" role="tabpanel" saria-labelledby="nav-profile-tab">
        <table class="table table-responsive table-striped" v-if="products.length > 0">
          <thead>
            <tr>
              <th class="text-center">Product</th>
              <th class="text-center">Description</th>
              <th class="text-center">Price</th>
              <th class="text-center"><i class="fa fa-edit"></i></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{product.name}}</td>
              <td class="text-sm-10"><h6>{{product.description}}</h6></td>
              <td>₦{{product.price}}</td>
              <td>
                <button type="submit" class="btn btn-danger" @click.prevent="deleteProduct(product, product.id)">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center text-danger my-4" v-else>
          <i class="fa fa-exclamation-triangle"></i>
          No products available. Go ahead and create one.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL, getHeaders } from '../utils';

export default {
  data() {
    return {
      name: '',
      description: '',
      price: '',
      image: '',
      products: [],
      success: false
    };
  },
  created() {
    this.listProduct();
  },
  methods: {
    postProduct() {
      axios
        .post(
          `${BASE_URL}/product`,
          {
            name: this.name,
            description: this.description,
            price: this.price,
            image: this.image
          },
          getHeaders
        )
        .then(res => {
          this.success = true;
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
    deleteProduct(products, id) {
      axios
        .delete(`${BASE_URL}/product/id`, getHeaders)
        .then(res => {
          this.products.splice(id, 1);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    listProduct() {
      axios
        .get(`${BASE_URL}/products`, getHeaders)
        .then(res => {
          this.products = res.data;
        })
        .catch(error => {
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

