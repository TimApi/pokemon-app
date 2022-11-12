<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from "vue";
import SelectComp from "@/components/select-header.vue";
import Pagination from "@/components/pagination.vue"
import  { UseCardStore } from "@/stores/counter"

const isclicked = ref<boolean>(false);
const store = UseCardStore()
const SearchBar = defineAsyncComponent(() => import("@/components/search.vue"));

onMounted(() => {
  store.getCard()
});

const cardemit = defineEmits<{
  (send: "sendCard", cards: cardItem): void;
}>();


// store.getCardforSet()


function toggleModal() {
  if (isclicked.value === true) {
    isclicked.value = false;
  } else {
    isclicked.value = true;
  }
}

store.getSingleCard()

</script>

<template>
  <div class="container-xl">
    <SearchBar @searchCard="store.storesearchId" />
    <SelectComp @getSet="store.checkId" @getPages="store.getPages" @getRarity="store.storeRarityId" @vmax="store.getvmaxCard" />
    <ul class="d-flex cards-list mt-8">
      <li class="cards-item" v-for="(card, index) in store.cards" :key="index">
        <div class="card mt-4">
          <img
            v-if="card.images.small"
            :src="card.images.small"
            class="cards-img-top"
            alt=""
          />
          <div class="card-body">
            <h5 class="card-title">{{ card.name }}</h5>
            <p>hp:{{ card.hp }}</p>
            <p>lvl:{{ card.level }}</p>
            <p>damage:{{ card.damage }}</p>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click="store.getSingleCard(card.id), toggleModal()"
              >
              click hier voor detials
            </button>
            <div
              v-if="isclicked === true"
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                      {{ store.sinnglecarditem.name }}
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>
                      avarge price {{ store.sinnglecarditem.cardmarket.prices.avg1 }}
                    </p>
                    <p>
                      lowPrice {{ store.sinnglecarditem.cardmarket.prices.lowPrice }}
                    </p>
                    <p>
                      trend price
                      {{ store.sinnglecarditem.cardmarket.prices.trendPrice }}
                    </p>
                    <p>
                      reverse holo
                      {{ store.sinnglecarditem.cardmarket.prices.reverseHoloTrend }}
                    </p>
                    <div class="weakness">
                      <p>types {{ store.sinnglecarditem.types }}</p>
                      <p>weaknesses {{ store.sinnglecarditem.weaknesses.logo }}</p>
                    </div>
                    <div class="set">
                      <p>
                        amount printed {{ store.sinnglecarditem.set.printedTotal }}
                      </p>
                      <p>release date {{ store.sinnglecarditem.set.releaseDate }}</p>
                      <img
                        class="detial-logo"
                        :src="store.sinnglecarditem.set.images.symbol"
                      />
                    </div>
                    <div class="rarity">
                      {{ store.sinnglecarditem.rarity }}
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Understood
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div>
    <Pagination
      :totalPages="10"
      :perPage="store.pageSizeSelected.value"
      :currentPage="store.currentPage"
      @pagechanged="store.onPageChange"
      />
    </div>
  </div>
</template>