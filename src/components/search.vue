<script setup lang="ts">
import { ref } from "vue";
import cardService from "@/services/cardService";
const searchInput = ref<string>("");

const emit = defineEmits<{
    (e: "searchCard", searchInput?: string):void
}>();
 
</script>

<template>
  <div>
    <!-- <pre>{{ cards }}</pre> -->
    <div class="container-xl">
      <div class="search-box">
        <input
          class="search"
          v-model="searchInput"
          placeholder="Voer hier je pokemon in"
        />
        <button class="submit icons8-search" type="submit" @click="emit('searchCard',searchInput)"></button>
      </div>
    </div>
  </div>
</template>
