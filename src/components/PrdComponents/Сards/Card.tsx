import './Card.css';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
 
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, id }) => {
  return (
    <MDBCard className='w-46'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={imageSrc} fluid alt='Product Image' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>{description}</MDBCardText>
        <Link to={`/product/${id}`}>Подробнее</Link>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Card;
