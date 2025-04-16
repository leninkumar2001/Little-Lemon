import React from 'react';
import ReservationForm from './ReservationForm';

function App() {
  return (
    <main>
      <header>
        <h1>Little Lemon</h1>
      </header>
      <ReservationForm />
      <footer>
        <p>&copy; {new Date().getFullYear()} Little Lemon</p>
      </footer>
    </main>
  );
}

export default App;
