import React from 'react';
import { Divider } from '@mui/material';

const OrderSumation = () => {
  return (
    <>
      <div className="hh-total col-md-4">
        <h5 className="text-center">Thông tin đơn hàng</h5>
        <div className="total-infor">
          <p>
            <span>Vệ sinh định kỳ </span>
          </p>
          <p>
            <span>xxm2 xx Phòng</span>
          </p>
          <p>
            <span>06/05/2023 5:30 PM</span>
          </p>
        </div>
        <Divider sx={{ borderBottomWidth: 1, backgroundColor: "black" }} />
        <div className="total-cost">
          <p>
            Đơn giá: <span>100.000 VNĐ</span>
          </p>
          <p>
            VAT: <span>10%</span>
          </p>
          <p>
            Thành tiền: <span>110.000 VNĐ</span>
          </p>
        </div>
        <Divider sx={{ borderBottomWidth: 1, backgroundColor: "black" }} />
        <div className="total-sumup">
          <h5>
            <span>Tổng</span>
            <span>Giá trị</span>
            <span>Đơn hàng</span>
          </h5>
          <h4>
            110.000<span>VNĐ</span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default OrderSumation;