<template>
  <v-row>
    <v-col md="2" sm="0"></v-col>
    <v-col md="8" sm="12" class="d-flex justify-center align-center mr-20">
      <v-card height="1000px" width="1500px" color="white" class="bgData grey--text text--darken-0" :elevation="0">
        <drag-it-dude class="LinechartHeight" style="position:relative">
          <LineChartGenerator :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
            :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
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
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Array,
      default: () => []
    }
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


</style>