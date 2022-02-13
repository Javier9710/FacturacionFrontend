<template>
  <div>
   <div class="container">
       <form action="" class="form-horizontal">
           <div class="form-group left">
               <label for="" class="control-label col-sm-2">Nombre</label>
               <div class="col-sm-10">
                   <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">

               </div>

           </div>

           <div class="form-group left">
               <label for="" class="control-label col-sm-2">Precio</label>
               <div class="col-sm-10">
                   <input type="number" class="form-control" name="precio" id="precio" v-model="form.precio">

               </div>

           </div>

           
           <div class="form-group">
               <button type="button" class="btn btn-primary" v-on:click="crear()">Registrar</button>
               <button type="button" class="btn btn-secondary" v-on:click="salir()">salir</button>

           </div>
       </form>
   </div>
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue'
import axios from 'axios';

export default {
    name: "RegProd",
    components:{
        Footer

    },
    data: function(){
        
    return { 
      
        form:{
            "id": "",
            "nombre": "",
            "precio": ""

        }
       }
    },
    methods:{

        crear(){
            axios.post("http://localhost:8090/articulo/save", this.form)
            .then(data =>{
                this.$router.push('/prod');
            });

        },

        salir(){
            this.$router.push('/Prod');
        }

    }
    
}
</script>
<style scoped>
    .left{
        text-align: left;
    }
</style>
