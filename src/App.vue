<template>
<v-app>
  <v-toolbar>
  <v-toolbar-side-icon @click="sideNav =! sideNav" class="hidden-sm-and-up">
  </v-toolbar-side-icon>
  <v-toolbar-title>
    <router-link to="/" tag="span" style="cursor:pointer">Max-Events</router-link>
    </v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-xs-only">
    <v-btn flat v-for="item in menuItems" 
    :key="item.title"
    router
    :to="item.link">
      <v-icon left>{{ item.icon }}</v-icon>
      {{ item.title }}
    </v-btn>
  </v-toolbar-items>
</v-toolbar>
  <!-- <v-navigation-drawer v-model="sideNav" dark hide-overlay temporary>
    <v-list>
      <v-list-tile v-for="item in menuItems" 
      :key="item.title"
      router
      :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-btn flat>
          {{ item.title }}
          </v-btn>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer> -->

<main>
  <router-view></router-view>
</main>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      menuItems:[
        {icon:'supervisor_account',title:'View Events',link:'events'},
        {icon:'room',title:'Organise Events',link:'createevents'},
        {icon:'person',title:'Profile',link:'profile'},
        {icon:'face',title:'Sign up',link:'signup'},
        {icon:'lock_open',title:'Sign in',link:'signin'}
      ]
    }
  }
}
</script>

