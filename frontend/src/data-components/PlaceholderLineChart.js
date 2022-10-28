import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // need this import to fix "category is not a registered scale error"

function PlaceholderLineChart(){
    // Data to be fetched from backend; currently only supporting 1 line in chart
    const [chartData, setChartData] = useState({
        title: "need title",
        description: "need description",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        data: [33, 53, 85, 41, 44, 65]
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

    useEffect(() => {
        setChartInput(
            {
                labels: chartData.labels,
                datasets: [{
                    label: chartData.description,
                    data: chartData.data,
                    fill: true,
                    borderColor: "rgba(75,192,192,1)",
                    backgroundColor: "rgba(75,192,192,0.2)",
                    tension: 0.1
                }]
            }
        )
    }, [chartData])

    return (
        <div>
            <Line
                data={chartInput}
                options={
                    {plugins: {
                        title: {display: true, text: chartData.title}
                    }}
                }
            >

            </Line>
        </div>
    )
 
}

export default PlaceholderLineChart;