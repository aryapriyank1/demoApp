import React, {useState} from 'react';
import Header from '../components/MSPaint/Header';
import Container from '../components/MSPaint/Container';

function MSPaint() {
  const [utensil, SetUtensil] = useState({
    tool: "bucket",
    color: "black"
  })

  function handleUtensil(updateItem, keyHolder){
      const newUtensil={...utensil}
      if(updateItem === "eraser"){
          newUtensil["color"] = "white";
          newUtensil["tool"] = "brush";
          SetUtensil(newUtensil)
      } else {
          newUtensil[keyHolder] = updateItem.toLowerCase()
          SetUtensil(newUtensil)
      }
      console.log(newUtensil)
  }

  return (
      <>
          <Header handleUtensil = {handleUtensil}/>
          <Container utensil = {utensil}/>
      </>
  );
}

export default MSPaint;