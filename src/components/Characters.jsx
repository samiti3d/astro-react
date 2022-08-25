import React from 'react'
import Card from '../components/Card.astro'

const Characters = ({ characters }) => {
    return (
        <ul>
          {characters.map(character => {
            return (
              <li key={character.id}>
                <h3>{ character.name }</h3>
                <img width={150} src={character.img_url} alt={`Image of ${character.name}`} />
              </li>
            )
          })}
        </ul>
      )
}

export default Characters