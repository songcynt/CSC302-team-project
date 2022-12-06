import React from 'react';
import ResponsiveGridLayout from 'react-grid-layout';
import Paper from '@mui/material/Paper';
import Question2ChartGraph from '../data-components/Question2ChartGraph';
import Question1BarGraph from '../data-components/Question1BarGraph';
import Question3ScatterGraph from '../data-components/Question3ScatterGraph';

function DashboardGridLayout(){
  const layout = [
    { i: "1", x: 3, y: 0, w: 10, h: 5},
    { i: "2", x: 3, y: 10, w: 10, h: 5},
    { i: "3", x: 3, y: 10, w: 10, h: 5},
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layout={layout}
      isResizable={true}
      cols={12}
      rowHeight={100}
      width={1200}
    >
      
      <div key="1">
        <Paper>
          <Question1BarGraph/>
        </Paper>
      </div>
      <div key="2">
        <Paper>
          <Question2ChartGraph/>
        </Paper>
      </div>
      <div key="3">
        <Paper>
          <Question3ScatterGraph/>
        </Paper>
      </div>
    </ResponsiveGridLayout>
  );
}

export default DashboardGridLayout;