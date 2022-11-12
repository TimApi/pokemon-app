<script setup lang="ts">
import {defineAsyncComponent } from "vue";
import cardService from "@/services/cardService";
import searchService from "@/services/searchService";
import getSingleCarditems from "@/services/getcardService";
import type { cardItem } from "@/interfaces/cardInterface.ts";


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

