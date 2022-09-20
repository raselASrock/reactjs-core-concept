import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  {name: 'Dr. Mahfuzur Rahman', job: 'Singer' },
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Jamil Rahman', job: 'Singer2'},
  {name: 'Kamil Rahman', job: 'Singer2'},
];
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'BappaDADA', 'Kuber', 'jasim', 'salmanshah', 'Razzak', 'Anwar']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name = {nayok}></Person>)
      }
      {
        singers.map(singer => <Person name = {singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika = 'Mousumi'></Person>
      <Person name = {nayoks[1]} nayika = 'Cheka'></Person>
      <Person name = {nayoks[2]} nayika ='Kopila'></Person> */}
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
