import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Cartitem from "./Cartitem";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faIndianRupee,
    faMobileAndroidAlt,
    faShoppingCart,
    faMobileAlt,
    faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

function App() {
    const products = [
        {
            id: 1,
            prod: "iPhone",
            cost: 50000,
            img: "images/iphone.jpg",
            rating: 5,
        },
        {
            id: 2,
            prod: "Oneplus",
            cost: 40000,
            img: "images/oneplus.jpg",
            rating: 4,
        },
        {
            id: 3,
            prod: "Samsung",
            cost: 30000,
            img: "images/samsung.jpg",
            rating: 4,
        },
        {
            id: 4,
            prod: "Oppo",
            cost: 25000,
            img: "images/oppo.png",
            rating: 4,
        },
        {
            id: 5,
            prod: "Vivo",
            cost: 20000,
            img: "images/vivo.png",
            rating: 4,
        },
        {
            id: 6,
            prod: "Redmi",
            cost: 15000,
            img: "images/redmi.png",
            rating: 3,
        },
        {
            id: 7,
            prod: "Moto",
            cost: 10000,
            img: "images/moto.png",
            rating: 3,
        },
        {
            id: 8,
            prod: "Nokia",
            cost: 2000,
            img: "images/nokia.png",
            rating: 3,
        },
    ];

    const [first, setfirst] = useState([]);
    const [total, settotal] = useState(0);

    let addToCart = (item) => {
        setfirst([...first, item]);
        settotal(total + item.cost);
    };

    let removeFromCart = (item) => {
        let index = first.findIndex((obj) => obj.id === item.id);
        first.splice(index, 1);
        setfirst([...first]);
        settotal(total - item.cost);
    };

    return (
        <>
            <body style={{ backgroundColor: "#fcde67" }}>
                <header
                    className="bg-info py-5"
                    style={{ borderBottom: "3px solid #030e12" }}
                >
                    <div className="container px-4 px-lg-5">
                        <div className="text-center">
                            <h1 className="display-4 fw-bolder">
                                <FontAwesomeIcon icon={faMobileAndroidAlt} /> Mobile Hub
                            </h1>
                            <p className="lead fw-normal mb-0">
                                Choose your own Mobile..
                            </p>
                        </div>
                    </div>
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <h2 class="text-center mt-4 mb-4">
                                    <FontAwesomeIcon icon={faMobileAlt} /> <u>Mobile Brands</u>
                                </h2>
                                {products.map((item) => {
                                    return (
                                        <Card
                                            item={item}
                                            handleAddToCart={addToCart}
                                            CartItems={first}
                                        ></Card>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-lg-1 line"></div>
                        <div className="col-lg-3">
                            <h2 className="text-center mt-4 mb-4">
                                <FontAwesomeIcon icon={faCartPlus} /> <u>Cart Items</u>
                            </h2>
                            {first.length === 0 ? (
                                <div
                                    className="text-center text-danger bg-white"
                                    style={{ border: "2px solid #5bccf6" }}
                                >
                                    <b>Cart is Empty <FontAwesomeIcon icon={faShoppingCart} /></b>
                                </div>
                            ) : (
                                <div>
                                    <ol className="list-group list-group-numbered ">
                                        {first.map((cartitem) => (
                                            <Cartitem
                                                cartitem={cartitem}
                                                removeFromCart={removeFromCart}
                                            ></Cartitem>
                                        ))}
                                    </ol>
                                    <h2 className="text-center mt-4 mb-4" style={{ border: '3px solid #030e12' }}>
                                        <FontAwesomeIcon icon={faShoppingCart} /> Total -{" "}
                                        {<FontAwesomeIcon icon={faIndianRupee} />} {total}{" "}
                                    </h2>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default App;
