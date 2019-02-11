<template>
<v-container mb-4>
  <form>
    <v-text-field
      v-model="name"
      
      label="Name"
      required
      
    ></v-text-field>
    <v-text-field
      v-model="email"
      
      label="E-mail"
      required
      
    ></v-text-field>
    <v-text-field
      v-model="organisation"
      
      label="Organisation"
      required
     
    ></v-text-field>
    
 
    <v-radio-group  v-model="row" row>
      <v-radio color="green" label="Technical" value="radio-1"></v-radio>
      <v-radio color="green" label="Cultural" value="radio-2"></v-radio>
      <v-radio color="green" label="Managerial" value="radio-3"></v-radio>
    </v-radio-group>


    <v-text-field
      v-model="password"
      
      label="Password"
      type="password"
      required
      
    ></v-text-field>
    <v-text-field
      v-model="confirmpassword"
      
      label="Confirm Password"
      type="password"
      required
      
    ></v-text-field>

    <v-btn color="green" type="submit">SUBMIT</v-btn>
    <div><h2>Already Have A Account??</h2></div>
  </form>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn  slot="activator" color="primary" dark>Login</v-btn>
      <v-card>
        <v-toolbar dark color="primary">

          <v-btn @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          
          <v-toolbar-title>Login</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <form>
            <v-container>
    <v-text-field
      v-model="loginemail"
      
      label="E-mail"
      required
      
    ></v-text-field>
    <v-text-field
      v-model="loginpassword"
      
      label="Password"
      type="password"
      required
      
    ></v-text-field>
    <v-btn color="green" type="submit">Login</v-btn>
            </v-container>
        </form>
      </v-card>
    </v-dialog>
  </v-layout>
</v-container>

</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      loginname: '',
      loginemail: '',
      name: '',
      email: '',
      organisation: '',
      password: '',
      confirmpassword: '',
    }
  }
  }
</script>