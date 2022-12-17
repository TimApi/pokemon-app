<script setup lang="ts">
import {ref, onMounted, computed} from "vue"
import type { cardItem} from "@/interfaces/cardInterface"
import  { UseCardStore } from "@/stores/counter"
import getsetService from "@/services/getsetService"
import getsetsearchService from "@/services/getsetsearchService"
import searchService from "@/services/searchService"

const store = UseCardStore()
type pagesSizes = 20 | 40 | 60
const pagesSizess = ref(NaN as pagesSizes)
const storeSet = ref({})
const storeType = ref({})
const SelectedSet = ref({})
const ClickedSet = ref<string>("")
const CurrentRarity = ref({})



const emit = defineEmits<{
    (event: "getSet", storeSelect: cardItem ): void
    (event: "getPages", pagesSizess: pagesSizes) : void
    (event: "getRarity", CurrentRarity: string): void
    (event: "vmax", value: "vmax"): void
}>()

// const props = defineProps<{
//   stroesearchid: number
// }>()



onMounted(()=> {
    getSet()
    getType()
})



const getSet = async () => {
      getsetService.getSet().then((setdata) => {
      storeSet.value = setdata.data.data
      console.log(storeSet.value)
    })
}

const getType = async () => {
    getsetService.getType().then((type) => {
    storeType.value = type.data.data
    })    
  }


// const getCardforSet = async (id?: string, pagesize?: number, currentpage?:number) => {
//       pagesize = pageSizeSelected.value
//       currentpage = currentPage.value
//       searchService.getsetcard(id, pagesize, currentpage).then((getsetcard) => {
//       // setfinder.value = "sets"
//       store.cards = getsetcard.data.data
//     })
//   }

const searchSet = async (setid: string) => {
      console.log(setid)
      getsetsearchService.getSearchSet(setid).then((searchset) => {
        store.cards = searchset.data.data
      // setfinder.value = "sets"
    })
  }

</script>

<template>
  <div>
    <!-- <pre>{{ cards }}</pre> -->
    <div class="container-xl">
      <div class="select-box">
        <select
          class="select-1 mb-3 custom-select "
          aria-label=".form-select-lg example"
          @change="searchSet(ClickedSet)"
          v-model="ClickedSet"
            
       >
          <option v-for="(storedSet, index) in storeSet" :value="storedSet.id"  :key="index" >{{storedSet.name}}</option>
        </select>
        <select class="select-2 custom-select" @change="emit('getPages', pagesSizess)" v-model="pagesSizess">
          <option value=20>20</option>
          <option value=40>40</option>
          <option value=60>60</option>
        </select>
        <select class="select-3 custom-select" @change="emit('getRarity', CurrentRarity)" v-model="CurrentRarity">
          <option v-for="(type, index) in storeType" :key="index">{{type}}</option>
        </select>
        <label>kijk vmax kaarten</label>
          <input type="checkbox" :value="store.vmax" @click="emit('vmax', store.vmax)">
      </div>
    </div>
  </div>
</template>