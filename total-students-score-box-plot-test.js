const studentScores = Array.apply(null, Array(100)).map(() => Math.floor(Math.random() * 100))

const min = 0;
const q1 = 19.5;
const q2 = 47.5;
const q3 = 75;
const max = 99;

const scoreBoxPlotTrace = {
    y: [min, q1, q1, q2, q3, q3, max],
    type: 'box'
};

const boxPlotData = [scoreBoxPlotTrace];

Plotly.newPlot('total-students-score-box-plot-test', boxPlotData);
