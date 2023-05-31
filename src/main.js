import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'

createApp(App).use(router).mount('#app')

const firebaseConfig = {
  apiKey: 'AIzaSyABzuxbz4Ts5aFwdkArN2xLxqbCNVLIiko',
  authDomain: 'first-pro-e79f9.firebaseapp.com',
  projectId: 'first-pro-e79f9',
  storageBucket: 'first-pro-e79f9.appspot.com',
  messagingSenderId: '204621526175',
  appId: '1:204621526175:web:64813dec0bf9d57d3a1eaa',
  measurementId: 'G-P6VMVY7JQQ'
}

const app = initializeApp(firebaseConfig)

export { app }
