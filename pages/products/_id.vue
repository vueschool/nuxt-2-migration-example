<template>
  <div v-if="product">
    <pre class="mb-5">{{ product }}</pre>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios, $config }) {
    const res = await $axios.get(`/products/${params.id}`)
    return {
      product: res.data,
    }
  },
  head() {
    return {
      title: this.product.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My amazing site.',
        },
      ],
    }
  },
}
</script>
