import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceForm from "./ServiceForm";
import Title from "../../components/Title";
import "./FabricCleaning.css";
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
          height: "auto",
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
                  <div className="button-row-fc">
                    <button>
                      <Link>Sofa một ghế</Link>
                    </button>
                    <button>
                      <Link>Sofa hai ghế</Link>
                    </button>
                  </div>
                  <div className="button-row fc">
                    <button className="quantity-fc">Số lượng</button>
                    <button className=" button-quantity d-flex justify-content-center">
                      <span
                        type="button-fc"
                        className="quantity-btn"
                        onClick={decrementQuantity}
                      >
                        -
                      </span>
                      <span className="quantity-btn d-flex">{quantity}</span>
                      <span className="quanity-btn" onClick={incrementQuantity}>
                        +
                      </span>
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
                  <div className="button-row-fc">
                    <button>
                      <Link>Nhỏ hơn 2m</Link>
                    </button>
                    <button>
                      <Link>Lớn hơn 2m</Link>
                    </button>
                  </div>
                  <div className="button-row fc">
                    <button className="quantity-fc">Số lượng</button>
                    <button className=" button-quantity d-flex justify-content-center">
                      <span
                        type="button"
                        className="quantity-btn"
                        onClick={decrementQuantity}
                      >
                        -
                      </span>
                      <span className="quantity-btn d-flex">{quantity}</span>
                      <span className="quanity-btn" onClick={incrementQuantity}>
                        +
                      </span>
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
                  <div className="button-row-fc">
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
                    <button className="quantity-fc">Số lượng</button>
                    <button className=" button-quantity d-flex justify-content-center">
                      <span
                        type="button"
                        className="quantity-btn"
                        onClick={decrementQuantity}
                      >
                        -
                      </span>
                      <span className="quantity-btn d-flex">{quantity}</span>
                      <span className="quanity-btn" onClick={incrementQuantity}>
                        +
                      </span>
                    </button>
                  </div>
                  <button className="fc-price">
                    Giá: <span className="price">360.000</span>
                  </button>
                  <div className="row d-flex justify-content-center navigate-btn-fc">
                    <div className="col-md-4 pt-2 pb-2 d-flex justify-content-center cont-btn-fc">
                      <button>
                        <Link to="/user">Quay lại</Link>
                      </button>
                    </div>
                    <div className="col-md-4 pt-2 pb-2 d-flex justify-content-center back-btn-fc">
                      <button>
                        <Link to="/user/electronic-order">Tiếp tục</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FabricCleaning;
