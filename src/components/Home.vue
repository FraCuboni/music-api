<script>
import TopArtists from './HomeResults/TopArtists.vue';

export default{
  name: 'Home',
  components:{
    TopArtists,
  },
  data(){
    return{

    }
  },
  methods:{

  },
  mounted(){

  },
}
</script>

<template>
  <div class="container">
    <div class="jumbo">
      <div class="vinyl"><i class="fa-solid fa-compact-disc"></i></div>
    </div>

   <TopArtists />

  </div>
</template>

<style scoped lang="scss">
@use '../../styles/partials/variables.scss' as *;

.container{
  background-color: $black;

  .jumbo{
    height: 300px;
    width: 100%;
    position: relative;

    // flex
    display: flex;
    justify-content: center;
    align-items: center;

    .vinyl{
      position: absolute;
      width: 100%;
      height: 100%;

      // flex
      display: flex;
      justify-content: center;
      align-items: center;

      i{
        animation: rotateInfinite 5000ms linear infinite;
        color: $green;
        font-size: 250px;
      }
    }

  }

  @keyframes rotateInfinite {
  from {
    transform: rotate(0deg); /* Partenza dall'angolo 0 gradi */
  }
  to {
    transform: rotate(360deg); /* Arrivo a 360 gradi (una rotazione completa) */
  }
}
}
</style>
