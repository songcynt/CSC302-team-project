import React from 'react';
import ResponsiveGridLayout from 'react-grid-layout';
import Paper from '@mui/material/Paper';
import PlaceholderLineChart from '../data-components/PlaceholderLineChart';
import Question1BarGraph from '../data-components/Question1BarGraph';

function DashboardGridLayout(){
  const layout = [
    { i: "1", x: 0, y: 0, w: 8, h: 4},
    { i: "2", x: 0, y: 10, w: 8, h: 4},
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
          <PlaceholderLineChart/>
        </Paper>
      </div>
    </ResponsiveGridLayout>
  );
}

export default DashboardGridLayout;