import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Welcome name="Davide" age={36} />
    </div>
  );
}

// Se uso il componente Hello più volte, renderizza più volte tale componente, funziona
// Sì, funziona, sono indipendenti e riusabili
