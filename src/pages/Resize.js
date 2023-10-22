import React from 'react';
import { Rnd as ReactRnd } from 'react-rnd';
import Panel from '../components/Resize/Panel';

function Resize() {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: '#f0f0f0'
  };
  return (
    <>
      <ReactRnd
        style={style}
        default={{
          x: 300,
          y: 400,
          width: 320,
          height: 200
        }}
        minHeight={50}
        minWidth={50}
        maxHeight={500}
        maxWidth={500}>
        Test
      </ReactRnd>
      <Panel>content</Panel>
    </>
  );
}

export default Resize;
