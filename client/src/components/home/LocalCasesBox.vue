<template>
    <div>
        <div class="box-container">
            <h2>Location: South Australia</h2>
            <div>
                <span>New Cases</span>
                <span
                v-html="newCases"> 1
                </span>
            </div>
            <div>
                <span>Active Cases</span>
                <span
                v-html="activeCases"> 1
                </span>
            </div>
            <div>
                <span>Recovered Cases</span>
                <span
                v-html="recoveredCases"> 1
                </span>
            </div>

            <div>
                <span>Total Vaccination Cases</span>
                <span
                v-html="vaccinationCases"> 1
                </span>
            </div>

            <div>
                <span>Total Tests</span>
                <span
                v-html="testCases"> 1
                </span>
            </div>
        </div>
    </div>
</template>

<script>
const formatNumberWithCommas = (n) => {
  return (Math.round(n * 100) / 100).toLocaleString()
}
export default {

  name: 'LocalCasesBox',
  data () {
    return {
      newCases: 0,
      activeCases: 0,
      recoveredCases: 0,
      vaccinationCases: 0,
      testCases: 0
    }
  }
}
</script>
<style scoped>
    .box-container {
        display: flex;
        flex-flow: column nowrap;
        width: 350px;
        height: 300px;
    }

    .box-container > div {
        display: flex;
        justify-content: space-between;
        margin-top: 0.8rem;
    }

    .box-container > div > span:nth-child(2) {
        margin-right: 0.8rem;
    }
</style>
