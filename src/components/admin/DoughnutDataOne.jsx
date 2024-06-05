import React from 'react';
import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
Chart.defaults.plugins.legend.position = 'right';
Chart.defaults.plugins.legend.title.display = true;
Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: function (chart) {
    const width = chart.width;
    const height = chart.height;
    const ctx = chart.ctx;
    ctx.restore();
    const fontSize = (height / 800).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = 'middle';

    const text = '81%';
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
};

const options = {
  layout: {
    padding: 0 // Remove padding around the chart
  },
  plugins: {
    legend: {
      display: false // Hides the legend labels
    },
    tooltip: {
      callbacks: {
        label: function() {
          return ''; // Hides the tooltip labels
        }
      }
    }
  }
};


const data = {
  labels: [
    'processed',
    'pending'
  ],
  datasets: [{
    data: [81,19],
    backgroundColor: [
      'rgb(0, 197, 0)',
      'rgb(204, 223, 243)'
    ],
    borderWidth: 2,
    radius: '10%'   
  }]
};

function DoughnutDataOne() {
  return (
    <div className="p-0" style={{ width: '500px', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <Doughnut data={data}  options={options} plugins={[centerTextPlugin]}/>
    </div>
  );
}

export default DoughnutDataOne;