<template>

<div> 
  <v-carousel height="400">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel >
  <v-img src="https://picsum.photos/200/300?blur" aspect-ratio="1.7">
  <v-container mb-5>
  <v-layout align-start justify-space-around row fill-height>
    <v-flex xs12 ma-4 >
      <v-card color="" height="400" max-width="450" raised >
        <div class="img">
        </div>
        <div style="margin-top:20%;">
         <h3 class="headline">Software Incubator</h3>
            <div style="margin-top:3%;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Nemo, adipisci quo? Temporibus molestias provident rem
               neque rerum libero suscipit quisquam ullam minus, quae 
               accusantium, corporis velit quia, optio perspiciatis deserunt.
               </div>
          </div>
          <router-link to="/explore">
       <v-btn style="" round="3" color="green" centre>EXPLORE</v-btn>
      </router-link>
      </v-card>
    </v-flex>
    <v-flex xs12 ma-4 >
      <v-card color="" max-height="300" max-width="450" raised >
        <v-img 
          src="silogo.png"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline">Kangaroo Valley Safari</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Nemo, adipisci quo? Temporibus molestias provident rem
               neque rerum libero suscipit quisquam ullam minus, quae 
               accusantium, corporis velit quia, optio perspiciatis deserunt.
               </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 ma-4>
      <v-card color="" max-height="300" max-width="450" raised >
        <v-img 
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline">Kangaroo Valley Safari</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Nemo, adipisci quo? Temporibus molestias provident rem
               neque rerum libero suscipit quisquam ullam minus, quae 
               accusantium, corporis velit quia, optio perspiciatis deserunt.
               </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    
  </v-layout>
  <v-layout align-start justify-space-around row fill-height>
    <v-flex xs12 ma-4 >
      <v-card color="" max-height="300" max-width="450" raised >
        
        <v-img 
          src=""
          aspect-ratio="2.75"
        ></v-img>
        
        <v-card-title primary-title>
          <div>
            <h3 class="headline">Kangaroo Valley Safari</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Nemo, adipisci quo? Temporibus molestias provident rem
               neque rerum libero suscipit quisquam ullam minus, quae 
               accusantium, corporis velit quia, optio perspiciatis deserunt.
               
               </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 ma-4 >
      <v-card color="" max-height="300" max-width="450" raised >
        <v-img 
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline">Kangaroo Valley Safari</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Nemo, adipisci quo? Temporibus molestias provident rem
               neque rerum libero suscipit quisquam ullam minus, quae 
               accusantium, corporis velit quia, optio perspiciatis deserunt.
               </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 ma-4>
      <v-card color="" max-height="300" max-width="450" raised >
        <v-img 
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline">Kangaroo Valley Safari</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
               Nemo, adipisci quo? Temporibus molestias provident rem
               neque rerum libero suscipit quisquam ullam minus, quae 
               accusantium, corporis velit quia, optio perspiciatis deserunt.
               </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    
  </v-layout>
  
  </v-container>
 </v-img> 
</div> 
</template>
<style>
.img{
  background-color: transparent;
  background-image: url("silogo.png");
	background-repeat:no-repeat; 
	background-size:cover;
  height: 100px;
	width: 100px;
  margin-left: auto;
	margin-right: auto;
  padding:20%; 
}
.headline{
  margin-top: 2%;
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