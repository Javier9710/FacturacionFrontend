<template>
<div class="container">
<div id="app" class="col-11">

    <h2>Factura</h2>

    <div class="row my-3">
      <div class="col-12">
        <h1>Gnosoft</h1>
        <p>Barrio La Capellana</p>
        <p>Calle 2N # 5E - 30</p>
        <p>Cúcuta, Norte de Santander</p>
      </div>
      <div class="col-2">
        
      </div>
    </div>
  
    <hr />
  
    <div class="row fact-info">


      <div class="col-3">
        <h5>Facturar a</h5>
        <p>
          {{this.factura.cliente.nombre}}
        </p>
      </div>


      <div class="col-3">
        <h5>Enviar a</h5>
        <p>
          Barrio Cundinamarca,
          Calle 10# 21a - 30,
          Cucuta, Norte de Santander
        </p>
      </div>
      <div class="col-3">
        <h5>N° de factura</h5>
        <p>{{this.factura.id}}</p>
      </div>
      <div class="col-2">
        <h5>Fecha</h5>
        <p>{{this.factura.fecha}}</p>
      </div>
    </div>
  
    <div class="row my-2 col-11">
      <table class="table table-borderless factura">
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>nombre</th>
            <th>Precio Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="detalle in this.detalles" :key="detalle.id">
            <td>{{detalle.cantidad}}</td>
            <td>{{detalle.articulo.nombre}}</td>
            <td>{{detalle.articulo.precio}}</td>
            <td>{{detalle.total}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>Total Factura</th>
            <th>{{this.factura.total}}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  
    <div class="cond row">
      <div class="col-12 mt-3">
        <h4>Condiciones y formas de pago</h4>
        <p>El pago se debe realizar en un plazo de 15 dias.</p>
        <p>
          Banco Banreserva
          <br />
          IBAN: DO XX 0075 XXXX XX XX XXXX XXXX
          <br />
          Código SWIFT: BPDODOSXXXX
        </p>
      </div>
    </div>
</div>
</div>
</template>

<script>

import axios from 'axios';

export default {
    name: "VerFactura",
    components:{
    
    },
    data: function(){
        
    return { 
            "factura": "",
            "detalles": [],
       }
    },
    mounted: function(){
        this.id_factura = this.$route.params.id;
        axios.get('http://localhost:8090/factura/'+ this.id_factura )
        .then(datos => {
            this.factura = datos.data;
            console.log(this.factura);
        });

        axios.get('http://localhost:8090/detalle/factura/'+ this.id_factura)
        .then(datos => {
            this.detalles = datos.data;
            console.log(this.detalles);
        });



    }
}
</script>

import axios from 'axios';


<style scoped>
.factura {
  table-layout: fixed;
}

.fact-info > div > h5 {
  font-weight: bold;
}

.factura > thead {
  border-top: solid 3px #000;
  border-bottom: 3px solid #000;
}

.factura > thead > tr > th:nth-child(2), .factura > tbod > tr > td:nth-child(2) {
  width: 300px;
}

.factura > thead > tr > th:nth-child(n+3) {
  text-align: right;
}

.factura > tbody > tr > td:nth-child(n+3) {
  text-align: right;
}

.factura > tfoot > tr > th, .factura > tfoot > tr > th:nth-child(n+3) {
  font-size: 24px;
  text-align: right;
}

.cond {
  border-top: solid 2px #000;
}
</style>