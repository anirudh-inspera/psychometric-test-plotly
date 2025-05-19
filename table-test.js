var values = [
  [34258970, 34258971, 34258972, 34258973, 34258974, 34258975, 34258976, 34258977, 34258978, 34258979],
  [0, 0, 0, 0, 0, 0, 3, 8, 10, 11]
];

data = [{
  type: 'table',
  header: {
    values: ['<b>User ID</b>', '<b>Total Score</b>']
  },
  cells: {
    values: values,
    align: ['center', 'right'],
  }
}]

Plotly.newPlot('table-test', data);


