import React from 'react';

const Result = ({ teams = [], onClose }) => {
  return (
    <div className="wrapper">
      <button type="button" onClick={ onClose }>Close [x]</button>
      <div className="result">
        {
          teams.map((team, index) => (
            <div key={`result-team-${index}`} className="team">
              <h2>Team { index + 1 }</h2>
              <p>
              {
                team.map((player, playerIndex) => (
                  <span key={`team-${index}-player-${playerIndex}`}>
                    { player }
                  </span>
                ))
              }
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Result;