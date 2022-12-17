<script setup lang="ts">
import { ref } from "vue";

const skeletonStore = ref(20);
</script>

<template>
  <div class="flex flex-wrap">
    <a
      class="card w-4/12 p-2"
      id="card-link"
      target="_blank"
      v-for="(skeleton, index) in skeletonStore"
      :key="index"
    >
      <div class="card__header">
        <div>
          <img class="card__header header__img skeleton" id="logo-img" alt="" />
        </div>
        <h3 class="card__header header__title" id="card-title">
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
        </h3>
      </div>

      <div class="card__body">
        <div class="card__body body__text" id="card-details">
          <div class="skeleton skeleton-text skeleton-text__body"></div>
        </div>

        <div class="card__body body__img">
          <img class="skeleton" alt="" id="cover-img" />
        </div>
      </div>

      <div class="card__footer" id="card-footer">
        <div class="skeleton skeleton-text skeleton-footer"></div>
      </div>
    </a>
  </div>
</template>
