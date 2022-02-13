<template>

  <div>
       <div class="container-fluid">
					<!-- left column -->
					<div class="col-md-12">
						<!-- general form elements -->
						<div class="card card-warning">
							<div class="card-header">
                                REGISTRO DE FACTURA
                            </div>

       <form action="" class="form-horizontal">
           <div class="card-body">
           <div class="form-group row">
				<label class="col-sm-2 col-form-label">Cliente</label>
					<div class="col-sm-6">
					
                    <select v-model="cedula"  name="clientes" class="form-control"  id="personas" required> 
  						
                          <option  v-for="cliente in this.personas" :key="cliente.cedula" :value="cliente.cedula">{{cliente.cedula + " - " + cliente.nombre}}</option>
					
                    </select>
						</div>
			</div>

            <div class="form-group row">
				<label class="col-sm-2 col-form-label">Articulos</label>
					<div class="col-sm-6">
					
                    <select v-model="articulo_id"  name="articulos" class="form-control" v-on:change="agregarArticulo(articulo_id)" v-on:click="calcularSubtotal()" id="articulos">
  						
                          <option v-for="articulo in this.articulos" :key="articulo.id" :value="articulo">{{articulo.id +" - "+ articulo.nombre}}</option>
					
                    </select>
						</div>
			</div>

<hr class="border border-primary">

<div class="row">
    <div class="col-sm-8">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in articuloEnviar" :key="item.id">
                    
                        <td>{{item.nombre}}</td>
                        <td>
                            <input type="number" v-model="cantidad[index]" v-on:click="calcularPrecio(cantidad[index],item.precio, index)">
                        </td>
                        <td>{{precios[index]}}</td>
                        <td>
                            <a class="btn btn-danger btn-xs" v-on:click="removeRow(index)">[x]</a>
                        </td>
                    </tr>
                </tbody>

            </table>
</div>
                <div class="col-sm-4">
               
            <table class="table table-striped">
                <thead>
                
                    <tr>
                        <td>Sub Total:</td>
                        <td>
                            <input type="number" v-model="subtotal" disabled>
                        </td>
                    </tr>
                    <tr>
                        <td>Iva:</td>
                        <td><input type="number" v-model="iva" disabled></td>
                    </tr>
                        <tr>
                        <td>Total:</td>
                        <td><input type="number" v-model="total" disabled></td>
                    
                    </tr>
                    <tr>
                        <td>Accion:</td>
                        <td>

<div>
               <button type="button" class="btn btn-primary" v-on:click="guardarFactura()">Registrar</button>
               <button type="button" class="btn btn-secondary" v-on:click="salir()">Salir</button>

           </div>

                        </td>
                         


                        </tr>
                   
                    
                </thead>

            </table>
                    
                </div>
            </div>
           </div>
           
       </form>
                            </div>
                        </div>
                    </div></div>

</template>

<script>

import Footer from '@/components/Footer.vue'
import axios from 'axios';

export default {
    name: "RegFact",
    components:{
        Footer

    },
    data: function(){
        return{
        
                "id":0,
                "cedula":null,
                "articulo_id":null,
                "subtotal":0,
                "iva":0,
                "total":0,
                "itemId":[],
                "cantidad":[],
                "precios":[],
                "personas":[],
                "articulos":[],
                "articuloEnviar":[]
        }

    },

    methods:{
        salir(){
                this.$router.push('/fact');
        },
        agregarArticulo() {
            this.articuloEnviar.push(this.articulo_id);
            this.itemId.push(this.articulo_id.id);
            this.cantidad.push(1);
            for (let i = 0; i < this.itemId.length; i++) {
                this.calcularPrecio(this.cantidad[i], this.articuloEnviar[i].precio, i);
      }
    },
        calcularPrecio(cantidad, precio, index) {
            this.precios[index] = cantidad * precio;
            this.calcularSubtotal();
        },

        calcularSubtotal() {
            this.total = 0;
            for (let i = 0; i < this.precios.length; i++) {
                this.total += (this.precios[i]);
            }
            this.iva = this.total * 0.19;
            this.subtotal = this.total-(this.iva);
    },

        removeRow: function (index) {
            this.itemId.splice(index, 1);
            this.cantidad.splice(index, 1);
            this.precios.splice(index, 1);
            this.articuloEnviar.splice(index, 1);
            this.calcularSubtotal();
    },
    guardarFactura: function () {
          var facturaSave = {

            cedula: this.cedula,
            itemId: this.itemId,
            cantidad: this.cantidad,
            subtotal: this.subtotal,
            iva: this.iva,
            total: this.total,
}
          this.calcularSubtotal();
             axios.post('http://localhost:8090/factura/save', facturaSave)
            .then((datos)=> {
                 this.$router.push('/fact');
        });
      
    }
    },
    mounted: function(){

        let urlArticulos = 'http://localhost:8090/articulo/get'
            axios.get(urlArticulos).then(dataArticulo => {
            this.articulos = dataArticulo.data;     
        });
         let urlClientes = 'http://localhost:8090/cliente/get'
            axios.get(urlClientes).then(dataCliente => {
            this.personas = dataCliente.data;
            
        });
    },
}

</script>

