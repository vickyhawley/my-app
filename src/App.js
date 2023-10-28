import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{background: 'black', height: '100vh'}}>
      
      <div style={{padding: '10%', background: 'black'}}>
      <h1 style={{color: 'white'}}>Example Flipbook</h1>
      <iframe src="https://publuu.com/flip-book/282983/660819/page/1?embed" width="100%" height="580" scrolling="no" frameborder="0" allowfullscreen="" allow="clipboard-write" class="publuuflip"></iframe>
      </div>
    </div>
  );
}

export default App;
