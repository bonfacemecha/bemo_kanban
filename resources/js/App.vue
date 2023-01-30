<template>
    <div>
      <component :is="this.$route.meta.layout || 'div'">
        <router-view />
      </component>
    </div>
  </template>
  
  <script>
  
     import axios from "axios";
   
  export default {
    };
  </script>
  
  <style>
  </style>