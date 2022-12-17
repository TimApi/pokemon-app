<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

interface props {
  maxVisibleButtons: number;
  totalPages: number;
  perPage: number;
  currentPage: number;
}

const props = defineProps<props>();

console.log(props.currentPage, props.perPage)

const emits = defineEmits<{
    (e: "pagechanged", value: number): void
}>();

const startPage: any = computed(() => {
  if (props.currentPage === 1) {
    return 1;
  }
  if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons;
  }

  return props.currentPage - 1;
});

const pages = computed(() => {
  const range = [];

  for (
    let i = startPage;
    i <= Math.min(startPage + props.maxVisibleButtons - 1, props.totalPages);
    i++
  )
    range.push({
      name: i,
      isDisabled: i === props.currentPage,
    });
});

const isInFirstPage = computed(() => {
    return props.currentPage === 1;
})

const isInLastPage = computed(() => {
    return props.currentPage === props.totalPages
})

function onClickFirstPage() {
    emits("pagechanged", 1)
}

function onClickPreviousPage() {
    console.log(":bye")
    emits("pagechanged", props.currentPage -1)
}
function onClickPage(page: number) {
    // emits("pagechanged", page)
}
function onClickNextPage() {
    console.log(":heyeyey")
    emits("pagechanged", props.currentPage + 1)
}

function onClickLastPage() {
    console.log(":ddd")
    emits("pagechanged", props.totalPages)
}


</script>

<template>
  <ul class="pagination">
    <li class="pagination-item"> 
      <button
        type="button"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
      >
        First
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        Previous
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li class="pagination-item"
      v-for="page in pages"
      :key="page.name"
    >
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
      >
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickLastPage"
        :disabled="isInLastPage"
      >
        Last
      </button>
    </li>
  </ul>
    <!-- Visible Buttons Start -->
    <ul class="pagination">
    <li v-for="page in pages" :key="page.name" class="pagination-item">
      <button type="button" :disabled="page.isDisabled">
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->
    ...
  </ul>
</template>