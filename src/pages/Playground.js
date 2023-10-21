import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';
import { Rnd as ReactRnd } from 'react-rnd';
import Example from '../components/Playground/example';
import '../components/Playground/styles.css';

function Playground() {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: '#f0f0f0'
  };

  return (
    <>
      <DndProvider backend={Backend}>
        <Example />
      </DndProvider>
      <ReactRnd
        style={style}
        default={{
          x: 300,
          y: 300,
          width: 320,
          height: 200
        }}
        minHeight={50}
        minWidth={50}
        maxHeight={500}
        maxWidth={500}>
        Test
      </ReactRnd>
    </>
  );
}

export default Playground;
