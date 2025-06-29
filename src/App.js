
import { useNavigate } from 'react-router-dom'; //Huk ekak...url ekakata route karanna thama me react navigater eka use karanne
//onClick eken wene e button ek click karama apiwa eke tyna page ekta geniyanwa. e geniyanne useNavigate function eken
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wellcome New React Project</h1>
        <button className = 'user-button' onClick={() => navigate('/users')}>Users</button>
         
      </header>
    </div>
  );
}

export default App;
