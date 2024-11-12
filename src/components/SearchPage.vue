<script>
import MainArtist from './SearchResults/MainArtist.vue';
import ArtistSearchTable from './SearchResults/ArtistSearchTable.vue'
export default{
  name: 'SearchPage',
  components:{
    ArtistSearchTable,
    MainArtist,
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
  <MainArtist />
  <ArtistSearchTable />
  
</template>

<style scoped lang="scss">
@use '../../styles/partials/variables.scss' as *;
</style>
