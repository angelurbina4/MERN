import React from 'react';
import PersonCard from './components/PersonCard/PersonCard';

class App extends React.Component {
  render() {
    return (
      <div className='container justify-content-center'>
        <PersonCard first_name="Walter" last_name="White" age="50" hairColor="dark brown"/>
        <PersonCard first_name="Jessy" last_name="Pikman" age="23" hairColor="dark brown"/>
        <PersonCard first_name="Soul" last_name="Goodman" age="50" hairColor="dark brown"/>
        <PersonCard first_name="Gus" last_name="Fring" age="55" hairColor="back"/>
      </div>
    );
  }
}

export default App;
