<template>
  <div>
    <div id="main" class="container">
        <TotalCasesBox/>
        <div class="location">
            <LocalCasesBox/>
            <div id='map' style='width: 31.25rem; height: 18.75rem;'></div>
        </div>
    </div>
    <div id="info-container" class="container">
        <div>
            <div class="title">
                    <h3> Nucleic Acid Test <br/> & Results</h3>
            </div>
            <hr/>
            <div class="content">
                Make appointment<br>
                Avaliable for texting<br>
                Working Time<br>
                Check Result
            </div>
        </div>
        <div>
            <div class="title">
                    <h3> Vaccine <br/> Dynamics</h3>
            </div>
            <hr/>
            <div class="content">
                Latest progress<br>Vaccine guide<br>Precautions<br>People who are not suitable for vaccination
            </div>
        </div>
        <div>
            <div class="title">
                    <h3>Patient <br/> Trajectory</h3>
            </div>
            <hr/>
            <div class="content">
                Announced place<br>Patient information
            </div>
        </div>
        <div>
            <div class="title">
                    <h3>COVID-19 Preventive <br/> Measures</h3>
            </div>
            <hr/>
            <div class="content">
                An important way to slow down the spread<br>How to project yourself and others
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HotspotsService from '../services/HotspotService'
import TotalCasesBox from './home/TotalCasesBox'
import LocalCasesBox from './home/LocalCasesBox'

const addHotspot = (loc, accessToken, map, geojson) => {
  let feature = {
    'type': 'Feature',
    'geometry': {
      'type': 'Point',
      'coordinates': [138.564, -34.8944]
    }
  }

  axios
    .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?country=au&access_token=${accessToken}`)
    .then(response => {
      let longitude = response.data.features[0].center[0]
      let latitude = response.data.features[0].center[1]
      feature.geometry.coordinates = [longitude, latitude]
      geojson.features.push(feature)
    })
  return geojson
}

export default {
  name: 'root',
  components: {
    TotalCasesBox,
    LocalCasesBox
  },
  data () {
    return {
    }
  },
  async mounted () {
    // const hotspots = await HotspotsService.index()

    let geojson = {
      'type': 'FeatureCollection',
      'properties': {
        'dbh': 20
      },
      'features': [
      ]
    }

    let feature = {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [138.564, -34.8944]
      }
    }

    feature.geometry.coordinates = [138.554, -34.8944]
    geojson.features.push(feature)
    geojson.features.push({
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [138.553, -34.8944]
      }
    })

    /* global mapboxgl */
    /* eslint no-undef: "error" */
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmVmYW5zc3MiLCJhIjoiY2tvbXNqcGgwMjhuMDJucHcwdTJhODgyYiJ9.BvShOtAMS-ot5JMhC2oMSA'
    var map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [138.564, -34.8944], // starting position [lng, lat]
      zoom: 10 // starting zoom
    })

    geojson = addHotspot('campbelltown adelaide', mapboxgl.accessToken, map, geojson)

    // // Add the control to the map.
    // map.addControl(
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     mapboxgl: mapboxgl
    //   })
    // )

    map.on('load', function () {
      map.addSource('points', {
        'type': 'geojson',
        'data': geojson
      })

      map.addLayer(
        {
          'id': 'covid-heat',
          'type': 'heatmap',
          'source': 'points',
          'maxzoom': 15,
          'paint': {
            'heatmap-weight': {
              'property': 'dbh',
              'type': 'exponential',
              'stops': [
                [1, 0],
                [62, 1]
              ]
            },
            // increase intensity as zoom level increases
            'heatmap-intensity': {
              'stops': [
                [11, 1],
                [15, 3]
              ]
            },
            // use sequential color palette to use exponentially as the weight increases
            'heatmap-color': [
              'interpolate',
              ['linear'],
              ['heatmap-density'],
              0,
              'rgba(236,222,239,0)',
              0.2,
              'rgb(208,209,230)',
              0.4,
              'rgb(166,189,219)',
              0.6,
              'rgb(103,169,207)',
              0.8,
              'rgb(28,144,153)'
            ],
            // increase radius as zoom increases
            'heatmap-radius': {
              'stops': [
                [11, 15],
                [15, 20]
              ]
            },
            // decrease opacity to transition into the circle layer
            'heatmap-opacity': {
              'default': 1,
              'stops': [
                [14, 1],
                [15, 0]
              ]
            }
          }
        },
        'waterway-label'
      )

      map.addLayer(
        {
          'id': 'covid-point',
          'type': 'circle',
          'source': 'points',
          'minzoom': 14,
          'paint': {
            // increase the radius of the circle as the zoom level and dbh value increases
            'circle-radius': {
              'property': 'dbh',
              'type': 'exponential',
              'stops': [
                [{ zoom: 15, value: 1 }, 5],
                [{ zoom: 15, value: 62 }, 10],
                [{ zoom: 22, value: 1 }, 20],
                [{ zoom: 22, value: 62 }, 50]
              ]
            },
            'circle-color': {
              'property': 'dbh',
              'type': 'exponential',
              'stops': [
                [0, 'rgba(236,222,239,0)'],
                [10, 'rgb(236,222,239)'],
                [20, 'rgb(208,209,230)'],
                [30, 'rgb(255,189,219)'],
                [40, 'rgb(103,169,207)'],
                [50, 'rgb(28,144,153)'],
                [60, 'rgb(1,108,89)']
              ]
            },
            'circle-stroke-color': 'white',
            'circle-stroke-width': 1,
            'circle-opacity': {
              'stops': [
                [14, 0],
                [15, 1]
              ]
            }
          }
        },
        'waterway-label'
      )
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container, .location {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
    }

    .container {
        flex-flow: row nowrap;
    }

    .location {
        /* padding-top: 4.4rem; */
        margin-left: 1.2rem;
    }

    #map {
        z-index: 1;
    }

    #main {
        padding-top: 4.4rem;
    }

    #info-container {
        padding-top: 0.4rem;
        display: flex;
        justify-content: space-around;
    }

    #info-container > div{
        display: flex;
        flex-flow: column nowrap;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        height: 15.625rem;
        width: 22%;
        background-color: #20b2aa;
        color:black;
        /* line-height: 1.4; */
    }

    br {
       display: block;
       margin: 0.125rem 0;
    }

    .title {
        width: 100%;
        border-bottom: 1px;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    .content {
        font-size: 0.75rem;
    }
</style>
