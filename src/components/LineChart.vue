<template>
  <v-row>
    <v-col md="2" sm="0"></v-col>
    <v-col md="8" sm="12" class="d-flex mr-20">
      <v-card height="1000px" width="1500px" :elevation="0">
        <drag-it-dude class="dragData">
          <LineChartGenerator 
            :chart-options="chartOptions" 
            :chart-data="chartData" 
            :width="width"
            :height="height" />
        </drag-it-dude>
      </v-card>
    </v-col>
    <v-col md="2" sm="0"></v-col>
  </v-row>
</template>
<script>
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'
import DragItDude from 'vue-drag-it-dude';
import axios from 'axios'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)
ChartJS.defaults.font.size = 18;

export default {
  name: 'LineChart',
  components: {
    LineChartGenerator,
    DragItDude
  },
  props: {
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
  
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'BPI Price',
            backgroundColor: '#f79319',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,

      },
    }
  },
  async mounted() {
    this.loaded = false
    try {
      axios
        .get("https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31")
        .then(response => (this.chartData.datasets[0].data = Object.values(response.data.bpi), this.chartData.labels = Object.keys(response.data.bpi)))
      this.loaded = true

    } catch (e) {
      console.error(e)
    }
  }
}
</script>
<style scoped>
.bgData {
  background-color: white;
}
.dragData{
  position:relative;
}
</style>