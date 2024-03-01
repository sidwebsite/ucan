// Sticky
const Sticky = require('sticky-js');
if(window.innerWidth > 992) {const sticky = new Sticky('[data-sticky]', {})};

// chart 4 
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const common = [
    {
        type: '自律當責',
        one: 3.2,
        two: 3.3,
        three: 3.4,
        four: 3.5
    },
    {
        type: '問題解決',
        one: 2.9,
        two: 2.9,
        three: 2.9,
        four: 2.9
    },
    {
        type: '團隊合作',
        one: 2.6,
        two: 2.7,
        three: 2.8,
        four: 2.9
    },
    {
        type: '人際互動',
        one: 2.6,
        two: 2.7,
        three: 2.8,
        four: 2.9
    },
    {
        type: '溝通表達',
        one: 2.35,
        two: 2.3,
        three: 2.25,
        four: 2.2
    },
    {
        type: '創新思維',
        one: 2.05,
        two: 2.1,
        three: 2.15,
        four: 2.2
    },
    {
        type: '持續學習',
        one: 2.05,
        two: 2.1,
        three: 2.15,
        four: 2.2
    },
    {
        type: '數位能力',
        one: 2.05,
        two: 2.1,
        three: 2.15,
        four: 2.2
    },
    {
        type: '多元共融',
        one: 2.05,
        two: 2.1,
        three: 2.15,
        four: 2.2
    }
];

const commonData = {    
    labels: common.map(label => label.type),
    datasets: [
        {
            label: '110/04/22第一次',
            data: common.map(data => data.one),
            backgroundColor: '#DAD1F4',
            borderWidth: 0
        },
        {
            label: '111/10/28第二次',
            data: common.map(data => data.two),
            backgroundColor: '#C1B2EB',
            borderWidth: 0
        },
        {
            label: '112/07/26第三次',
            data: common.map(data => data.three),
            backgroundColor: '#9D8AD3',
            borderWidth: 0
        },
        {
            label: '113/01/03第四次',
            data: common.map(data => data.four),
            backgroundColor: '#8674B9',
            borderWidth: 0
        }
    ],
};
// config
const commonConfig = {
    type: "bar",
    data: commonData,
    options: {
        categoryPercentage: 0.8,
        barPercentage: 1,
        indexAxis: 'y',
        scales: {
            y: {
                grid: {
                    display: false
                }
            },
            x: {
                beginAtZero: true,
                suggestedMax: 5,
                ticks: {
                    stepSize: 0.5,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'right',
            },
            datalabels: {
                color: '#6B6B6B',
                anchor: 'end',
                align: 'right',
            }
        }
    },
    plugins: [ChartDataLabels],
};
const commonElement = document.querySelector('#commonChart');
const commonChart = new Chart(commonElement, commonConfig);