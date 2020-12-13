Highcharts.chart("graphic-1", {
    chart: {
         zoomType: 'x'
    },
    title: {
      text: "COVID-19 Combined U.S. Laboratories Reporting to CDC, March 1, 2020 - November 21, 2020",
    },
  
    subtitle: {
      text: "Source: Center for Disease Control and Prevention",
    },
  
    yAxis: {
      title: {
        text: "Number of Specimens",
      },
    },
  
    xAxis: {
      accessibility: {
        rangeDescription: "Range: 03/01/2020 to 11/21/2020 ",
      },
    },
  
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: March,
      },
    },
  
    series: [
      {
        name: "Specimens Tested",
        data: [8307,38232,87354,110083,659975,643008,651054,831012,997583,1168290,1431579,1739333,1732978,1944329,2143643,2440220,2892810,2849953,3146074,3116896,2804602,2599778,2502839,2450013,2436656,2255428,2291347,2158338,2498654,2583828,2583265,2924008,2854065,3011682,3176974,3505429,3846232,3769481],
      },
      {
        name: "Postive Cases",
        data: [980,3632,8037,14531,143875,137604,120445,127145,124698,113324,108800,111317,98780,106938,130762,192777,271924,276445,308315,277404,235587,192384,167690,147001,131579,126304,121441,107917,124933,134359,136913,163744,185514,216841,270043,378586,461548,399565],
      }
      
    ],
  
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 2000,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
  
