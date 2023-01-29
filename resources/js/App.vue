<template>
    <div>
      <component :is="this.$route.meta.layout || 'div'">
        <router-view />
      </component>
    </div>
  </template>
  
  <script>
  
     import axios from "axios";
     import custom_1 from "./customscript";
   
  export default {
    async created() {
      /* const response = await axios.get("user");
      this.$store.dispatch('user', response.data); */
    },
    mounted() {
    custom_1.init();
  },
  };
  </script>
  
  <style>
  </style>