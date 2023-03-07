<script>
export default {
  layout: 'plain-centered',
  data() {
    return {
      username: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('setUser', {
        username: this.username,
      })
      this.$router.push('/')
    },
  },
}
</script>
<template>
  <form @submit.prevent="login()">
    <label class="block mb-5">
      Username
      <input
        v-model="username"
        type="text"
        class="block border-[1px] border-gray-300 rounded"
      />
    </label>
    <label class="block mb-5">
      Password
      <input
        type="password"
        class="block border-[1px] border-gray-300 rounded"
      />
    </label>
    <AppButton>Login</AppButton>
  </form>
</template>
