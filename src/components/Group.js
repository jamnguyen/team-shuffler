import React from 'react';

const Group = ({ groupIndex, players = [] }) => {
  return (
    <div className="group">
      <h2>Group { groupIndex }</h2>
      {
        players.map((player, index) => (
          <span key={`${player}-${index}-${groupIndex}`}>{ player }</span>
        ))
      }
    </div>
  );
}

export default Group;