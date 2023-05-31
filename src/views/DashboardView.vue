<template>
  <div class="container">
    <div class="text-center">You're now logged as</div>
    <div class="email">{{ this.email }}</div>
    <button class="logout" @click="signOut">Logout</button>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth'

const auth = getAuth()

export default {
  data() {
    return {
      email: auth.currentUser.email
    }
  },
  methods: {
    signOut() {
      auth
        .signOut()
        .then(() => {
          console.log('Sign Out completed')
          this.$router.push('/')
        })
        .catch((error) => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 30px;
  .text-center {
    font-size: 2rem;
    font-weight: bold;
    color: black;
  }
  .email {
    font-size: 30px;
    color: #a31a6a;
  }
  .logout {
    background-color: lighten(#a31a6a, 20%);
    color: white;
    padding: 0.8rem 1.5rem;
    width: 18rem;
    border-radius: 0.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: medium;
    transition: background 0.5s;
    &:hover {
      background-color: darken(#a31a6a, 10%);
    }
    &:active {
      background-color: darken(#a31a6a, 20%);
      background-size: 100%;
      transition: background 0s;
    }
  }
}
</style>
