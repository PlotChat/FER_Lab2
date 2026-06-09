import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({ buyBtnHandle }) => {
	const products = [
		{
            name: "Men's Hoodie",
			added: false,
			price: "450.000 VND",
			status: "Available",
		},
        {
            name: "Women's Dress",
            added: false,
            price: "300.000 VND",
            status: "Available",
        },
        {
            name: "Men's Suit",
            added: false,
            price: "600.000 VND",
            status: "Available",
        },
        {
            name: "Women's Skirt",
            added: false,
            price: "200.000 VND",
            status: "Available",
        },
        {
            name: "Men's Shirt",
            added: false,
            price: "100.000 VND",
            status: "Available",
        },
        {
            name: "Women's Shirt",
            added: false,
            price: "100.000 VND",
            status: "Available",
        }
	];

    const handleAdd = (p) => {
        if(!p.added){
            console.log("ADSD")
            buyBtnHandle();
            p.added = true;
            console.log(p)
        }
    }

	return (
		<Row className="flex">
			{products.map((p) => (
				<Col>
					<ProductCard p={p} handleAdd={handleAdd}></ProductCard>
				</Col>
                )
			)}
		</Row>
	);
};

export default ProductList;
