<template>
<v-img src="https://picsum.photos/200/300/?blur" aspect-ratio="1.7">
  <v-layout>
     <v-flex xs12>
       <div style="color:green;text-align:left;margin-top:20px;">
       <h3 class="display-2">Overview</h3></div>
          <v-card maxWidth:200 color="transparent" dark>
              <v-card-text >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              </v-card-text>
              </v-card>
              <div style="color:green;text-align:left;margin-top:20px;margin-bottom:40px;">
              <h3 class="display-2">Events</h3>
    <v-card maxWidth:200 color="transparent">
              <v-card-text>
                <v-treeview 
                 open-on-click
                 transition
                 dark 
                 activatable 
                 hoverable 
                 :items="items">
                 </v-treeview>
              </v-card-text>
    </v-card> </div>     

    </v-flex>
   </v-layout>
</v-img>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          id: 1,
          name: 'All Events :',
          children: [
            { id: 2, name: 'abc' },
            { id: 3, name: 'pqr' },
            { id: 4, name: 'xyz' }
          ]
        },
        {
          id: 5,
          name: 'Running Events :',
          children: [
            
            { id: 6, name: 'abc' },
            { id: 7, name: 'pqr' },
            { id: 8, name: 'xyz' }
          ]
        }, 
        {
          id: 9,
          name: 'Running Events :',
          children: [
            
            { id: 10, name: 'abc' },
            { id: 11, name: 'pqr' },
            { id: 12, name: 'xyz' }
          ]
        }
      ]  
    })
  }
</script>