// Sticky
const Sticky = require('sticky-js');
if(window.innerWidth > 992) {const sticky = new Sticky('[data-sticky]', {})};

// custom select
import NiceSelect from "../../node_modules/nice-select2/dist/js/nice-select2";
const select = document.querySelectorAll(".selectize");
select.forEach(select => {
    let instance = new NiceSelect(select);
});

// chart 4 
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const specialty = [
    {
        item: '掌握企業營運與交易法規',
        one: 3.2,
        two: 3.3,
        three: 3.4,
        four: 3.5
    },
    {
        item: '分析經營環境，擬定經營策略與模式',
        one: 2.9,
        two: 2.9,
        three: 2.9,
        four: 2.9
    },
    {
        item: '擬定行銷計畫及業務流程',
        one: 2.6,
        two: 2.7,
        three: 2.8,
        four: 2.9
    },
    {
        item: '訂立生產流程與作業計畫',
        one: 2.6,
        two: 2.7,
        three: 2.8,
        four: 2.9
    },
    {
        item: '規劃並執行人力資源管理',
        one: 2.35,
        two: 2.3,
        three: 2.25,
        four: 2.2
    },
    {
        item: '進行財務分析與管理',
        one: 2.05,
        two: 2.1,
        three: 2.15,
        four: 2.2
    },
    {
        item: '「企業經營管理 > 一般管理」平均數',
        one: 2.05,
        two: 2.1,
        three: 2.15,
        four: 2.2
    }
];

const specialtyData = {    
    labels: specialty.map(label => label.item),
    datasets: [
        {
            label: '110/04/22第一次',
            data: specialty.map(data => data.one),
            backgroundColor: ['#CBEBB7','#CBEBB7','#CBEBB7','#CBEBB7','#CBEBB7','#CBEBB7', '#DDDEDB'],
            borderWidth: 0
        },
        {
            label: '111/10/28第二次',
            data: specialty.map(data => data.two),
            backgroundColor: ['#9BD376','#9BD376','#9BD376','#9BD376','#9BD376','#9BD376', '#C4C6C3'],
            borderWidth: 0
        },
        {
            label: '112/07/26第三次',
            data: specialty.map(data => data.three),
            backgroundColor: ['#82C450','#82C450','#82C450','#82C450','#82C450','#82C450', '#A7A7A7'],
            borderWidth: 0
        },
        {
            label: '113/01/03第四次',
            data: specialty.map(data => data.four),
            backgroundColor: ['#71AD47','#71AD47','#71AD47','#71AD47','#71AD47','#71AD47', '#888B88'],
            borderWidth: 0
        }
    ],
};
// config
const specialtyConfig = {
    type: "bar",
    data: specialtyData,
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
                suggestedMax: 4,
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
const specialtyElement = document.querySelector('#specialtChart');
const specialtChart = new Chart(specialtyElement, specialtyConfig);