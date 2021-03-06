import React from 'react';

const CharComponent = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }
  return (
    <div onClick={props.clicked} style={style}>
      <p>{props.letter}</p>
    </div>
  );
};

export default CharComponent;