import React from 'react';
import NoCompactingLayout from '../components/GridLayout/NoCompactingLayout';
import makeLayout from '../components/GridLayout/test-hook';

function GridLayout() {
  const Layout = makeLayout(NoCompactingLayout);
  return (
    <div className="gridlayout">
      <Layout />
    </div>
  );
}

export default GridLayout;
