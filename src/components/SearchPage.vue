<script>
import SearchBar from '../components/SearchResults/SearchBar.vue'
import MainArtist from './SearchResults/MainArtist.vue';
import ArtistSearchTable from './SearchResults/ArtistSearchTable.vue'
import AlbumSearchTable from './SearchResults/AlbumSearchTable.vue';
export default{
  name: 'SearchPage',
  components:{
    SearchBar,
    MainArtist,
    ArtistSearchTable,
    AlbumSearchTable,
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
    <SearchBar />
    <MainArtist />
    <ArtistSearchTable />
    <AlbumSearchTable />

  </div>
</template>

<style scoped lang="scss">
@use '../../styles/partials/variables.scss' as *;
.container{
  background-color: $black;
}
</style>
