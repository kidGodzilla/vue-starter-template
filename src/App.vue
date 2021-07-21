<template>
  <div id="app">

    <div>
      <b-navbar toggleable="lg" type="dark" variant="primary">

        <div class="container">
          <b-navbar-brand href="#/hello">Starter App</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#/location">Location</b-nav-item>
            </b-navbar-nav>
          </b-collapse>

          <b-navbar-nav class="ml-auto" right>
            <b-nav-item>{{ time }}</b-nav-item>
          </b-navbar-nav>
        </div>

      </b-navbar>
    </div>

    <div class="cont">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  data() {
    return {
      time: null
    }
  },
  mounted() {
    // Inject a stylesheet if it absolutely has to be after the bootstrap-vue import
    // Alternative: vue-dom-injector
    // let style = document.createElement('link')
    // style.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.0.2/zephyr/bootstrap.min.css'
    // style.rel = "stylesheet"
    // style.type = "text/css"
    // document.head.appendChild(style)

    setInterval(() => {
      this.time = new Date().toTimeString().split(' ')[0]
    }, 500)
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.cont { text-align: center; margin: 60px; }
</style>
