import React from 'react';
import "./OrderSumation.css"
import Title from '../../components/Title';
import { Link } from 'react-router-dom';

const OrderSumation = (state) => {

    let { date, startDate, payment } = state;
    return (
        <>
            <div
                className="container os-container"
                style={{
                    paddingLeft: "21.5vw",
                    paddingRight: "0",
                    margin: "0",
                    height: "100vh",
                    marginLeft: "4vw"
                }}
            >
                <div
                    className="bg"
                    style={{
                        width: "100vw",
                        height: "53vh",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        backgroundColor: "#397F77",
                        zIndex: "-1"
                    }}
                />
                <Title
                    title="HOÀN TẤT ĐƠN HÀNG"
                    color="white"
                    fontSize="35px"
                    fontWeight="1000"
                    padding="5% 0 0  0"
                />
                <div className='row os-content flex-column justify-content-center'>
                    <p className='col-md-12'>Ngày đặt hàng : 9h00 ngày 5 tháng 5 năm 555</p>
                    <p className='col-md-12'>Đơn hàng : Dịch vụ vệ sinh sofa, nệm, thảm</p>
                    <p className='col-md-12'>Thời gian làm việc : 13h30, ngày 6 tháng 6 năm 666</p>
                    <p className='col-md-12'>Anh/chị : Thiên An</p>
                    <p className='col-md-6'>Số toà : S303 </p>
                    <p className='col-md-6'>Số phòng : S999 </p>
                    <p className='col-md-12'>Số điện thoại : 23456789JQKA </p>
                    <p className='col-md-12'>Phương thức thanh toán : Thanh toán qua PAYPAL </p>
                    <div className='row col-md-12 d-flex justify-content-center nav-btn'>
                        <button className='col-md-2 accept'>
                            <Link to="/user/order-completed">Xác nhận</Link>
                        </button>
                        <button className='col-md-2'>
                            <Link>Quay lại</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderSumation;