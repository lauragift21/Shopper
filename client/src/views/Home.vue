<template>
  <div class="home">
    <Nav/>
    <Hero/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'home',
  components: {
    Nav,
    Hero,
  }
}
</script>
