<script setup>
useHead({
  title: "my website title",
  meta: [
    {
      name: "description",
      content: "My amazing site.",
    },
  ],
});

// handle pagination
const skip = ref(useRoute().query?.skip ? Number(useRoute().query.skip) : 0);
const perPage = 30;
watch(skip, () => {
  this.$router.push({ query: { skip: skip.value } });
});

// fetch data
const config = useRuntimeConfig();
const { data, pending, refresh } = await useFetch(
  () => `${config.public.baseURL}/products?skip=${skip.value}&limit=${perPage}`
);
const products = computed(() => data.value?.products);
</script>
<template>
  <div v-if="pending">loading...</div>
  <div v-else>
    <ul>
      <li v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`"
          >{{ product.id }} {{ product.title }}</NuxtLink
        >
      </li>
    </ul>
    <div class="opacity-50">
      <a
        v-if="data.skip !== 0"
        class="inline-block mr-3 cursor-pointer"
        @click.prevent="skip = skip - perPage"
        >Previous</a
      >
      <a
        v-if="data.skip + perPage < data.total"
        class="cursor-pointer"
        @click.prevent="skip = skip + perPage"
        >Next</a
      >
    </div>
  </div>
</template>
