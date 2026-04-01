import { Hello } from "./Hello";

export function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

// Se uso il componente Hello più volte, renderizza più volte tale componente, funziona
// Sì, funziona, sono indipendenti e riusabili
