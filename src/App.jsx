import React, { useState } from 'react';

function App() {
  const [packlist, setPacklist] = useState([
    { name: "clothes", ispacked: false },
    { name: "toothbrush", ispacked: false },
    { name: "laptop", ispacked: true },
    { name: "passport", ispacked: true },
  ]);

  const ItemPacked = (x) => {
    const updatedPacklist = [...packlist];
    updatedPacklist[x].ispacked = !updatedPacklist[x].ispacked;
    setPacklist(updatedPacklist);
  };

  return (
    <ul>
      {packlist.map((item, x) => (
        <li key={x}>
          <label>
            <input
              type="checkbox"
              checked={item.ispacked}
              onChange={() => ItemPacked(x)}
            />
            {item.ispacked ? <del>{item.name} &#10003;</del> : item.name}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default App;
