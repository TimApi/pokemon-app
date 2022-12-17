<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue"

const clicked = ref<boolean>(false);

</script>

<template>
  <header
    class="header border-b-2 border-x-0 border-t-0 border-[#E2E8F0] border-solid mb-8"
  >
    <nav class="flex justify-between items-center py-2 px-6 pl-0">
      <a href="#" cass="no-underline ">
        <img src="../src/assets/tj.png" class="w-[45px] h-[45px]" />
      </a>
      <ul
        class="nav-menu fixed top-20 flex-col bg-white w-full rounded-lg text-center shadow-lg md:flex md:justify-between md:items-center md:flex-row md:left-auto md:top-auto md:shadow-none md:w-auto md:static md:bg-transparent z-10"
        :class="{ active: clicked === true }" @click="clicked = !clicked"
      >
        <li class="list-none my-10 md:ml-20 md:my-0">
          <a
            href="#"
            class="text-1xl font-normal text-[#475569] hover:text-[#482ff7]"
            >Services</a
          >
        </li>
        <li class="list-none my-10 md:ml-20  md:my-0">
          <a
            href="#"
            class="text-1xl font-normal text-[#475569] hover:text-[#482ff7]"
            >Blog</a
          >
        </li>
        <li class="list-none my-10 md:ml-20  md:my-0">
          <a
            href="#"
            class="text-1xl font-normal text-[#475569] hover:text-[#482ff7]"
            >About</a
          >
        </li>
        <li class="list-none my-10 md:ml-20  md:my-0">
          <a
            href="#"
            class="text-1xl font-normal text-[#475569] hover:text-[#482ff7]"
            >Contact</a
          >
        </li>
      </ul>
      <div class="hamburger block md:hidden"
         :class="{ active: clicked === true }" @click="clicked = !clicked">
        <span
          class="block w-[25px] h-[3px] bg-[#101010] mx-auto my-1.5 ease-in duration-300"
        ></span>
        <span
          class="block w-[25px] h-[3px] bg-[#101010] mx-auto my-1.5 ease-in duration-300"
        ></span>
        <span
          class="block w-[25px] h-[3px] bg-[#101010] mx-auto my-1.5 ease-in duration-300"
        ></span>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
