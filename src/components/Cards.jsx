import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Img from '../proj_1.png';
export default function Cards() {
  const arrayex = [
    {
      title:"x1",
      text:"fdasjndfankls,dmfçal,smdfpjasçldknfasbdjfnosalidj",
      linkHref:"sajdfhnsldkfasodf.com"
    },
    {
      title:"x2",
      text:"fdasjndfankls,dmfçal,smdfpjasçldknfasbdjfnosalidj",
      linkHref:"sajdfhnsldkfasodf.com"
    },
    {
      title:"x3",
      text:"fdasjndfankls,dmfçal,smdfpjasçldknfasbdjfnosalidj",
      linkHref:"sajdfhnsldkfasodf.com"
    }
  ]
  return (
    <div>
      <CardGroup>
        {
          arrayex.map((proj, index) => {
            return(
              <Card key={ index } className='cards'>
              <Card.Img variant="top" src={ Img } alt="Imagem do projeto rodando" />
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <a className="text-muted" href={proj.linkHref}>link</a>
              </Card.Footer>
            </Card>
            )
          })

        }
      </CardGroup>
    </div>
  )
}
