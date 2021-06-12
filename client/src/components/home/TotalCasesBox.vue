<template>
    <div>
        <div class="box-container">
            <div>
                <span>Worldwide</span>
                <span
                v-html="worldwide">
                </span>
            </div>
            <div>
                <span>Australia</span>
                <span
                v-html="australia">
                </span>
            </div>
            <div>
                <span>South Australia</span>
                <span
                v-html="southAustralia">
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

const formatNumberWithCommas = (n) => {
  return (Math.round(n * 100) / 100).toLocaleString()
}
export default {
  name: 'TotalCasesBox',
  data () {
    return {
      worldwide: '',
      australia: '',
      southAustralia: ''

    }
  },
  mounted () {
    axios
      .get('https://api.covid19api.com/world/total')
      .then(response => {
        this.worldwide = formatNumberWithCommas(response.data.TotalConfirmed)
      })

    axios
      .get('https://corona.lmao.ninja/v2/countries/Australia?yesterday&strict&query%20')
      .then(response => {
        this.australia = formatNumberWithCommas(response.data.cases)
      })

    axios
      .get('https://corona.lmao.ninja/v2/countries/Australia?yesterday&strict&query%20')
      .then(response => {
        this.southAustralia = formatNumberWithCommas(0)
      })
  }
}
</script>
<style scoped>
    .box-container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        width: 500px;
        height: 300px;
        font-weight: bold;
        font-size: 1.2rem;
        color: black;
        background-color: #66cdaa;
    }

    .box-container > div {
        display: flex;
        justify-content: space-between;
        margin-left: 3.2rem;

    }

    .box-container > div > span:nth-child(2) {
        margin-right: 3.2rem;
    }

</style>
