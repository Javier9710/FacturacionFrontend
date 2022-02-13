<template>
  <div>

<ListaFacturas />

  </div>
</template>
<script>
// @ is an alias to /src
import ListaFacturas from '@/components/ListaFacturas.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Productos',
  components: {
    Header,
    ListaFacturas,
    Footer
  }
}
</script>