import { useState, useEffect } from "react";
import styles from "./BarChart.module.css";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
        useEffect(() => {
            setChartData({
                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                datasets: [
                    {
                        label: 'Sales $',
                        data: [15323, 19213, 12124, 17423, 19213, 23214, 12142],
                        borderColor: 'rgb(232, 232, 232)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)'
                    }
                ]
            })


            setChartOptions({
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: "Daily Revenue"
                    }
                },
                maintainAspectRatio: false,
                responsive: true
            })

    }, [])

    return (
        <>
        <div className={styles.container}>
            <Bar data={chartData} options={chartOptions}/>
        </div>
        </>
    )
}