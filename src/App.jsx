import Card from './Card';
import { useState } from 'react';
import QuickNote from './QuickNote';

function App() {
  const projects = [
  {title: "Proiect 1", description: "Pagina personala cu HTML/CSS" },
  {title: "Proiect 2", description: "Pagina interactiva cu JavaScript"},
  {title: "Proiect 3", description: "Dashboard cu React"},
  {title: "Proiect 4", description: "Proiect interesant"},
  {title: "Proiect 5", description: "Proiect revolutionar"}
  ]
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Dashboard</h1>
      {projects.map(function(item, index) {
        return <Card key={index} title={item.title} description={item.description} />;
      })}
      <button onClick={() => setCount(count+1)}>Click</button>
      <button onClick={() => setCount(count-1)}>Anticlick</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Ai apasat de {count} ori</p>
      <QuickNote />
    </div>
  );
}

export default App;