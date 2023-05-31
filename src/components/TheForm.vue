<template>
  <div class="container">
    <div class="form-wrapper">
      <div class="form-content-wrapper">
        <form @submit.prevent="login">
          <div class="form-title">
            <slot name="formTitle"> <h1>deneme</h1></slot>
          </div>
          <div class="form-content">
            <input v-model="email" type="text" name="email" class="input" placeholder="Email" />
            <input type="password" name="password" class="input" placeholder="Password" />
            <slot name="formButton" />
          </div>
        </form>
        <div v-if="error" class="alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16">
            <path
              d="m40-120 440-760 440 760H40Zm104-60h672L480-760 144-180Zm340.175-57q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5ZM454-348h60v-224h-60v224Zm26-122Z"
            />
          </svg>
          <span>
            {{ errorMessage }}
          </span>
        </div>
      </div>

      <slot name="moveButton" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: Boolean,
    errorMessage: String
  },
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style lang="scss">
.form-wrapper {
  border: 1px solid $border-color;
  background-color: $background-color;
  width: 25%;
  padding: 3em 0;
  border-radius: 3px;

  display: flex;
  align-items: center;
  flex-direction: column;

  .form-content-wrapper {
    margin-bottom: 1em;

    .form-title {
      display: flex;
      justify-content: center;
      margin-bottom: 0.5em;
    }

    .form-content {
      display: flex;
      flex-direction: column;
    }

    .alert-error {
      display: flex;
      align-items: center;
      width: 250px;
      background-color: #f87171;
      border: 1px solid #dc2626;
      border-radius: 3px;
      color: #fff;
      margin-top: 0.5em;
      padding: 0.5em 1em;

      svg {
        margin-right: 0.5em;
      }

      span {
        font-size: 12px;
      }
    }
  }

  .form-button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
