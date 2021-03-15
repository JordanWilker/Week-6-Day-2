<template>
  <div class="pictures" v-if="state.pictures.img_src">
    <img :src="state.pictures.img_src" alt="">
    <p>{{state.pictures.earth_date}}</p>
    <p>{{state.pictures.camera.full_name}}</p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { computed } from 'vue'

export default {
  name: 'component',
  setup () {
    const state = reactive({

      pictures: computed(() => AppState.pictures)
    })

    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
