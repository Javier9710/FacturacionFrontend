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

           <div class="form-group left">
               <label for="" class="control-label col-sm-2">Id</label>
               <div class="col-sm-10">
                   <input type="text" class="form-control" name="id" id="id" v-model="form.id" disabled>

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
    name: "EditProd",
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

        editar(){
            axios.put("http://localhost:8090/articulo/up", this.form)
            .then(data =>{
                this.$router.push('/Prod');
            });

        },

        salir(){
            this.$router.push('/Prod');
        }

    },
    mounted: function(){
        this.form.id = this.$route.params.id;
        axios.get('http://localhost:8090/articulo/'+ this.form.id )
        .then(datos => {
            this.form.id = datos.data.id;
            this.form.nombre = datos.data.nombre;
            this.form.precio = datos.data.precio;
            
        })

    }
    
}
</script>
<style scoped>
    .left{
        text-align: left;
    }
</style>
