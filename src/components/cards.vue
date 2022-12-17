<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { cardItem } from "@/interfaces/cardInterface";
import { UseCardStore } from "@/stores/counter";
import Cardmodal from "@/components/card-modal.vue";


const store = UseCardStore();
const loading = ref(false);
const isclicked = ref(false);
const storeid = ref()




const storeIds = (object: {}) => {
  storeid.value = object
  console.log(storeid.value)
}


</script>

<template>
  <ul class="flex flex-wrap mt-8 p-0 justify-center">
    <li
      class="cards-item p-2 list-none"
      v-for="(card, index) in store.cards"
      :key="index"
    >
      <div class="card bg-stone-200 rounded-md mt-4 shadow-black">
        <img
          :src="card.images.small ? card.images.small : card.images.logo"
          class="cards-img-top"
          alt=""
        />
        <div class="card-body p-4">
          <h2 class="card-title font-bold">{{ card.name}}</h2>
          <p class="text-base font-semibold">hp:{{ card.hp }}</p>
          <p class="text-base font-semibold">lvl:{{ card.level }}</p>
          <p class="text-base font-semibold">damage:{{ card.attacks.damage}}</p>
          <button
            type="button"
            class="border-none py-2 px-4 rounded-md mt-2 bg-white text-base font-semibold"
            data-bs-toggle="modal" 
            data-bs-target="#staticBackdrop"
            @click="(store.toggleMenu(), storeIds({...card}))"

          >
            click hier voor detials
          </button>
        </div>
      </div>
    </li>
    <div v-if="store.clicked === true">
      <Cardmodal     
        :id="storeid.id"
        :rarity="storeid.rarity"
        :name="storeid.name"
        :supertype="storeid.supertype"
        :lvl="storeid.level"
      />
    </div>
  </ul>
</template>
