import React from 'react';

export function OtherData() {
  const [name, setName] = React.useState('Rahul');

  function handleClick() {
    setName('Palamarthi');
  }

  return (
    <div>
      <p>this is a react component {name}</p>
      <button type='button' onClick={handleClick}>
        Change name
      </button>
    </div>
  );
}
