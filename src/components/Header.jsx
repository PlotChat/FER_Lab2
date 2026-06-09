import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { Image } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";

function Header({cartValue}) {

	return (
		<Navbar expand="lg" className="bg-body-tertiary position-sticky top-0 z-1">
			<Container>
				<Navbar.Brand href="#home" className="me-4">
					<Image src={logo} width="70rem"></Image>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Products</Nav.Link>
						<Nav.Link href="#link">Men</Nav.Link>
						<Nav.Link href="#link">Women</Nav.Link>
						<Nav.Link href="#link">Contact</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						<Nav.Link href="#link">
							<FaCartShopping className="fs-3"></FaCartShopping>
							<span className="ms-2">Cart ({cartValue})</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
