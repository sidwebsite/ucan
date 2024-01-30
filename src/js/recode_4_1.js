// Sticky
const Sticky = require('sticky-js');
if(window.innerWidth > 992) {const sticky = new Sticky('[data-sticky]', {})};
// chart 4 
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// 16種職涯類型歷次診斷分數
const careerType = [
    {
        professionType: '建築營造',
        one: 3.2,
        two: 3.3,
        three: 3.4,
        four: 3.5
    },
    {
        professionType: '天然資源、食品與農業',
        one: 2.9,
        two: 2.9,
        three: 2.9,
        four: 2.9
    },
    {
        professionType: '藝文與影音傳播',
        one: 2.6,
        two: 2.7,
        three: 2.8,
        four: 2.9
    },
    {
        professionType: '企業經營管理',
        one: 2.6,
        two: 2.7,
        three: 2.8,
        four: 2.9
    },
    {
        professionType: '教育與訓練',
        one: 2.35,
        two: 2.3,
        three: 2.25,
        four: 2.2
    },
    {
        professionType: '金融財務',
        one: 2.05,
        two: 2.1,
        three: 2.15,
        four: 2.2
    },
    {
        professionType: '政府公共事務',
        one: 2.05,
        two: 2.1,
        three: 2.15,
        four: 2.2
    },
    {
        professionType: '醫療保健',
        one: 2.05,
        two: 2.1,
        three: 2.15,
        four: 2.2
    },
    {
        professionType: '個人及社會服務',
        one: 2.05,
        two: 2.1,
        three: 2.15,
        four: 2.2
    },
    {
        professionType: '休閒與觀光旅遊',
        one: 3,
        two: 3.2,
        three: 3.4,
        four: 3
    },
    {
        professionType: '資訊科技',
        one: 2.8,
        two: 2.85,
        three: 2.9,
        four: 2.95
    },
    {
        professionType: '司法、法律與公共安全',
        one: 2.6,
        two: 2.55,
        three: 2.5,
        four: 2.45
    },
    {
        professionType: '行銷與銷售',
        one: 2.6,
        two: 2.7,
        three: 2.8,
        four: 2.9
    },
    {
        professionType: '製造',
        one: 2.35,
        two: 2.4,
        three: 2.45,
        four: 2.5
    },
    {
        professionType: '科學、技術、工程、數學',
        one: 2.6,
        two: 2.7,
        three: 2.8,
        four: 2.9
    },
    {
        professionType: '物流運輸',
        one: 2.35,
        two: 2.45,
        three: 2.55,
        four: 2.65
    }
];
const careerTypeData = {    
    labels: careerType.map(label => label.professionType),
    datasets: [
        {
            label: '110/04/22第一次',
            data: careerType.map(data => data.one),
            backgroundColor: '#BBE2F4',
            borderWidth: 0
        },
        {
            label: '111/10/28第二次',
            data: careerType.map(data => data.two),
            backgroundColor: '#93CAE2',
            borderWidth: 0
        },
        {
            label: '112/07/26第三次',
            data: careerType.map(data => data.three),
            backgroundColor: '#62B0D1',
            borderWidth: 0
        },
        {
            label: '113/01/03第四次',
            data: careerType.map(data => data.four),
            backgroundColor: '#4C97B7',
            borderWidth: 0
        }
    ],
};
// config
const careerTypeConfig = {
    type: "bar",
    data: careerTypeData,
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
const careerTypeElement = document.querySelector('#careerTypeChart');
const careerTypeChart = new Chart(careerTypeElement, careerTypeConfig);

// 職業性格歷次診斷分數
const professionalCharacter = [
    {
        type: '實用型 R',
        one: 4,
        two: 5,
        three: 4,
        four: 3
    },
    {
        type: '研究型 I',
        one: 3,
        two: 3,
        three: 4,
        four: 3
    },
    {
        type: '藝術型 A',
        one: 5,
        two: 4,
        three: 4,
        four: 5
    },
    {
        type: '社會型 S',
        one: 9,
        two: 8,
        three: 9,
        four: 9
    },
    {
        type: '企業型 E',
        one: 3,
        two: 4,
        three: 5,
        four: 5
    },
    {
        type: '事務型 C',
        one: 6,
        two: 6,
        three: 7,
        four: 8
    }
];
const professionalCharacterChartData = {    
    labels: professionalCharacter.map(label => label.type),
    datasets: [
        {
            label: '110/04/22第一次',
            data: professionalCharacter.map(data => data.one),
            backgroundColor: '#FFF2CC',
            borderWidth: 0
        },
        {
            label: '111/10/28第二次',
            data: professionalCharacter.map(data => data.two),
            backgroundColor: '#FFE698',
            borderWidth: 0
        },
        {
            label: '112/07/26第三次',
            data: professionalCharacter.map(data => data.three),
            backgroundColor: '#FFD966',
            borderWidth: 0
        },
        {
            label: '113/01/03第四次',
            data: professionalCharacter.map(data => data.four),
            backgroundColor: '#FFC001',
            borderWidth: 0
        }
    ],
};

const professionalCharacterConfig = {
    type: "bar",
    data: professionalCharacterChartData,
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
                    stepSize: 1,
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
const professionalCharacterChartElement = document.querySelector('#professionalCharacterChart');
const professionalCharacterChart = new Chart(professionalCharacterChartElement, professionalCharacterConfig);