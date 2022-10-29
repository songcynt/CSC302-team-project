import React from 'react';
import ResponsiveGridLayout from 'react-grid-layout';
import Paper from '@mui/material/Paper';

function DashboardGridLayout(){
  const layout = [
    { i: "1", x: 0, y: 0, w: 3, h: 3},
    { i: "2", x: 3, y: 0, w: 3, h: 3},
    { i: "3", x: 6, y: 0, w: 3, h: 3}
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layout={layout}
      isResizable={true}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      
      <div key="1">
        <Paper>Placeholder A</Paper>
      </div>
      <div key="2">
        <Paper>Placeholder B</Paper>
      </div>
      <div key="3">
        <Paper>Placeholder C</Paper>
      </div>
    </ResponsiveGridLayout>
  );
}

export default DashboardGridLayout;