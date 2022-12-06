import { useEffect, useState } from "react";
import { Scatter } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // need this import to fix "category is not a registered scale error"
import axios from "axios";

function Question3ScatterGraph(){

    // todo optimization: move this to a centralized config file to be used for other components
    const PORT = 4000; 
    const BASE_ROUTE = `http://localhost:${PORT}/api`;

    const ENDPOINT = "/question3";
    const DATA_SOURCE = `${BASE_ROUTE}${ENDPOINT}`;

    const TITLE = "Amount of Total Compensation Allocated to Retirement in Professional and Sub-Professional Engineering?";

    // Dummy data before fetching from backend
    const [chartData, setChartData] = useState({
        datasets: [
            {
              label: 'Data point',
              data: [],
              backgroundColor: 'rgba(255, 99, 132, 1)',
            },
          ],
    })

    // Call once to fetch and format data
    useEffect(() => {
        axios.get(DATA_SOURCE).then((response) => {
            console.log(response.data)
            setChartData(
                {
                    datasets: [
                      {
                        label: 'Data point',
                        data: response.data.datapoints,
                        backgroundColor: 'rgba(255, 99, 132, 1)',
                      },
                    ],
                }
            )
        })
    }, [])

    return (
        <div>
            <Scatter
                data={chartData}
                options={
                    {
                        plugins: {
                            title: {display: true, text: TITLE}
                        },
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: "Total Compensation in $"
                                },
                                min: 0
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: "Amount allocated to Retirement"
                                }
                            }
                        }
                    }
                }
            >

            </Scatter>
        </div>
    )
 
}

export default Question3ScatterGraph;