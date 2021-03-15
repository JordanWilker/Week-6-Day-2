<template>
  <div class="app">
    <header class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col text-center">
          <h1> Welcome to <img alt="Vue logo" src="./assets/logo.png">ue-Space</h1>
        </div>
      </div>
    </header>
    <main class="container">
      <div class="row">
        <div class="col">
          <button @click="getImage()">Generate Image</button>
          <div>
            <Picture/>
          </div>
        </div>
      </div>
    </main>
    <footer class="container-fluid bg-primary text-light">
      <div class="row">
        <div class="col text-center">
          <p class="m-3"> Made with ♥ by codeworks</p>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>
import { computed, reactive } from 'vue'
import Picture from './components/Picture'
import { AppState } from './AppState'
import { pictureService } from './services/PictureService'
export default {
  name: 'App',
  components: {
    Picture

  },
  setup () {
    const state = reactive({
      pictures: computed(() => AppState.pictures)
    })
    return {
      state,
      getImage () {
        pictureService.searchPics()
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 img {
  height: 1em;
}
.app {
 display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex-grow: 1;
}
</style>
