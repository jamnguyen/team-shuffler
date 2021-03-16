import React from 'react';

const GroupInput = ({
  groupIndex,
  onAddPlayers
}) => {

  const [ value, setValue ] = React.useState('');

  const onInputChange = (e) => {
    setValue(e.target.value);
  }

  const onAdd = () => {
    const values = value.replace(/(\r\n|\r|\n)/g, ',').split(',').filter(player => player);
    console.log(values);
    onAddPlayers(values);
    setValue('');
  }

  return (
    <div className="group-input">
      <p>
        Add players into groups, separate players by new lines.
      </p>
      <textarea
        value={ value }
        onChange={ onInputChange }
      />
      <button type="button" onClick={ onAdd }>
        Add players into group { groupIndex }
      </button>
    </div>
  );
}

export default GroupInput;