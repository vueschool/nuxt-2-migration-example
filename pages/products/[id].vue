<script setup>
const config = useRuntimeConfig();

const id = useRoute().params.id;
const { data: product } = await useFetch(
  `${config.public.baseURL}/products/${id}`
);

useHead({
  title: product.title,
  meta: [
    {
      name: "description",
      content: "My amazing site.",
    },
  ],
});
</script>

<template>
  <div>
    <div class="flex">
      <NuxtImg
        v-for="image in product.images"
        :key="image"
        :src="image"
        :alt="product.title"
        width="200"
        height="200"
        fit="cover"
      />
    </div>
    <pre class="mb-5">{{ product }}</pre>
  </div>
</template>
