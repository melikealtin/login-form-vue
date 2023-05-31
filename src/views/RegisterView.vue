<template>
  <TheForm :error="error" :errorMessage="errorMessage" @submit.prevent="register">
    <template #formTitle>
      <h1>Register</h1>
    </template>

    <template #formButton>
      <button type="submit" class="btn">Register</button>
    </template>

    <template #moveButton>
      <div class="form-button-wrapper">
        <span>Already have an account?</span>
        <button @click="moveToLogin" class="btn">Login</button>
      </div>
    </template>
  </TheForm>
</template>

<script>
import TheForm from '@/components/TheForm.vue'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

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
    register(submitEvent) {
      this.email = submitEvent.target.elements.email.value
      this.password = submitEvent.target.elements.password.value
      console.log('1', submitEvent.target.elements)

      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
          this.$router.push('/')
        })
        .catch((error) => {
          console.log('2', this.error)
          this.error = true
          this.errorMessage = error.message
        })
    },
    moveToLogin() {
      this.$router.push('/')
    }
  }
}
</script>
