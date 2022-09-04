import YearSelector from './components/YearSelector'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import LapChart from './components/LapChart';

const DevPage: NextPage = () => {

    const [year, setYear] = useState(0)
    const [events, setEvents] = useState([])
    const axios = require('axios').default;

    const getEventsByYear = () => {
        axios.get("https://fastf1-webviewer-api.herokuapp.com/api/events/", //TODO: add proxy instead of full api url
            {
                headers: {
                    year: year
                },

            })
            .then(function (response: any) {
                setEvents(response.data)
            })
            .catch(function (error: any) {
                setEvents([])
                console.error("Unable to get events for: ", year, error)
            })
    }
    useEffect(() => {
        if (year === 0) {
            return
        }
        getEventsByYear()
    },
        [year]
    )

    useEffect(() => {
        if (year === 0) { //TODO: this will be used when setting year via url query
            return
        }
        //TODO: setevents

    }, [events])

    const testLapData = {"lapChartData":{"VER":{"Name":"Max Verstappen","Positions":[14,8,8,8,8,6,5,4,3,3,3,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"1e5bc6","Compounds":["SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM"],"LapTimes":["NaT","139.517","NaT","NaT","113.951","113.748","111.954","112.641","113.532","113.969","114.634","113.158","113.728","113.898","117.82","125.124","110.747","111.048","111.913","112.208","112.175","112.382","112.273","112.467","112.555","112.526","112.869","112.71","112.762","117.131","123.664","109.354","111.144","111.034","111.469","111.551","111.587","111.513","112.26","111.889","112.165","112.157","112.731","113.149"]},"PER":{"Name":"Sergio Perez","Positions":[2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,3,3,3,3,3,3,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"1e5bc6","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD"],"LapTimes":["NaT","132.454","NaT","NaT","112.872","112.708","113.008","113.535","114.803","114.571","114.843","115.163","115.277","119.07","124.971","111.556","111.689","112.249","112.557","113.665","112.805","113.123","113.383","113.474","113.351","113.73","118.272","125.054","110.764","111.225","111.285","111.66","111.885","112.147","111.953","112.531","112.35","112.412","112.549","112.271","112.452","113.04","112.671","112.843"]},"SAI":{"Name":"Carlos Sainz","Positions":[1,1,1,1,1,1,1,1,1,1,1,3,5,4,3,2,1,1,2,2,2,3,3,3,3,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"ed1c24","Compounds":["SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD"],"LapTimes":["NaT","131.068","NaT","NaT","112.198","112.322","112.759","114.08","114.625","NaT","119.054","126.005","113.107","113.271","112.725","113.242","113.123","113.802","113.594","114.015","114.941","114.547","114.168","114.259","118.369","126.889","112.398","112.235","112.878","112.423","112.158","111.977","112.257","112.213","112.468","112.645","112.338","112.378","112.454","112.447","112.605","112.71","112.501","112.605"]},"RUS":{"Name":"George Russell","Positions":[5,3,3,3,3,3,3,3,4,4,4,4,3,3,6,5,4,4,4,4,4,4,4,4,4,3,3,3,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"6cd3bf","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD"],"LapTimes":["NaT","134.791","NaT","NaT","113.854","113.586","113.447","114.854","114.706","114.975","114.677","114.835","119.064","127.143","113.204","112.979","113.07","113.171","113.53","113.587","113.302","113.372","113.572","113.375","113.552","113.887","113.864","113.459","117.799","125.447","110.793","111.098","111.119","112.067","111.744","111.627","112.205","112.175","113.197","112.159","112.391","112.79","112.593","112.637"]},"ALO":{"Name":"Fernando Alonso","Positions":[3,4,4,4,4,4,4,5,5,5,5,6,13,10,9,8,6,6,6,6,6,6,6,6,6,8,12,10,9,8,8,8,8,7,6,6,6,6,6,6,6,6,6,5,6],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"2293d1","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD"],"LapTimes":["NaT","135.896","NaT","NaT","114.347","114.275","114.691","115.01","115.459","115.356","119.751","127.81","114.587","115.838","115.183","113.954","114.954","114.636","114.922","115.269","115.207","115.197","114.856","115.169","119.47","128.138","113.34","112.981","113.676","114.155","113.735","113.372","113.087","113.201","112.868","113.03","113.215","113.357","113.376","113.118","113.078","113.313","113.793","113.76"]},"LEC":{"Name":"Charles Leclerc","Positions":[15,10,9,12,17,17,16,16,14,13,12,11,7,7,5,4,5,5,5,5,5,5,5,5,5,5,7,7,7,6,6,5,5,5,5,5,5,5,5,5,5,5,5,6,5],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"ed1c24","Compounds":["SOFT","SOFT","SOFT","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","SOFT","SOFT"],"LapTimes":["NaT","140.48","NaT","NaT","115.169","115.276","115.579","115.857","116.322","114.888","115.601","114.671","115.029","114.132","114.724","115.66","114.271","114.575","115.149","114.615","115.082","115.001","114.64","115.158","119.575","127.552","112.515","112.46","112.51","112.663","111.677","111.872","112.014","112.683","112.492","113.507","113.284","113.296","112.735","112.545","113.248","118.112","128.683","109.984"]},"OCO":{"Name":"Esteban Ocon","Positions":[16,13,12,11,11,11,11,10,10,10,9,9,10,16,14,11,10,10,9,9,8,8,8,8,8,7,6,6,6,7,7,7,7,9,9,7,7,7,7,7,7,7,7,7,7],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"2293d1","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM"],"LapTimes":["NaT","142.332","NaT","NaT","115.451","115.402","114.506","115.347","115.826","116.416","116.218","120.431","127.553","114.927","115.408","113.488","113.963","114.841","115.468","114.143","114.598","114.576","114.638","114.666","114.651","114.76","114.593","114.343","115.208","114.449","114.483","118.692","126.455","112.375","111.91","111.717","112.149","112.377","112.608","112.766","112.762","113.258","113.229","113.045"]},"VET":{"Name":"Sebastian Vettel","Positions":[10,5,5,5,5,5,6,6,6,6,6,5,4,5,4,10,9,8,7,7,7,7,7,7,7,6,5,5,5,5,5,6,6,6,8,8,8,8,8,8,8,8,8,8,8],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"2d826d","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM"],"LapTimes":["NaT","137.537","NaT","NaT","114.49","114.854","114.47","114.967","115.57","115.521","115.82","115.533","116.516","119.972","129.646","114.685","113.525","114.183","114.498","114.522","114.454","114.604","114.697","114.657","114.689","114.461","113.997","114.298","114.867","114.658","114.856","114.518","119.088","127.378","113.675","112.643","112.825","112.739","112.773","112.515","112.765","113.084","112.988","112.999"]},"GAS":{"Name":"Pierre Gasly","Positions":[0,19,17,17,16,15,15,15,16,16,18,18,17,17,15,13,12,12,12,11,11,12,14,17,16,16,16,13,12,11,10,10,9,8,7,9,9,9,9,9,9,9,9,9,9],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"4e7c9b","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM"],"LapTimes":["NaT","NaT","NaT","NaT","115.353","115.433","115.716","117.112","117.232","120.981","127.761","113.638","114.569","114.546","114.735","114.94","114.254","114.821","115.471","115.432","116.081","119.515","126.735","113.002","113.468","114.261","113.863","113.56","113.509","113.426","113.578","113.584","113.758","114.385","116.174","114.009","114.085","114.452","113.873","113.993","114.088","114.206","113.992","114.272"]},"ALB":{"Name":"Alexander Albon","Positions":[6,7,7,7,7,8,7,7,7,7,11,17,16,14,12,9,8,9,8,8,9,9,9,9,9,9,11,16,14,13,12,11,11,10,10,10,10,10,10,10,10,10,10,10,10],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"37bedd","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM"],"LapTimes":["NaT","138.752","NaT","NaT","115.429","114.61","114.705","115.328","116.42","121.128","129.727","113.956","115.027","115.335","114.516","114.63","115.459","115.06","115.534","116.255","115.742","115.649","115.912","116.102","116.118","120.055","128.062","113.055","114.027","114.426","114.667","113.935","113.955","113.989","114.044","114.348","114.253","114.234","114.189","114.091","114.512","114.711","114.46","114.256"]},"STR":{"Name":"Lance Stroll","Positions":[9,9,10,9,9,9,9,9,9,9,8,8,6,6,7,6,14,14,13,12,12,11,11,11,11,11,13,17,16,14,13,12,12,11,11,11,11,11,11,11,11,11,11,11,11],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"2d826d","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD"],"LapTimes":["NaT","142.601","NaT","NaT","114.921","115.579","114.698","115.305","116.013","116.802","115.941","116.688","115.892","116.948","120.62","127.929","113.961","114.071","114.744","115.696","114.58","114.852","115.291","116.263","116.232","120.327","130.036","113.008","112.88","113.083","114.181","114.026","NaT","113.939","114.109","114.27","114.122","114.431","114.13","114.142","114.465","114.868","114.223","114.76"]},"NOR":{"Name":"Lando Norris","Positions":[17,15,13,13,12,12,12,12,12,11,10,10,9,11,17,15,13,13,14,13,13,13,12,12,12,12,9,9,10,12,15,13,13,12,12,12,12,12,12,12,12,12,12,12,12],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"f58020","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM"],"LapTimes":["NaT","144.247","NaT","NaT","115.401","115.662","115.792","116.433","115.516","116.133","116.091","116.673","120.657","129.629","114.171","113.387","113.921","115.419","114.591","115.725","115.752","115.251","114.742","115.43","116.143","115.731","114.98","115.916","118.878","128.261","111.678","112.418","113.432","113.989","114.165","114.184","114.369","114.327","114.26","114.318","114.497","114.749","115.015","114.757"]},"TSU":{"Name":"Yuki Tsunoda","Positions":[0,18,16,16,15,14,14,14,15,15,15,13,12,9,8,7,7,7,10,17,16,16,16,15,15,15,14,12,11,10,11,15,15,14,14,14,14,14,14,14,14,13,14,14,13],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"4e7c9b","Compounds":["HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM"],"LapTimes":["NaT","149.823","NaT","NaT","114.967","115.724","115.771","116.983","116.9","117.09","116.56","115.75","116.064","115.584","115.127","116.671","115.621","119.545","135.802","113.929","114.302","114.179","113.793","113.82","114.55","114.252","113.928","113.944","114.059","117.806","128.656","112.436","112.677","112.593","113.291","113.699","114.075","114.483","114.362","114.333","113.988","115.42","114.684","113.864"]},"ZHO":{"Name":"Guanyu Zhou","Positions":[18,16,14,14,13,13,13,13,13,14,14,12,11,8,10,17,15,15,15,14,14,14,13,13,13,13,10,11,13,16,14,14,14,13,13,13,13,13,13,13,13,14,13,13,14],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"b12039","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT"],"LapTimes":["NaT","145.82","NaT","NaT","115.321","115.707","115.884","116.44","117.715","116.977","115.378","116.36","115.991","119.834","129.502","112.748","112.917","114.301","114.712","115.454","115.964","115.375","114.831","115.243","116.121","116.283","116.725","119.296","128.058","112.317","113.345","112.375","112.937","113.614","114.219","114.37","114.44","114.485","114.321","114.164","114.997","114.554","114.843","115.387"]},"RIC":{"Name":"Daniel Ricciardo","Positions":[7,6,6,6,6,7,8,8,8,8,7,7,8,15,13,12,11,11,11,10,10,10,10,10,10,10,8,8,8,9,9,9,10,15,15,15,15,15,15,15,15,15,15,15,15],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0,44.0],"TeamColor":"f58020","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM"],"LapTimes":["NaT","138.591","NaT","NaT","115.095","116.283","114.4","115.551","115.868","116.847","115.718","120.518","128.049","115.509","116.459","114.234","114.129","114.571","115.316","115.541","115.879","115.6","115.906","116.214","116.056","116.162","114.526","114.583","115.575","115.04","115.07","119.059","127.783","113.08","113.528","113.688","113.878","114.036","114.013","114.337","114.405","115.078","114.828","115.095"]},"MAG":{"Name":"Kevin Magnussen","Positions":[12,11,11,10,10,10,10,11,11,12,13,16,18,18,18,16,16,16,16,15,15,15,15,14,14,14,15,14,18,18,18,16,16,16,16,16,16,16,16,16,16,16,16,16],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0],"TeamColor":"b6babd","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM"],"LapTimes":["NaT","142.27","NaT","NaT","115.521","115.439","116.214","116.73","117.616","117.228","121.489","131.935","114.773","114.434","114.5","115.273","114.454","115.134","115.386","115.496","115.584","116.301","115.601","115.714","115.919","116.732","120.4","127.345","113.332","114.041","113.636","114.235","114.262","114.369","113.974","114.147","114.187","114.132","114.069","114.031","114.316","114.628","116.391"]},"MSC":{"Name":"Mick Schumacher","Positions":[19,17,15,15,14,16,18,18,18,18,17,15,15,13,16,18,17,17,17,16,17,17,17,16,17,17,17,15,15,15,16,18,18,18,17,17,17,17,17,17,17,17,17,17],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0],"TeamColor":"b6babd","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM"],"LapTimes":["NaT","147.169","NaT","NaT","116.895","117.07","115.507","116.686","117.022","117.466","116.932","117.216","117.907","123.227","129.716","114.167","113.911","115.217","115.443","116.057","114.706","114.809","114.906","115.862","115.36","115.521","115.06","116.598","116.333","119.187","129.597","112.212","112.922","113.468","112.646","113.28","112.913","113.302","112.851","113.291","113.37","115.762","115.558"]},"LAT":{"Name":"Nicholas Latifi","Positions":[11,12,18,18,18,18,17,17,17,17,16,14,14,12,11,14,18,18,18,18,18,18,18,18,18,18,18,18,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18],"Laps":[0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0],"TeamColor":"37bedd","Compounds":["MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","MEDIUM","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","HARD","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT","SOFT"],"LapTimes":["NaT","NaT","NaT","NaT","115.344","115.363","115.404","116.572","117.065","117.249","116.703","116.711","117.784","117.194","122.821","130.889","114.924","114.803","115.567","115.143","114.884","115.256","115.868","115.18","115.717","116.515","116.356","115.469","117.078","116.051","116.951","116.002","115.914","119.932","127.351","112.375","112.358","112.256","112.334","112.772","113.083","113.023","112.954"]},"BOT":{"Name":"Valtteri Bottas","Positions":[13,14],"Laps":[0,1.0],"TeamColor":"b12039","Compounds":["SOFT"],"LapTimes":["NaT"]},"HAM":{"Name":"Lewis Hamilton","Positions":[4,1],"Laps":[0,0.0],"TeamColor":"6cd3bf","Compounds":["MEDIUM"],"LapTimes":["NaT"]}}}

    return (
        <div>
            {/* <YearSelector setYear={setYear}></YearSelector> */}
            <LapChart lapData={testLapData.lapChartData} name={"Belgium 2022"}></LapChart>
        </div>


    )
}

export default DevPage
