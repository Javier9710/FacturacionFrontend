<template>
  <div>
   <div class="container">
       <form action="" class="form-horizontal">

           

           <div class="form-group left">
               <label for="" class="control-label col-sm-2">Nombre del Cliente</label>
               <div class="col-sm-10">
                   <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">

               </div>

           </div>
           <div class="form-group left">
               <label for="" class="control-label col-sm-2">Cedula del Cliente</label>
               <div class="col-sm-10">
                   <input type="text" class="form-control" name="id" id="id" v-model="form.cedula" disabled>

               </div>

           </div>
           <div class="form-group">
               <button type="button" class="btn btn-primary" v-on:click="editar()">Editar</button>
          
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
    name: "EditCli",
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

        editar(){
            axios.put("http://localhost:8090/cliente/up", this.form)
            .then(data =>{
                this.$router.push('/');
            });

        },

        salir(){
            this.$router.push('/');
        }

    },
    mounted: function(){
        this.form.cedula = this.$route.params.cedula;
        axios.get('http://localhost:8090/cliente/'+ this.form.cedula )
        .then(datos => {
            this.form.cedula = datos.data.cedula;
            this.form.nombre = datos.data.nombre;
            
            
        })

    }
    
}
</script>
<style scoped>
    .left{
        text-align: left;
    }
</style>
