<template>
  <div v-if="loading">loading...</div>
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
        v-if="resData.skip !== 0"
        class="inline-block mr-3 cursor-pointer"
        @click.prevent="skip = skip - perPage"
        >Previous</a
      >
      <a
        v-if="resData.skip + perPage < resData.total"
        class="cursor-pointer"
        @click.prevent="skip = skip + perPage"
        >Next</a
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      perPage: 30,
      skip: this.$route?.query?.skip ? Number(this.$route.query.skip) : 0,
      resData: null,
    }
  },
  async fetch() {
    await this.fetchProducts()
  },
  head: {
    title: 'my website title',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'My amazing site.',
      },
    ],
  },
  computed: {
    products() {
      return this.resData.products
    },
  },
  watch: {
    skip() {
      this.fetchProducts()
      this.$router.push({ query: { skip: this.skip } })
    },
  },
  methods: {
    async fetchProducts() {
      this.loading = true
      const res = await this.$axios.get(
        `/products?skip=${this.skip}&limit=${this.perPage}`
      )
      this.resData = res.data
      this.loading = false
    },
  },
}
</script>
