Highcharts.chart('graphic-2', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Number of COVID-19 positive  cases recorded as of November 25, 2020'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Age Brackets',
        colorByPoint: true,
        data: [{
            name: '0-4 years',
            y: 1.47           
        }, {
            name: '5-17 years',
            y: 7.40
        }, {
            name: '18-49 years',
            y: 57.07
        }, {
            name: '50-64 years',
            y: 20.75
        }, {
            name: '65+ years',
            y: 13.32
        }]
    }]
});