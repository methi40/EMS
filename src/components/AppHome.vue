<template>
<div class="parallex">
    <v-flex xs12 sm12 md12>
   <v-parallax height="550" :src="getImgUrl('dam3.jpg')">
    <v-layout
      column
      align-center
      justify-center
      class="white--text"
    
    >
      <div class="subheading mb-1 hero-text-sub text-xs-center">Cultural | Technical | Management...</div>
      <p class="white--text hero-text-header mb-2 display-2 text-xs-center">Lorem Ipsum and many more </p>
      <div class="subheading mb-3 hero-text-sub text-xs-center">Find out how 
        <span class="brand-text">EMS</span> can help you 
        <span class="brand-text">win more contracts</span> and 
        <span class="brand-text">deliver better solutions</span> for your clients</div>
      <v-btn
        class="mt-3 green darken-1 accented-text" dark
        href="/"
      >
        Learn More
      </v-btn>
    </v-layout>
  </v-parallax>
    </v-flex>
  <v-container text-xs-center mt-2>
    <v-layout>
      <v-flex>
        <h3 class="display-1 product-title mt-1">Event Management System</h3>
        <p class="mt-3">EMS's Earthworks platform makes it easy to maintain a database of all your subsurface data.</p>
      </v-flex>
    </v-layout>
    <v-divider/>
  </v-container>
  <v-layout>
    <v-container grid-list-md text-xs-center mt-2>
    <v-layout row wrap>
      
      <v-flex xs12 sm6 md4 offset-md2>
        <v-icon x-large class="info--text mt-2">cloud_queue</v-icon>
        <h3 class="display-1 product-title mt-3">Earthworks <span class="blue--text text--darken-2">Server</span></h3>
        <p class="mt-3">Earthworks Server is a powerful database server that helps your engineers and technical staff organize project data.</p>
        <p>Choose to either deploy on-site on your local network or host on a cloud provider to provide your engineers with 24/7 global access.</p>
        <v-divider class="hidden-sm-and-up mb-4"></v-divider>
      </v-flex>
        
      <v-flex xs12 sm6 md4>
        <v-icon x-large class="info--text mt-2">desktop_windows</v-icon>
        <h3  class="display-1 product-title mt-3">Earthworks <span class="blue--text text--darken-2">Desktop</span></h3>
        <p class="mt-3">Earthworks Desktop is a standalone desktop solution that streamlines project management and laboratory testing.</p>
        <p>Suitable for working on either a local computer or an Earthworks Server.</p>
      </v-flex>
        
    </v-layout>
    <v-divider/>
  </v-container>
  </v-layout>
</div>
</template>

<script>
export default {
  methods: {
    getImgUrl (img) {
      return require('@/assets/' + img)
    }
  }
}
</script>

<style>
.hero-text-header {
  font-family: 'Zilla S-+lab', serif;
}
.hero-text-sub {
  font-family: 'Raleway', sans-serif;
}
.brand-text {
  font-weight: bold;
}
.parallex{
  margin-top: 0%;
}
@media(max-width:800px){
    .parallex{
        margin-top: -53%;
    }
}
@media(max-width:400px){
    .parallex{
        margin-top: -63%;
    }
}
</style>
