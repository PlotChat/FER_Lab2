import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ p, handleAdd }) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
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
					{!p.added ? <div>Add to Cart</div> : <div>Added to Cart</div>}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
