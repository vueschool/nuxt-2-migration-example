<script>
definePageMeta({
  layout: "plain-centered",
});
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("setUser", {
        username: this.username,
      });
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <form @submit.prevent="login()">
    <!-- Username -->
    <div class="form-field mb-5">
      <label for="username" class="block"> Username </label>
      <input
        id="username"
        v-model="username"
        type="text"
        class="block border-[1px] border-gray-300 rounded"
      />
    </div>

    <!-- Password -->
    <div class="form-field mb-5">
      <label class="block" for="password"> Password </label>
      <input
        id="password"
        type="password"
        class="block border-[1px] border-gray-300 rounded"
      />
    </div>

    <AppButton>Login</AppButton>
  </form>
</template>
