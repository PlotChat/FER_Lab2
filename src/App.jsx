import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
export default function App() {
	const [cartValue, setCartValue] = useState(0);

  const handleAddToCart = () => {
    setCartValue(prev => prev + 1);
  }

	return (
		<main>
			<Header cartValue={cartValue}></Header>
			<main>
				<Banner></Banner>
				<div className="p-5">
					<ProductList buyBtnHandle={handleAddToCart}></ProductList>
				</div>
        <Footer></Footer>
			</main>
		</main>
	);
}
