import './App.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">

      {/* Header with the title "FIFA Player Cards" */}
      <h1 style={{ color: 'gold', textShadow: '4px 6px 6px  (1)', fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", margin: '5px' }}>FIFA Player Cards</h1>

       {/* Component that displays the list of players */}
      <PlayersList />
    </div>
  );
}

export default App;
