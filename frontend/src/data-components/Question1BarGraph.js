import { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // need this import to fix "category is not a registered scale error"
import axios from "axios";

function Question1BarGraph(){

    // todo optimization: move this to a centralized config file to be used for other components
    const PORT = 4000; 
    const BASE_ROUTE = `http://localhost:${PORT}/api`;

    const ENDPOINT = "/question1";
    const DATA_SOURCE = `${BASE_ROUTE}${ENDPOINT}`;

    const TITLE = "What’s the correlation between salary and department or industry of work?";

    // Expected label descriptions
    const DATA_DESCRIPTION = ["department"];

    // Dummy data before fetching from backend
    const [chartData, setChartData] = useState({
        labels: ["fetching data"],
        data: [1]
    })

    // Data to go into chart component
    const [chartInput, setChartInput] = useState(
        {
            labels: [],
            datasets: [{
              label: 'Placeholder label',
              data: [],
              fill: true,
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
              tension: 0.1
            }]
        }
    )

    // Set correct input data after data's fetched
    useEffect(() => {
        setChartInput(
            {
                labels: chartData.labels,
                datasets: [{
                    label: DATA_DESCRIPTION[0],
                    data: chartData.data,
                    fill: true,
                    borderColor: "rgba(75,192,192,1)",
                    backgroundColor: "rgba(75,192,192,0.2)",
                    tension: 0.1
                }]
            }
        )
    }, [chartData])

    // Call once to fetch and format data
    useEffect(() => {
        axios.get(DATA_SOURCE).then((response) => {
            setChartData(
                {
                    labels: response.data.departments,
                    data: response.data.salaries
                }
            )
        })
    }, [])

    return (
        <div>
            <Bar
                data={chartInput}
                options={
                    {plugins: {
                        title: {display: true, text: TITLE}
                    }}
                }
            >
            </Bar>
        </div>
    )
 
}

export default Question1BarGraph;