var trace1 = {
  x: [1, 2, 3, 4, 5],
  y: [1, 6, 3, 6, 1],
  mode: 'markers+text',
  type: 'scatter',
  name: 'Team A',
  text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
  textposition: 'top center',
  textfont: {
    family:  'Raleway, sans-serif'
  },
  marker: { size: 12 }
};

var data = [trace1];

var layout = {
  xaxis: {
    // range: [ 0.2, 1.0 ]
    title: {
      text: "Facility"
    }
  },
  yaxis: {
//     range: [0, 1],
    title: {
      text: "Discrimination"
    }
  },
//   legend: {
//     y: 0.5,
//     yref: 'paper',
//     font: {
//       family: 'Arial, sans-serif',
//       size: 20,
//       color: 'grey',
//     }
//   },
//   title: {text: 'Data Labels on the Plot'}
};

Plotly.newPlot('scatter-plot-test', data, layout);
