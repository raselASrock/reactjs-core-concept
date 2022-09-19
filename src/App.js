import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name: 'Dr. Mahfuzur Rahman', job: 'Singer' };
const singer2 = {name: 'Eva Rahman', job: 'Singer2'};
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person(){
  return (
    <div>
      <h1>Sakib Al Hasan</h1>;
      <p>Profession: Cricket</p>;
  </div>
  )
}


export default App;
