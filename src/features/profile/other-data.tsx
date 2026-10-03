import { useState } from 'preact/hooks';

export function OtherData() {
  const [name, setName] = useState('Rahul');

  function handleChange() {
    setName('Palamarthi');
  }

  return (
    <div>
      <p>My name is {name}</p>
      <button type='button' onClick={handleChange}>
        Change name
      </button>
    </div>
  );
}
