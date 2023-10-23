import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';
import Example from '../components/DragDrop/example';
import '../components/DragDrop/styles.css';

function DragDrop() {
  return (
    <>
      <DndProvider backend={Backend}>
        <Example />
      </DndProvider>
    </>
  );
}

export default DragDrop;
