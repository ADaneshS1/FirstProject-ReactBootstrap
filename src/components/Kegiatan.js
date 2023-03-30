import Card from 'react-bootstrap/Card';

const Kegiatan = (props) => {
    return (
        <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>{props.desk}</Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Kegiatan