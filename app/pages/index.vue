<script setup lang="ts">
type HomeData = {
  title: string
  count: number
  image: { src: string; alt: string }
  image_second: string
  list: { image: string; text: string; value: number }[]
}

const entry = await queryCollection('home').first()
const home = (entry?.meta?.body ?? null) as HomeData | null
</script>

<template>
  <section v-if="home">
    <h1 class="text-[24px]">{{ home.title }}</h1>
    <p class="text-[20px] mt-4">Count: {{ home.count }}</p>
    <img
      class="w-[300px] h-auto mt-4"
      :src="home.image.src"
      :alt="home.image.alt"
    />
    <img class="w-[300px] h-auto mt-4" :src="home.image_second" alt="" />
    <div
      class="mt-8 flex flex-col gap-4"
      v-for="(item, i) in home.list"
      :key="`${item.text}-${i + 1}`"
    >
      <img class="w-[200px] h-auto" :src="item.image" alt="" />
      <div>{{ item.text }}</div>
      <div>{{ item.value }}</div>
    </div>
  </section>
  <p v-else>Home not found</p>
</template>
