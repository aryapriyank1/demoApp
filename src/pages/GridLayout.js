import React from 'react';
// import NoCompactingLayout from '../components/GridLayout/NoCompactingLayout';
// import makeNoCompactLayout from './../components/GridLayout/test-hook';
import AddRemoveLayout from '../components/GridLayout/AddRemoveLayout';
import makeAddLayout from './../components/GridLayout/test-hook-add';

function GridLayout() {
  const AddLayout = makeAddLayout(AddRemoveLayout);
  return (
    <div className="gridlayout">
      <AddLayout />
    </div>
  );

  // const NoCompactLayout = makeNoCompactLayout(NoCompactingLayout);
  // return (
  //   <div className="gridlayout">
  //     <NoCompactLayout />
  //   </div>
  // );
}

export default GridLayout;
