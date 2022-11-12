import { ref, computed, watch } from 'vue'
import type { cardItem } from "@/interfaces/cardInterface.ts";
import cardService from "@/services/cardService";
import getsetService from "@/services/getsetService"
import searchService from "@/services/searchService";
import getsetsearchServices from "@/services/getsetsearchService"
import getSingleCarditems from "@/services/getcardService";
import { defineStore } from 'pinia'

export const UseCardStore = defineStore('cards', () => {
  const cards = ref([] as cardItem);
  const vmax = ref('vmax')
  const storeSet = ref<object[]>([])
  const storeType = ref<object[]>([])
  const currentPage = ref<number>(1)
  const storeSearchSet = ref({} as cardItem)
  const pageSizeSelected = ref<number>(10)
  const sinnglecarditem = ref([] as cardItem[])
  const setfinder = ref<string>("")
  const idstore = ref<string>("")
  const setstore = ref<string>("")
  const cardsearchid = ref<string>("")


  const getCard = async (pagesize?: string, page?: string) => {
      setfinder.value = "cards"
      page = currentPage.value
      cardService.getCards(pagesize, page).then((response) => {
      console.log(setfinder.value)
      cards.value = response.data.data
      console.log(cards.value)
    })
  }

  const getSet = async () => {
      getsetService.getSet().then((setdata) => {
      storeSet.value = setdata.data.data
      console.log(setdata.data.data)
    })
  }

  const getType = async () => {
    getsetService.getType().then((type) => {
    storeType.value = type.data.data
    })    
  }

  const getCardforSet = async (id?: string, pagesize?: string, currentpage?:string) => {
      idstore.value = id
      console.log(id, idstore.value)
      pagesize = pageSizeSelected.value 
      currentpage = currentPage.value
      searchService.getsetcard(id, pagesize, currentpage).then((getsetcard) => {
      setfinder.value = "sets"
      cards.value = getsetcard.data.data
    })
  }

  const getSingleCard =  async (id?: string) => {
    getSingleCarditems.getcardbyid(id).then((singlecard) => {
    sinnglecarditem.value = singlecard.data.data
    })
  }

  const onPageChange = async (page?: number, amoutpages?: string) => {
    currentPage.value = page
    amoutpages = pageSizeSelected.value
    if(setfinder.value === "cards"){
      console.log(page, amoutpages)
      cardService.getCards(page, amoutpages).then((onchange)=> {
      cards.value = onchange.data.data
    })
    }
    // if(setfinder.value === "sets") {
    //   searchService.getsetcard(page, amoutpages)
    // }
  }

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


  function getPages(pagesize: number) {
      pageSizeSelected.value = pagesize
  }

  const searchSet = async (setid: string) => {
      getsetsearchServices.getSearchSet(setid).then((searchset) => {
      storeSearchSet.value = searchset.data.data
      setfinder.value = "sets"
    })
  }

  const searchCard = async(cardid: number, pagesize?: string, page?:string) => {
      searchService.getCard(cardid, pagesize, page).then((searchcardata) => {
      cards.value = searchcardata.data.data
    })
  }

  const getRaritySearch = async (rarityid?: number, pagesize?: string, page?:string) => {
      setfinder.value = "rarity"
      getsetsearchServices.GetRaritySearch(rarityid, pagesize, page).then((rarities) => {
      cards.value = rarities.data.data
    })
  }

  const getvmaxCard =  async (vmax?: string, pagesize?:string, pages?: string) => {
      setfinder.value = "vmax"
      getsetsearchServices.getvmaxCards(vmax, pagesize, pages).then((vmaxcard) => {
      cards.value = vmaxcard.data.data
    })
  }


  watch([setfinder, pageSizeSelected, currentPage, idstore, setstore, cardsearchid], ([setValue, amoutOfPages, pageSelected, idSet, idRarity, cardsearchid]) => {
    if(setfinder.value === "cards") {
      console.log(setfinder.value)
      console.log(amoutOfPages, pageSelected)
      getCard(amoutOfPages, pageSelected)
    }
    if(setfinder.value === "sets") {
      getCardforSet(idSet, amoutOfPages, pageSelected)
      onPageChange(pageSelected, amoutOfPages)
      console.log(setfinder.value,idSet, amoutOfPages, pageSelected)
    }
    if(setfinder.value === "vmax") {
      console.log(setfinder.value)
      getvmaxCard("vmax", amoutOfPages, pageSelected)
      onPageChange(pageSelected, amoutOfPages)
      console.log(amoutOfPages, pageSelected)
    }
    if(setfinder.value === "rarity") {
      getRaritySearch(idRarity, amoutOfPages, pageSelected)
      onPageChange(pageSelected, amoutOfPages)
    } 
    if(setfinder.value === "searchcard") {
      searchCard(cardsearchid, amoutOfPages, pageSelected)
      onPageChange(pageSelected, amoutOfPages)
    }
  });
  
  return { cards, vmax, idstore, storeSet, sinnglecarditem, storeSearchSet, pageSizeSelected, storeType, getCard, currentPage, getSet, getType, getCardforSet, getSingleCard, onPageChange, getPages, searchSet, searchCard, getRaritySearch, getvmaxCard, checkId, storeRarityId, storesearchId}
},
// {
//   persist: true,
// },
)

