<template>
<div>
<footer class="page-footer font-small blue">
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
</footer>

</div>
</template>

<script>

  export default {
    name: 'Footer',
    props: {
        msg: String
  }
  }
</script>

<style scoped>
footer{
    position: fixed;
    height: 100px;
    bottom: 0;
    width: 100%;
    background: rgb(65, 130, 146);
    color: black;
}
</style>