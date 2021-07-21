<template>
  <div class="hello">

    <div v-if="loc.location">
      <h3 class="mb-2">Location Found</h3>

      <p>{{ loc.location }} ({{ loc.ip }}) – Using the MaxMind GeoIp Lite Database</p>

      <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="googleMapsUrl"></iframe></div>
    </div>
    <div v-else>
      <h1 class="mb-2">{{ msg }}</h1>

      <p>
        We're fetching your location, based on your Public IP address.
      </p>

      <b-spinner variant="primary" type="grow" class="mt-5"></b-spinner>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Location',
  props: {
  },
  computed: {
    googleMapsUrl() {
      if (!this.loc) return ''

      return `https://maps.google.com/maps?width=100%25&height=600&amp;hl=en&q=${ this.loc.lat },${ this.loc.long }&t=&z=14&ie=UTF8&iwloc=B&output=embed`
    }
  },
  async mounted() {
    window.scrollTo(0, 0)
    await this.fetchLocation()
  },
  methods: {
    fetchLocation() {
      return setTimeout(async () => {
        const response = await fetch(`https://api.mr365.co/location`)
        this.loc = await response.json() || {}
        this.$forceUpdate()
      }, 3333)
    }
  },
  data() {
    return {
      msg: 'Locating via IP address',
      loc: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
