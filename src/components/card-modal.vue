<script setup lang="ts">
import { computed, ref } from "vue";
import { UseCardStore } from "@/stores/counter";
// import type { singleCard } from "@/interfaces/singlecardinterface";
const store = UseCardStore();

 interface Props {
    id?: string;
    rarity?: string;
    name?: string;
    supertype?: string 
    lvl?: number;
}


const props = withDefaults(defineProps<Props>(),{
  id: "er is geen id",
  rarity: "er is geen rarity",
  name: "er is geen naam",
  supertype: "er is geen supertype",
  lvl: 0
})

</script>

<template>
  <div
    class="fixed z-10 inset-0 w-full h-full overflow-auto shadow-lg"
  >
    <h1 class="modal-title fs-5" id="staticBackdropLabel">
      {{ props.name }}
    </h1>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
    <div class="modal-body bg-white w-6/12 h-3/6">
      <div>
        <p class="text-black">{{ props.lvl}}</p>
        <p class="text-black">{{ props.name }}</p>
        <p class="text-black">{{ props.rarity}}</p>
        <p class="text-black">{{ props.supertype }}</p>
      </div>
      <button
        type="button"
        class="border-none text-white py-2 px-4 rounded-md mt-2 bg-black text-base font-semibold"
        @click="store.toggleMenu()"
        >
        Understood
      </button>
    </div>
  </div>
</template>
