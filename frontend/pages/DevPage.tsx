import YearSelector from "./components/YearSelector";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import LapChart from './components/LapChart';

const DevPage: NextPage = () => {
    const [year, setYear] = useState(0);
    const [events, setEvents] = useState([]);
    const [raceData, setRaceData] = useState({})
    const axios = require("axios").default;

    const getEventsByYear = useCallback(() => {
        axios
            .get(
                `/api/events/?year=${year}`,
            )
            .then(function (response: any) {
                setEvents(response.data);
            })
            .catch(function (error: any) {
                setEvents([]);
                console.error("Unable to get events for: ", year, error);
            });
    }, [axios, year]);
    useEffect(() => {
        if (year === 0) {
            return;
        }
        getEventsByYear();
    }, [year, getEventsByYear]);

    useEffect(() => {
        if (year === 0) {
            //TODO: this will be used when setting year via url query
            return;
        }
        //TODO: setevents
    }, [events, year]);

    axios.get('/api/raceLapChart/?year=2022&event=Belgium')
        .then(
            function (response: any) {
                setRaceData(response.data)
                console.log("got data", response);

            }
        )
        .catch(function (error: any) {
            setRaceData({});
            console.error('Unable to get dummy race data')
        });


    return (
        <div>
            {/* <YearSelector setYear={setYear}></YearSelector> */}
            <LapChart lapData={raceData?.lapChartData} name={"Belgium 2022"}></LapChart>
        </div>
    );
};

export default DevPage;
