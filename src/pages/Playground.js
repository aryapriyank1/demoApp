import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';
import PlayDragDrop from '../components/Playground/PlayDragDrop.js';

function Playground() {
  return (
    <>
      <DndProvider backend={Backend}>
        <PlayDragDrop />
      </DndProvider>
    </>
  );
}

export default Playground;
