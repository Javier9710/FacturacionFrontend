<template>
  <div>
   <div class="container">
       <form action="" class="form-horizontal">
           <div class="form-group left">
               <label for="" class="control-label col-sm-2">Cedula del Clinte</label>
               <div class="col-sm-10">
                   <input type="text" class="form-control" name="cedula" id="cedula" v-model="form.cedula">

               </div>

           </div>

           <div class="form-group left">
               <label for="" class="control-label col-sm-2">Nombre del Cliente</label>
               <div class="col-sm-10">
                   <input type="text" class="form-control" name="precio" id="precio" v-model="form.nombre">

               </div>

           </div>

           
           <div class="form-group">
               <button type="button" class="btn btn-primary" v-on:click="crear()">Registrar Cliente</button>
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
    name: "RegCli",
    components:{
        Footer

    },
    data: function(){
        
    return { 
      
        form:{
            "cedula": "",
            "nombre": ""

        }
       }
    },
    methods:{

        crear(){
            axios.post("http://localhost:8090/cliente/save", this.form)
            .then(data =>{
                this.$router.push('/');
            });

        },

        salir(){
            this.$router.push('/');
        }

    }
    
}
</script>
<style scoped>
    .left{
        text-align: left;
    }
</style>
