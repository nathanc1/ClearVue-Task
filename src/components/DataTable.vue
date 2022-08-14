<template>
    <v-row class="text-center mt-5">
        <v-col md="2" sm="0" xs="0"></v-col>
        <v-col md="8" sm="12">
            <v-card :elevation="0" class="grey--text text--darken-0">
                <v-card-title>
                    <v-text-field class="text-input-blue grey--text text--darken-0" v-model="search" label="Search"
                        single-line hide-details>
                    </v-text-field>
                </v-card-title>
                <v-data-table class="elevation-1 light" :headers="headers"
                    :items="desserts" :search="search" :sort-desc="[false, true]" multi-sort></v-data-table>
            </v-card>
        </v-col>
        <v-col md="2" sm="0" xs="0"></v-col>
    </v-row>
</template>
<script>
import axios from 'axios'

export default {
    name: 'DataTable',
    props:
        ['color'],
    data() {
        return {
            search: '',
            headers: [
                {
                    text: 'Date',
                    align: 'start',
                    filterable: false,
                    value: 'key',
                    class: 'grey--text text--darken-0'
                },
                {
                    text: 'Price',
                    value: 'value',
                    class: 'grey--text text--darken-0'
                }
            ],
            desserts: [],
        }
    },
    methods: {
        add: function (json) {
            var result = [];
            for (const [key, value] of Object.entries(json)) {
                result.push({
                    key: key,
                    value: value
                })
            }
            return result
        },
    },
    async mounted() {
        this.loaded = false
        try {
            axios
                .get("https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31")
                .then(response => (
                    this.desserts = this.add(response.data.bpi)))

            this.loaded = true

        } catch (e) {
            console.error(e)
        }

    },
}





</script>
<style scoped>
table.v-table thead th {
      font-size: 20px !important;

 }
 table.v-table tbody td {
    font-size: 18px !important;
}
</style>