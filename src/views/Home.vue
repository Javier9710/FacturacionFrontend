<template>
<ListaClientes/>
  
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ListaClientes from '@/components/ListaClientes.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ListaClientes,
    Footer,
  }
}
</script>
