import Title from "../../components/Title";
import "./ElectronicCleaning.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ElectronicCleaning = () => {
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
          title="VỆ SINH MÁY LẠNH"
          color="white"
          fontSize="35px"
          fontWeight="700"
          padding="5% 0 0 0"
        />
        <div className="ec-content">
          <div className="row gy-4 pt-5 d-flex">
            <div className="col-sm-6">
              <div className="ec-card">
                <div className="rectangle">
                  <h3 className="ec-title">MÁY LẠNH TREO TƯỜNG</h3>
                </div>
                <div className="ec-card-content">
                  <div className="button-row">
                    <button>
                      <Link>Dưới 2HP</Link>
                    </button>
                    <button>
                      <Link>Trên 2HP</Link>
                    </button>
                  </div>
                  <div className="button-row ec">
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
                    Giá: <span className="price">200.000</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="ec-card">
                <div className="rectangle">
                  <h3 className="ec-title">MÁY LẠNH ÂM TRẦN</h3>
                </div>
                <div className="ec-card-content">
                  <div className="button-row">
                    <button>
                      <Link>Dưới 3HP</Link>
                    </button>
                    <button>
                      <Link>Trên 3HP</Link>
                    </button>
                  </div>
                  <div className="button-row ec">
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
                    Giá: <span className="price">420.000</span>
                  </button>
            <div className="row d-flex justify-content-center navigate-btn-ec">
            <div className="col-md-4 pt-2 pb-2 d-flex justify-content-center cont-btn-ec">
            <button>
              <Link to="/user">Quay lại</Link>
            </button>
            </div><div className="col-md-4 pt-2 pb-2 d-flex justify-content-center back-btn-ec">
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

export default ElectronicCleaning;
