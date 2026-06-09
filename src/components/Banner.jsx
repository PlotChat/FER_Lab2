import { useState } from "react";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"


function Banner() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="h-100" style={{background: "red"}}>
			<Carousel.Item>
				<Image className="object-fit-cover w-100 h-100" src={banner1}></Image>
				<Carousel.Caption>
					<h3>FASHION COLLECTION 2026</h3>
					<p>Discover the latest fashion trends for 2026.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image className="object-fit-cover w-100 h-100" src={banner2}></Image>
				<Carousel.Caption>
					<h3>SUMMER SALE UP TO 50%</h3>
					<p>Enjoy special discounts on selected products.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image className="object-fit-cover w-100 h-100" src={banner3}></Image>
				<Carousel.Caption>
					<h3>NEW ARRIVALS</h3>
					<p>Explore our newest clothing collection.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Banner;
