import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; 

function ChartComponent({ expenses }) {
const chartRef = useRef(null);
let myChart = null; 

useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (myChart) {
    myChart.destroy();
    }

    myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
        label: 'Expenses',
        data: expenses.map(expense => expense.amount), 
// Assuming expenses is an array of objects with amount property
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });

    // Clean up: Destroy chart when component unmounts
    return () => {
    myChart.destroy();
    };
}, [expenses]);

return (
    <div>
    <canvas ref={chartRef} />
    </div>
);
}

export default ChartComponent;
