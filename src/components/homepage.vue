<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent, computed, watch } from "vue";
import SelectComp from "@/components/select-header.vue";
import Pagination from "@/components/pagination.vue";
import Cards from "@/components/cards.vue"
import Skeleton from "@/components/skeleton.vue"
import cardService from "@/services/cardService";
import type { cardItem } from "@/interfaces/cardInterface";
import { UseCardStore } from "@/stores/counter";
import searchService from "@/services/searchService";
import searchsetRepository from "@/repositories/searchsetRepository";


const SearchBar = defineAsyncComponent(() => import("@/components/search.vue"));
const store = UseCardStore();
const watchActiveFunc = ref<string>("")
const pageSizeSelected = ref(10);
const currentPage = ref(1);
const searchid = ref<any>()
const idCurrentRarity = ref<string | undefined>("")


onMounted(() => {
  getCard();
});


const cardemit = defineEmits<{
  (send: "sendCard", cards: cardItem): void;
  (searchId: "searchId", sotreSearchValue: number): void;
}>();


const getCard = async (pagesize?: number, page?: number) => {
  store.loading = true;
  watchActiveFunc.value = "cards"
  page = currentPage.value;
  pagesize = pageSizeSelected.value;
  cardService.getCards(pagesize, page).then((response) => {
    console.log(response);
    store.cards = response.data.data;
    store.loading = false;
  });
};


const getvmaxCard =  async (vmax?: string, pagesize?:number, pages?: number) => {
      store.loading = true
      watchActiveFunc.value = "vmax"
      searchsetRepository.getvmaxCards(vmax, pagesize, pages).then((vmaxcard) => {
      store.cards = vmaxcard.data.data
      store.loading = false
    })
  }


  const searchCard = async (id: any, pagesize?: number, page?:number) => {
      store.loading = true
      watchActiveFunc.value = "searching"
      searchid.value = id
      pagesize = pageSizeSelected.value
      page = currentPage.value
      searchService.getCard(id, pagesize, page!).then((searchcardata) => {
      store.cards = searchcardata.data.data
      store.loading = false
    })
  }

  const getRaritySearch = async (rarityid?: string, pagesize?: number, page?:number) => {
      store.loading = true
      watchActiveFunc.value = "rarity"
      idCurrentRarity.value = rarityid
      pagesize = pageSizeSelected.value
      page = currentPage.value
      searchsetRepository.GetRaritySearch(rarityid, pagesize, page).then((rarities) => {
      store.cards = rarities.data.data
      store.loading = false
    })
  }


  const onPageChange = async (page?: number, amoutpages?: number) => {
    // loading.value = true
    // page = currentPage.value
    amoutpages = pageSizeSelected.value
    currentPage.value = page 
    console.log(page, amoutpages)
    // if(watchActiveFunc.value === "cards"){
    //   console.log(page, amoutpages)
    //   cardService.getCards(page, amoutpages).then((onchange)=> {
    //   store.cards = onchange.data.data
    // })
    // loading.value  = false
    }

  function getPages(pagesize: number) {
      pageSizeSelected.value = pagesize
  }


    watch([watchActiveFunc, pageSizeSelected, currentPage, searchid, idCurrentRarity], ([setValue, amoutOfPages, pageSelected, cardsearchid, idCurrentRarity]) => {
    if(watchActiveFunc.value === "cards") {
      console.log(watchActiveFunc.value)
      console.log(amoutOfPages, pageSelected)
      getCard(amoutOfPages, pageSelected)
    }
    // if(watchActiveFunc.value === "sets") {
    //   getCardforSet(idSet, amoutOfPages, pageSelected)
    //   onPageChange(pageSelected, amoutOfPages)
    //   console.log(watchActiveFunc.value,idSet, amoutOfPages, pageSelected)
    // }
    if(watchActiveFunc.value === "rarity") {
      getRaritySearch(idCurrentRarity, amoutOfPages, pageSelected)
      onPageChange(pageSelected, amoutOfPages)
    } 
    if(watchActiveFunc.value === "vmax") {
      getvmaxCard("vmax", amoutOfPages, pageSelected)
      onPageChange(pageSelected, amoutOfPages)
    }
    if(watchActiveFunc.value === "searching") {
      searchCard(cardsearchid, amoutOfPages, pageSelected)
      onPageChange(pageSelected, amoutOfPages)
    }
  });


</script>

<template>
  <div class="container mx-auto">
    <div v-if="store.loading">
      <Skeleton />
    </div>

    <div v-else>
      <SearchBar @searchCard="searchCard" />
      <SelectComp
        @getSet="store.checkId"
        @getPages="getPages"
        @getRarity="getRaritySearch"
        @vmax="getvmaxCard"
      />
      <Cards/>
      <div>
        <Pagination
          :totalPages="10"
          :perPage="pageSizeSelected"
          :currentPage="currentPage"
          @pagechanged="onPageChange"
        />
      </div>
    </div>
  </div>
</template>
