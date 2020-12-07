Highcharts.chart('graphic-3', {
    data: {
        table: 'dt-table'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'United States COVID-19 Cases and Deaths by State'
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Specimens'
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    }
});