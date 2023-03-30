import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Jurusan = (props) => {
    return (
     <Card>
       <Card.Img variant="top" src={props.image} />
        <Card.Body>
         <Card.Title>{props.judul}</Card.Title>
          <Card.Text>
           Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Lihat selengkapnya</Button>
        </Card.Body>
     </Card>
    )
}

export default Jurusan;