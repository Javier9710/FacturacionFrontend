<template>
  <div>

    <ListaProductos/>

  </div>
</template>

<script>
// @ is an alias to /src
import ListaProductos from '@/components/ListaProductos.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Productos',
  components: {
    Header,
    ListaProductos,
    Footer
  }
}
</script>
