import React from 'react';
import './playerlist.css';
import manUnitedPlayers from '../../data/manUnitedPlayer.json';

const PlayerList = () => {
    return (
        <div className='playerList'>
            <h3>Test Worked</h3>
            {manUnitedPlayers.map((player, index) => (
                <div className='playerData' key={index}>
                    <p>Name: {player.firstName} {player.lastName}</p>
                    <p>Weeekly Salary: £{player.salary}</p>
                    <p>Player Position: {player.position}</p>
                    <p>Jersey No.: {player.jerseyNumber}</p>
                    <p>No. of Goals: {player.goals}</p>
                    <p>Age: {player.age}</p>
                </div>
            ))}
        </div>
    )
}

export default PlayerList
