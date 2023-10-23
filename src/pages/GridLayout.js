import React from 'react';
import AddRemoveLayout from '../components/GridLayout/AddRemoveLayout';
import makeAddLayout from './../components/GridLayout/test-hook-add';

function GridLayout() {
  const AddLayout = makeAddLayout(AddRemoveLayout);
  return (
    <div className="gridlayout">
      <AddLayout />
    </div>
  );
}

export default GridLayout;
