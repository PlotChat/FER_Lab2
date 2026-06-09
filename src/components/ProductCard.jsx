import { useState } from "react";
import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaCheck } from "react-icons/fa";

const ProductCard = ({ p, buyBtnHandle }) => {
	const [add, setAdd] = useState(false);

	const handleAdd = (p) => {
		if (!p.added) {
			console.log("ADSD");
			buyBtnHandle();
		}
	};

	return (
		<Card style={{ width: "18rem", height: "30rem" }}>
			<Card.Img
				className="object-fit-cover w-100"
				style={{ height: "20rem" }}
				variant="top"
				src={p.image}
			/>
			<Card.Body>
				<Card.Title>{p.name} <Badge bg="warning">New</Badge></Card.Title>
				<Card.Text>
					<div>
						Price: <span>{p.price}</span>
					</div>
					<div>
						Status: <span>{p.status}</span>
					</div>
				</Card.Text>
				<Button
					variant={!add ? "success" : "danger"}
					onClick={() => {
						handleAdd(p);
						setAdd(true);
					}}
					disabled={add}
				>
					{!add ? (
						<div>Add to Cart</div>
					) : (
						<div>
							<FaCheck className="me-2"></FaCheck> Added to Cart
						</div>
					)}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
