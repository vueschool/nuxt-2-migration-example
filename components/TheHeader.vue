<template>
  <nav class="mb-10">
    <div class="flex bg-gray-800 text-white p-5 justify-between">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
      </ul>
      <ul class="flex gap-4">
        <template v-if="user.username">
          <li>
            {{ user.username }}
          </li>
          <li @click="$store.dispatch('logout')">Logout</li>
        </template>
        <li v-else>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>
