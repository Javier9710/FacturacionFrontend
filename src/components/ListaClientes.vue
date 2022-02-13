<template>
    <div class="container py-10">
    <div class="card bg-light">
			<div class="card-header">Listado de Clientes
        <a class="btn btn-success btn-xs float-right" v-on:click="crear()">Registrar Cliente</a>
      </div>
			<div class="card-body">
    <hr class="border border-primary">
    <h4 class="card-title">
    </h4>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">CEDULA CLIENTE</th>
                <th scope="col">NOMBRE CLIENTE</th>
            </tr>

           </thead>
        <tbody>
            <tr v-for="cliente in listaClientes" :key="cliente.cedula"  v-on:click="editar(cliente.cedula)">
                <td>{{cliente.cedula}}</td>
                <td>{{cliente.nombre}}</td>
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
        name: 'ListaClientes',
        props: {
        msg: String
  },
  methods:{
      editar(cedula){
          this.$router.push('/editCli/' + cedula); 
          },

       crear(){
           this.$router.push('/regCli')

       }

  },
    mounted:function(){
        let url = 'http://localhost:8090/cliente/get'
        axios.get(url).then(data => {
            this.listaClientes = data.data;
        });

    },
    data() {
      return {
        listaClientes: null
      }
    }
  }
</script>