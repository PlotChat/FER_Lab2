import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaCheck } from "react-icons/fa";

const ProductCard = ({ p, handleAdd }) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img className="object-fit-cover w-100" style={{height: "20rem"}} variant="top" src={p.image} />
			<Card.Body>
				<Card.Title>{p.name}</Card.Title>
				<Card.Text>
					<div>
						Price: <span>{p.price}</span>
					</div>
					<div>
						Status: <span>{p.status}</span>
					</div>
				</Card.Text>
				<Button variant="dark" onClick={() => handleAdd(p)} disabled={p.added}>
					{!p.added ? <div>Add to Cart</div> : <div><FaCheck className="me-2"></FaCheck> Added to Cart</div>}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
