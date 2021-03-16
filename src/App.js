import React from 'react';
import Group from './components/Group';
import GroupInput from './components/GroupInput';
import Result from './components/Result';

const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const App = () => {

  // 2-dimensions array
  const [ groups, setGroups ] = React.useState([]);
  const [ groupIndex, setGroupIndex ] = React.useState(1);
  const [ teams, setTeams ] = React.useState([]);

  React.useEffect(() => {
    console.log(teams);
  }, [teams]);

  const addPlayers = (players) => {
    setGroups([...groups, players]);
    setGroupIndex(groupIndex + 1);
  }

  const shuffle = () => {
    let team1 = [];
    let team2 = [];

    for (let item of groups) {
      const group = [...item];
      while (group.length > 0) {
        let index = group.length === 1 ? 0 : randomInt(0, group.length - 1);
        let team = team1.length < team2.length ? team1 : team2;
        team.push(group[index]);
        group.splice(index, 1);
      }
    }

    setTeams([team1, team2]);
  }

  const reset = () => {
    setGroups([]);
    setGroupIndex(1);
    setTeams([]);
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>Team Shuffler</h1>
        </header>
        <GroupInput groupIndex={ groupIndex } onAddPlayers={ addPlayers } />
        <div className="groups">
          {
            groups.map((group, index) => (
              <Group key={`group-${index}`} groupIndex={ index + 1 } players={ group } />
            ))
          }
        </div>
        {
          groups.length > 0 ?
            <div className="actions">
              <button type="button" onClick={ shuffle }>Shuffle</button>
              <button type="button" onClick={ reset }>Reset</button>
            </div> :
            null
        }
      </div>
      {
        teams.length > 0 ? 
          <Result teams={ teams } onClose={ () => setTeams([]) } /> :
          null
      }
    </>
  );
}

export default App;
