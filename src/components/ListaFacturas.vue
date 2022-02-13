<template>
<div>
<div class="container py-0">
    <div class="card bg-light">
			<div class="card-header">Lista de Facturas

                <a class="btn btn-success btn-xs float-right" v-on:click="crear()">Crear Factura</a>
      </div>
			<div class="card-body">
    <hr class="border border-primary">
    <h4 class="card-title">
      
    </h4>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Id Factura</th>
                <th scope="col">Nombre Cliente</th>
                <th scope="col">Fecha</th>
                <th scope="col">Sub Total</th>
                <th scope="col">Iva</th>
                <th scope="col">Total</th>
                <th scope="col">Eliminar</th>
                <th scope="col">Ver Factura</th>
            </tr>

           </thead>
        <tbody>
            <tr v-for="factura in this.listaFacturas" :key="factura.id" >
                <td>{{factura.id}}</td>
                <td>{{factura.cliente.nombre}}</td>
                <td>{{factura.fecha}}</td>
                <td>{{factura.subTotal}}</td>
                <td>{{factura.iva}}</td>
                <td>{{factura.total}}</td>
                <td><a class="btn btn-danger btn-xs" v-on:click="eliminar(factura.id)">[x]</a></td>
                <td><a class="btn btn-primary btn-xs" v-on:click="verFactura(factura.id)">VER</a></td>
            </tr>
        </tbody>
    </table>
    
  </div>
    </div>
  </div>
</div>
</template>


<script>


import axios from 'axios';

  export default {
        name: 'ListaFacturas',
        props: {
        msg: String
  },
  methods:{
      verFactura(idFactura){
          this.$router.push('/verFact/' + idFactura); 
          },

      crear(){
          this.$router.push('/regFact');
      },

      eliminar(id){
          axios.delete('http://localhost:8090/factura/delete/'+id);
          const projectIndex = this.listaFacturas.findIndex(
                  (p) => p.id === id);
                this.listaFacturas.splice(projectIndex, 1);
              }
        
  },
  mounted:function(){
    
        axios.get('http://localhost:8090/factura/get').then(datos => {
            this.listaFacturas = datos.data;
            console.log(this.listaFacturas);
        });

    },
    data() {
      return {
        listaFacturas: null
      }
    }
  }
  </script>