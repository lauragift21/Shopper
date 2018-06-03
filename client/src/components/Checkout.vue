<template>
    <div class="App">
        <p class="App-intro">
            <paystack
                text="Checkout"
                :amount="amount * 100"
                :email="email"
                :paystackkey="paystackkey"
                :reference="reference"
                :callback="callback"
                :close="close"
                :embed="false"
            ></paystack>
        </p>
    </div>
</template>

<script type="text/javascript">
import paystack from 'vue-paystack';

export default {
  components: {
    paystack
  },
  props: ['text', 'amount'],
  data() {
    return {
      paystackBtnText: 'Pay Me, My Money',
      paystackkey: process.env.paystackkey,
      email: 'admin@mail.com'
      // amount: 1000000
    };
  },
  computed: {
    reference() {
      let text = 'Shopper';
      let possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  },
  methods: {
    callback: function(response) {
      console.log(response);
    },
    close: function() {
      console.log('Payment closed');
    }
  }
};
</script>
<style>
.App {
  text-align: center;
}
.App-intro {
  font-size: large;
}
.payButton {
  color: #ffffff;
  background: #272e35;
  border: none;
  border-radius: 7px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  outline-color: #000;
  font-weight: 400;
}
.payButton:hover {
  background: #000;
  cursor: pointer;
}
</style>