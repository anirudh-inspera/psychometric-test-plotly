var exposedTrace = {
  x: ['1', '2', '3', '4', '5', '6', '7' ,'8', '9', '10'],
  y: [550, 520, 520, 520, 520, 520, 520, 510, 510, 510],
  name: 'Exposed',
  type: 'bar',
  marker: {
    color: 'blue'
  },
};

var answeredTrace = {
  x: ['1', '2', '3', '4', '5', '6', '7' ,'8', '9', '10'],     
  y: [530, 500, 500, 500, 500, 500, 500, 490, 490, 490],
  name: 'Answered',
  type: 'bar',
  marker: {
    color: 'green'
  },
};

var omittedTrace = {
  x: ['1', '2', '3', '4', '5', '6', '7' ,'8', '9', '10'],
  y: [0, 0, 0, 0, 15, 15, 15, 14, 14, 14],
  name: 'Omitted',
  type: 'bar',
  marker: {
    color: 'orange'
  },
};

var unexposedTrace = {
  x: ['1', '2', '3', '4', '5', '6', '7' ,'8', '9', '10'],
  y: [11, 11, 12, 14, 15, 15, 25, 24, 24, 24],
  name: 'Unexpected',
  type: 'bar',
  marker: {
    color: 'red'
  },
};

var data = [exposedTrace, answeredTrace, omittedTrace, unexposedTrace];

var layout = {
    barmode: 'group',
    xaxis: {
        title: {
            text: 'Question Number',
        }
    }
};

Plotly.newPlot('grouped-bar-chart-test', data, layout);


