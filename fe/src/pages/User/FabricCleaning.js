import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceForm from "./ServiceForm";
import Title from "../../components/Title";
import './FabricCleaning.css';
const FabricCleaning = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div
        className="bg"
        style={{
          width: "100vw",
          height: "53vh",
          position: "absolute",
          top: "0",
          left: "0",
          backgroundColor: "#397F77",
          zIndex: "-1",
        }}
      />
      <div
        className="container"
        style={{
          paddingLeft: "20vw",
          paddingRight: "0",
          margin: "0",
          height: "100vh",
          marginLeft: "4vw",
        }}      
      >
        <Title
          title="VỆ SINH SOFA, NỆM THẢM"
          color="white"
          fontSize="35px"
          fontWeight="700"
          padding="5% 0 0 0"
        />
          <div className="fc-content">
          <div className="row gy-4 pt-5 d-flex">
            <div className="col-sm-4">
              <div className="fc-card">
                <div className="fc-rectangle">
                  <h3 className="fc-title">SOFA</h3>
                </div>
                <div className="fc-card-content">
                  <div className="button-row">
                    <button>
                      <Link>Sofa một ghế</Link>
                    </button>
                    <button>
                      <Link>Sofa hai ghế</Link>
                    </button>
                  </div>
                  <div className="button-row fc">
                    <button className="quantity">Số lượng</button>
                    <button className=" button-quantity d-flex justify-content-center">
                      <span
                        type="button-fc"
                        className="quantity-btn"
                        onClick={decrementQuantity}
                      >
                        -
                      </span>
                      <span className="quantity-btn d-flex">{quantity}</span>
                      <span className="quanity-btn" onClick={incrementQuantity}>+</span>
                    </button>
                  </div>
                  <button className="ec-price">
                    Giá: <span className="price">360.000</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fc-card">
                <div className="fc-rectangle">
                  <h3 className="fc-title">NỆM</h3>
                </div>
                <div className="fc-card-content">
                  <div className="button-row">
                    <button>
                      <Link>Nhỏ hơn 2m</Link>
                    </button>
                    <button>
                      <Link>Lớn hơn 2m</Link>
                    </button>
                  </div>
                  <div className="button-row fc">
                    <button className="quantity">Số lượng</button>
                    <button className=" button-quantity d-flex justify-content-center">
                      <span
                        type="button"
                        className="quantity-btn"
                        onClick={decrementQuantity}
                      >
                        -
                      </span>
                      <span className="quantity-btn d-flex">{quantity}</span>
                      <span className="quanity-btn" onClick={incrementQuantity}>+</span>
                    </button>
                  </div>
                  <button className="ec-price">
                    Giá: <span className="price">360.000</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fc-card">
                <div className="fc-rectangle">
                  <h3 className="fc-title">THẢM</h3>
                </div>
                <div className="fc-card-content">
                  <div className="button-row">
                    <button>
                      <Link>Thảm nhỏ</Link>
                    </button>
                    <button>
                      <Link>Thảm vừa</Link>
                    </button>
                    <button>
                      <Link>Thảm lớn</Link>
                    </button>
                  </div>
                  <div className="button-row fc">
                    <button className="quantity">Số lượng</button>
                    <button className=" button-quantity d-flex justify-content-center">
                      <span
                        type="button"
                        className="quantity-btn"
                        onClick={decrementQuantity}
                      >
                        -
                      </span>
                      <span className="quantity-btn d-flex">{quantity}</span>
                      <span className="quanity-btn" onClick={incrementQuantity}>+</span>
                    </button>
                  </div>
                  <button className="ec-price">
                    Giá: <span className="price">360.000</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </>
  )
};

export default FabricCleaning;
