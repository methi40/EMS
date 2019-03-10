<template>
<v-container >
    <v-layout row wrap>
        <v-flex xs12 sm12>
            <v-card color="cyan darken-2" class="white--text">
             <v-container fluid>
                 <v-layout row>
                     <v-flex xs5 sm4 md3>
                         <v-card-media
                         src="https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/sunflower-1627193_1920.jpg?itok=yc2JGIPb"
                         height="160px"
                         >    
                         </v-card-media>
                     </v-flex>
                     <v-flex xs11 sm11 md11>
                     <v-card-title primary-title>
                       <div>
                          <div class="headline">Unlimited music now</div>
                         <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                       </div>
                     </v-card-title>
                     <v-card-actions>
                        <v-btn to="/Events/Event" flat light>Listen now</v-btn>
                     </v-card-actions>
                     </v-flex>
                 </v-layout>
             </v-container>    
            </v-card>
          </v-flex>
    </v-layout>
</v-container>
</template>

