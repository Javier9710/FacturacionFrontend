import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Productos from '../views/Productos.vue'
import EditProd from '../views/EditProd.vue'
import RegProd from '../views/RegProd.vue'
import EditCli from '../views/EditCli.vue'
import RegCli from '../views/RegCli.vue'
import Facturas from '../views/Facturas.vue'
import RegFact from '../views/RegFact.vue'
import VerFactura from '../views/VerFactura.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    
    path: '/prod',
    name: 'Productos',
  component: Productos

  },

  {
    
    path: '/editProd/:id',
    name: 'EditProd',
  component: EditProd

  },
  {
    
    path: '/regProd',
    name: 'RegProd',
  component: RegProd

  },
  {
    
    path: '/editCli/:cedula',
    name: 'EditCli',
  component: EditCli

  },
  {
    
    path: '/regCli',
    name: 'RegCli',
  component: RegCli

  },
  {
  path: '/fact',
    name: 'Facturas',
  component: Facturas

  } ,
  {

    path: '/regFact',
    name: 'RegFact',
  component: RegFact

  },
  {

    path: '/verFact/:id',
    name: 'VerFactura',
  component: VerFactura

  }
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  export default router
