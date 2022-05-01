import React from 'react';
import PersonCard from './components/PersonCard/PersonCard';
import PersonCardFuncional from './components/PersonCardFuncional/PersonCardFuncional';

class App extends React.Component {
  render() {
    return (
      <div className='container justify-content-center'>
        <PersonCard first_name="Walter" last_name="White" age="50" hairColor="dark brown"/>
        <PersonCard first_name="Jessy" last_name="Pikman" age="23" hairColor="dark brown"/>
        <PersonCard first_name="Soul" last_name="Goodman" age="50" hairColor="dark brown"/>
        <PersonCard first_name="Gus" last_name="Fring" age="55" hairColor="back"/>
        <PersonCardFuncional first_name="Walter Funcional" last_name="White" age="50" hairColor="dark brown"/>
        <PersonCardFuncional first_name="Jessy Funcional" last_name="Pikman" age="23" hairColor="dark brown"/>
        <PersonCardFuncional first_name="Soul Funcional" last_name="Goodman" age="50" hairColor="dark brown"/>
        <PersonCardFuncional first_name="Gus Funcional" last_name="Fring" age="55" hairColor="back"/>
      </div>
    );
  } Funcional
}

export default App;
