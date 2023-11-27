import React from 'react'
import Player from './Player'
import players from './players'

const PlayersList = () => {
  return (

    // Container with flex display to wrap player cards and center them
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      
      {/* Mapping through the 'players' array to render individual player cards */}
        {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  )
}

export default PlayersList
