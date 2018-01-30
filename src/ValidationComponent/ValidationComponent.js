import React from 'react';

const ValidationComponent = (props) => {
  const minVal = 8;
  let validationShown = null;
  if (props.termlength >= minVal) {
    validationShown = (
      <p>Text long enough!</p>
    );
  } else {
    validationShown = (
      <p>Text too short :(</p>
    );
  }

  return (
    <div>
      {validationShown}
    </div>
  );
};

export default ValidationComponent;