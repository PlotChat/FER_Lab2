import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import dress from "../assets/dress.png"
import suit from "../assets/suit.png"
import hoodie from "../assets/hoodie.png"
import menshirt from "../assets/menshirt.png"
import womenshirt from "../assets/womenshirt.png"
import skirt from "../assets/skirt.png"

const ProductList = ({ buyBtnHandle }) => {
	const products = [
		{
            name: "Men's Hoodie",
			added: false,
			price: "450.000 VND",
			status: "Available",
            image: hoodie,
		},
        {
            name: "Women's Dress",
            added: false,
            price: "300.000 VND",
            status: "Available",
            image: dress,
        },
        {
            name: "Men's Suit",
            added: false,
            price: "600.000 VND",
            status: "Available",
            image: suit,
        },
        {
            name: "Women's Skirt",
            added: false,
            price: "200.000 VND",
            status: "Available",
            image: skirt,
        },
        {
            name: "Men's Shirt",
            added: false,
            price: "100.000 VND",
            status: "Available",
            image: menshirt,
        },
        {
            name: "Women's Shirt",
            added: false,
            price: "100.000 VND",
            status: "Available",
            image: womenshirt,
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
		<Row className="d-flex" sm={4}>
			{products.map((p) => (
				<Col className="d-flex justify-content-center mt-5 align-items-center">
					<ProductCard p={p} handleAdd={handleAdd}></ProductCard>
				</Col>
                )
			)}
		</Row>
	);
};

export default ProductList;
