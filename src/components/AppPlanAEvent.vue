<template>
<div class="PlanAEventBkgImg">
<v-container mb-3>
  <form>
    <v-text-field
      v-model="EventName"
      color="green"
      label="Event Name"
      required
      dark
      
    ></v-text-field>
    <v-textarea
      name="EventDescription"
      box
      label="Event Description"
      auto-grow
      value=""
      color="green"
      dark
    ></v-textarea>
    <v-text-field
      v-model="date"
      label="Date:dd/mm/yy"
      required
      color="green"
     dark
    ></v-text-field>
    <v-text-field
      v-model="time"
      
      label="Time"
      required
     color="green"
     dark
    ></v-text-field>

     <v-text-field
      v-model="venue"
      
      label="Venue"
      required
     color="green"
     dark
    ></v-text-field>
    <v-radio-group  v-model="row" row>
      <v-radio dark color="green" label="Technical" value="radio-1"></v-radio>
      <v-radio dark color="green" label="Cultural" value="radio-2"></v-radio>
      <v-radio dark color="green" label="Managerial" value="radio-3"></v-radio>
    </v-radio-group>
    <v-btn color="green" type="submit">SUBMIT</v-btn>
  </form>
</v-container>
</div>
</template>


<script>
  export default {
    data () {
      return {
        time: null,
        menu2: false,
        modal2: false
      }
    }
  }
</script>

<style>
.PlanAEventBkgImg{
  background-image: url("./PlanAEventBkgImg.png");
  background-repeat:no-repeat; 
	background-size:cover;
}
</style>
