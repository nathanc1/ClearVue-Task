<template>
  <v-app class="bgData">
    <v-main>

    
      <v-container >
        <v-row>
        <v-col md="4"></v-col>
        <v-col md="4" class="text-center">
          <div class="dataBgNav rounded-pill">
          <v-toolbar-title class="textTitle display-2 mx-auto">
            <IconCrypto coinname="BTC" class="mt-2 hidden-xs-only" :width="70" color="color" format="svg" />
            <span class="fontSize text-center"> Bitcoin </span>
             <IconCrypto coinname="BTC" class="mt-2 hidden-xs-only" :width="70" color="color" format="svg" />
     
          </v-toolbar-title>
          </div>
        </v-col>
        <v-col md="4"></v-col>
      </v-row>
        <DataTable />
        <LineChart />

      </v-container>


    </v-main>
  </v-app>
</template>

<script>

// import DragItDude from 'vue-drag-it-dude';
import LineChart from './components/LineChart.vue';


import DataTable from './components/DataTable.vue';
export default {
  name: 'AppVue',
  components: {
    LineChart,
    DataTable
  },
}
</script>
<style scoped>

.bgData{
background-image:url("./assets/blockchain-technology-background-gradient-blue.jpg");
  background-size: cover;
 


}

.textTitle {
  color: #f79319;
  text-transform: uppercase;
 


}
.fontSize{
  font-size: 80px !important;
}
.dataBgNav{
  background-color: white;

}


</style>
