<template>
  <v-toolbar color="#98293E" dark >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>EMS</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <router-link to="/">
      <v-btn flat>HOME</v-btn>
      </router-link>
      <v-btn flat>EVENTS</v-btn>
      <v-btn flat>PLAN A EVENT</v-btn>
      <router-link to="/login">
      <v-btn flat>REGISTER</v-btn>
      </router-link>
      
    </div>
  </v-toolbar>
</template>