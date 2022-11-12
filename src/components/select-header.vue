<script setup lang="ts">
import {ref, onMounted} from "vue"
import type { cardItem} from "@/interfaces/cardInterface"
import  { UseCardStore } from "@/stores/counter"



const storeSelect = ref<string>("")
const store = UseCardStore()
type pagesSizes = 20 | 40 | 60
const pagesSizess = ref(NaN as pagesSizes)

const emit = defineEmits<{
    (event: "getSet", storeSelect: cardItem ): void
    (event: "getPages", pagesSizess: pagesSizes) : void
    (event: "getRarity", storeRarity: object): void
    (event: "vmax", value: "vmax"): void
}>()


onMounted(()=> {
    store.getSet()
    store.getType()
})

</script>

<template>
  <div>
    <!-- <pre>{{ cards }}</pre> -->
    <div class="container-xl">
      <div class="select-box">
        <select
          class="select-1 mb-3 custom-select "
          aria-label=".form-select-lg example"
            @change="store.searchSet(storeSelect), emit('getSet', storeSelect)"
            v-model="storeSelect"
            
        >
          <option v-for="(store, index) in store.storeSet" :value="store.id"  :key="index" >{{store.name}}</option>
        </select>
        <select class="select-2 custom-select" @change="emit('getPages', pagesSizess)" v-model="pagesSizess">
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
        </select>
        <select class="select-3 custom-select" @change="emit('getRarity', store.storeType)" v-model="store.storeType">
          <option v-for="(type, index) in store.storeType" :key="index">{{type}}</option>
        </select>
        <label>kijk vmax kaarten</label>
          <input type="checkbox" :value="store.vmax" @click="emit('vmax', store.vmax)">
      </div>
    </div>
  </div>
</template>