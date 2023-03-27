<template>
 <v-container>
   <v-row>
     <v-col cols="12" md="4" offset-md="4" sm="6" oofset-sm="3" class="pa-4">
       <v-card class="mx-auto">
         <v-card-title class="text-center text-primary">Lyth</v-card-title>
         <v-form @submit.prevent="login">
           <v-card-text>
             <v-text-field
               v-model="username"
               label="Identifiant"
               prepend-icon="mdi-account-circle"
               required
             ></v-text-field>
             <v-text-field
               :type="showPassword ? 'text' : 'password'"
               v-model="password"
               label="Mot de passe"
               prepend-icon="mdi-lock"
               :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
               @click:append="showPassword = !showPassword"
               required
             ></v-text-field>
           </v-card-text>
           <v-card-actions class="justify-space-between flex-wrap">
             <v-btn color="secondary">Mot de passe oublié</v-btn>
             <v-btn type="submit" color="primary" variant="outlined">Se connecter</v-btn>
           </v-card-actions>
         </v-form>
       </v-card>
     </v-col>
   </v-row>
 </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
    }
  },
  methods: {
    login() {
      this.$api.login({username: this.username, password: this.password})
          .then(response => {
            this.$api.saveToken(response.data.access, response.data.refresh)
            this.$router.push({path: this.$route.query.next || '/'})
          })
          .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>