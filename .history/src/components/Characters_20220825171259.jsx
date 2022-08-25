import React from 'react'
import Card from '../components/Card.astro'

const Characters = ({ characters }) => {
    return (
        <ul>
          {characters.map(character => {
            return (
              // <li key={character.id}>
              //   <h3>{ character.na me }</h3>
              //   <img width={150} src={character.img_url} alt={`Image of ${character.name}`} />
              // </li>
              <Card>
                <img width={150} src={character.img_url} alt={`Image of ${character.name}`} />

              </Card>
            )
          })}
        </ul>
      )
}

export default Characters