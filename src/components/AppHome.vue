<template>

<div class="bkgimg"> 
  <v-carousel height="400">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel >
  <v-container mb-5>
  <v-layout align-start justify-space-around row fill-height>
    <v-flex xs12 ma-4 >
      <v-card color="" height="400" max-width="450" raised >
        <v-card-title primary-title>
          <div >
            <img class="img" src="./silogo.png">
        </div>
        <div style="margin-top:12%;">
         <h3 class="headline">Software Incubator</h3>
            <div style="margin-top:2%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Nemo, adipisci quo? Temporibus molestias provident rem
               neque rerum libero suscipit quisquam ullam minus, quae 
               accusantium, corporis velit quia, optio perspiciatis deserunt.
               </div>
          </div>
        </v-card-title>
          <router-link to="/explore">
       <v-btn dark style="" round="3" color="green" centre>EXPLORE</v-btn>
      </router-link>
      </v-card>
    </v-flex>
    <v-flex xs12 ma-4 >
      <v-card color="" height="400" max-width="450" raised >
        <v-card-title primary-title>
          <div >
            <img class="img" src="./csi.png">
        </div>
        <div style="margin-top:12%;">
         <h3 class="headline">Computer Socity Of India</h3>
            <div style="margin-top:2%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Nemo, adipisci quo? Temporibus molestias provident rem
               neque rerum libero suscipit quisquam ullam minus, quae 
               accusantium, corporis velit quia, optio perspiciatis deserunt.
               </div>
          </div>
        </v-card-title>
          <router-link to="/explore">
       <v-btn dark style="" round="3" color="green" centre>EXPLORE</v-btn>
      </router-link>
      </v-card>
    </v-flex>  
      <v-flex xs12 ma-4 >
      <v-card color="" height="400" max-width="450" raised >
        <v-card-title primary-title>
          <div >
            <img class="img" src="./csi.png">
        </div>
        <div style="margin-top:12%;">
         <h3 class="headline">Computer Socity Of India</h3>
            <div style="margin-top:2%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Nemo, adipisci quo? Temporibus molestias provident rem
               neque rerum libero suscipit quisquam ullam minus, quae 
               accusantium, corporis velit quia, optio perspiciatis deserunt.
               </div>
          </div>
        </v-card-title>
          <router-link to="/explore">
       <v-btn dark style="" round="3" color="green" centre>EXPLORE</v-btn>
      </router-link>
      </v-card>
    </v-flex>
    
  </v-layout>
</v-container>

</div> 
</template>
<style>
.img{
  background-color: transparent;
	background-repeat:no-repeat; 
	background-size:cover;
  height: 100px;
	width: 100px;
  margin-left:100%;
	margin-right: auto;
  display: block;
}
.headline{
  margin-top: 2%;
}
.bkgimg{
  background-image:url("./bkg2.png");
  background-repeat:no-repeat; 
	background-size:cover; 
}
</style>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>