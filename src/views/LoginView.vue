<template>
  <TheForm :error="error" :errorMessage="errorMessage" @submit.prevent="login">
    <template #formTitle>
      <h1>Login</h1>
    </template>

    <template #formButton>
      <button type="submit" class="btn">Login</button>
    </template>

    <template #moveButton>
      <div class="form-button-wrapper">
        <span>You don't have an account?</span>
        <button @click="moveToRegister" class="btn">Register</button>
      </div>
    </template>
  </TheForm>
</template>

<script>
import TheForm from '@/components/TheForm.vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default {
  components: {
    TheForm
  },

  data() {
    return {
      errorMessage: '',
      error: false
    }
  },

  methods: {
    login(form) {
      this.email = form.target.elements.email.value
      this.password = form.target.elements.password.value

      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push('/dashboard')
        })
        .catch((error) => {
          this.error = true
          this.errorMessage = error.message
        })
    },
    moveToRegister() {
      this.$router.push('/register')
    }
  }
}
</script>
