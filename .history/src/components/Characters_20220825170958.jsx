import React from 'react'

const Characters = ({ characters }) => {
    return (
        <ul>
          {characters.map(character => {
            return (
              // <li key={character.id}>
              //   <h3>{ character.name }</h3>
              //   <img width={150} src={character.img_url} alt={`Image of ${character.name}`} />
              // </li>
              <Card href={character.img_url} title={character.name}>

              </Card>
            )
          })}
        </ul>
      )
}

export default Characters