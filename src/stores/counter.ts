import { ref, computed, watch } from 'vue'
import type { cardItem } from "@/interfaces/cardInterface.ts";
import cardService from "@/services/cardService";
import getsetService from "@/services/getsetService"
import searchService from "@/services/searchService";
import getsetsearchServices from "@/services/getsetsearchService"
import { defineStore } from 'pinia'

export const UseCardStore = defineStore('cards', () => {
  const cards = ref<cardItem[]>([]);
  const loading = ref<boolean>(false);
  const clicked = ref(false)



  const toggleMenu = () => {
    if (clicked.value === true) {
      console.log("hey");
      clicked.value = false;
    } else {
      console.log("bye");
      clicked.value = true;
    }
  }

//   const sortSet =  () => {
//       console.log(storeSet.value)
//      return storeSet.value.sort((a, b) => 
//       new Date(a.releaseDate) -  new Date(b.releaseDate)
//       )
//  }


  function checkId(id: string) {
    idstore.value = id
    setfinder.value = "sets"
  }

  function storeRarityId(id: string) {
    setstore.value = id
    setfinder.value = "rarity"
  }

  function storesearchId(id: string) {
    setfinder.value = "searchcard"
    cardsearchid.value = id
    console.log(id, setfinder.value)
  } 

  


  
  return { cards, storeRarityId, storesearchId, loading, toggleMenu, clicked}
},
// {
//   persist: true,
// },
)

