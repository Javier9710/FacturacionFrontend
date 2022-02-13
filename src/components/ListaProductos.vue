<template>
  <div class="container py-0">
    <div class="card bg-light">
			<div class="card-header">Lista De Articulos

<a class="btn btn-success btn-xs float-right" v-on:click="crear()">Crear Producto</a>
      </div>
			<div class="card-body">
    <hr class="border border-primary">
    <h4 class="card-title">
      
    </h4>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">ID_ARTICULO</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">PRECIO</th>
            </tr>

           </thead>
        <tbody>
            <tr v-for="articulo in listaArticulos" :key="articulo.id" v-on:click="editar(articulo.id)">
                <td>{{articulo.id}}</td>
                <td>{{articulo.nombre}}</td>
                <td>{{articulo.precio}}</td>
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
        name: 'ListaProductos',
        props: {
        msg: String
  },
  methods:{
      editar(id){
          this.$router.push('/editProd/' + id); 
          },

       crear(){
           this.$router.push('/regProd')

       }

  },
    mounted:function(){
        axios.get('http://localhost:8090/articulo/get').then(data => {
            this.listaArticulos = data.data;
        });

    },
    data() {
      return {
        listaArticulos: null
      }
    }
  }
</script>