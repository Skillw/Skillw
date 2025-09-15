<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    package: string;
    id: string;
  }>(),
  {
  }
);

</script>

<template>
  <a
    :href="`/docs/${props.package}/intro`"
    flex="~ row"
    bg="zinc-100 hover:zinc-200 active:zinc-300 dark:zinc-900 dark:hover:zinc-800 dark:active:zinc-900"
    transition="all duration-200 ease"
    cursor-pointer
    select-none
    items-center
    rounded-lg
    p-4
    decoration="!none"
    class="text-$vp-c-text-1!"
  >
    <span>
      <img height="450" width="450" :src="`/assets/docs/${props.package}/icon.png`" />
      <p align="center">
          <img :src="`https://img.shields.io/github/v/release/Skillw/${props.id}`" />
        </p>
    </span>
  </a>
</template>
