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
      <Person name='Rubel' nayika = 'Mousumi'></Person>
      <Person name = "Bappa Raz" nayika = 'Cheka'></Person>
      <Person name = 'Kuber' nayika ='Kopila'></Person>
      <h5>New Component</h5>
      <p>Rock mama, React mama</p>
      <Friend phone = '015487544'></Friend>
      <Friend phone = '01459875'></Friend>

    </div>
  );
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>;
      <p>Nayika:{props.nayika}</p>;
  </div>
  )
};

function Friend(props){
  console.log(props);
  return(
    <div className='container'>
      <h3>Name: Ajay Devgan</h3>
      <p>Number: {props.phone}</p>
    </div>
  )
};


export default App;
