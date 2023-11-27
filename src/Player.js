import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (

    // Card component styling for player card
    <Card style={{ width: '200px', margin: '10px', borderRadius: '40%', overflow: 'hidden', marginRight: '60px', border: '3px solid red', animation: 'colorChange 1s infinite', background: 'rgb(162 ,189, 168)' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} style={{ borderRadius: '30%', objectFit: 'cover', height: '200px', width: '200px' }} />

      {/* Player information in the card body */}
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>

  );
};

// Default props for the Player component in case values are not provided
Player.defaultProps = {
  name: 'Unknown',
  team: 'Unknown',
  nationality: 'Unknown',
  jerseyNumber: 'Unknown',
  age: 'Unknown',
  imageUrl: '',
};
export default Player;

