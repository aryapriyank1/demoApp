import React, { useState } from 'react';
import Picture from './Picture';
import { useDrop } from 'react-dnd';
import './playground.css';

const PictureList = [
  {
    id: 1,
    text: 'firstName',
    url: './image-outline-filled.png'
  },
  {
    id: 2,
    text: 'lastName',
    url: './image-outline-filled.png'
  }
];

{
  /* <div className="play-row">
        <div className="column-left">
          <h1>Column Left</h1>
        </div>
        <div className="column-right">
          <h1>Column Right</h1>
        </div>
      </div> */
}

function PlayDragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <div className="play-row">
      <div className="column-left">
        <h1>Drag</h1>
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="column-right" ref={drop}>
        <h1>Drop</h1>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </div>
  );
}

export default PlayDragDrop;
