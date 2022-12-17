<script setup lang="ts">
import {defineAsyncComponent } from "vue";


const Singlecard = defineAsyncComponent(() =>
  import('@/components/homepage.vue')
)



</script>

<template>
  <Suspense>
    <template #default> 
      <Singlecard :cards="cards" />  
    </template>
    <template #fallback>
      <h1>Testingggg  </h1>
    </template>
  </Suspense>
</template>

