import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
      <div class="controls">
      <button id="cardnew" class="button">add clone card</button>
      <button id="cardtitle" class="button">change clone title</button>
      <button id="cardbg" class="button">toggle clone bg color</button>
      <button id="carddel" class="button">delete newest clone</button>
    </div>
    <div id="cards" class="cards">
      <div id="card" class="card">
        <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" id="image" />
        <h2 id="title">Placeholder Card</h2>
        <p id="description">placeholder card description</p>
        <button id="details" class="button">details</button>
      </div>
    </div>
  </div>
  );
}

export default App;
