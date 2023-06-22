import React from "react";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import Card from "../../UI/Card"


const OrderCompleted = () => {
  return (
    <>
      <Card>
        <Grid container flex justifyContent={"center"}>
          <Grid item xs={12} container flex justifyContent={"center"}>
            <Grid >
              <img
                src="/assets/images/order-completed.svg"
                alt="order-completed"
                style={{
                  width: "10vw",
                  height: "10vw",
                }}
              ></img>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Title
              title="ĐƠN HÀNG ĐÃ HOÀN TẤT"
              color="black"
              fontSize="35px"
              fontWeight="1000"
            />
          </Grid>
          <Grid item xs={12} >
            <h5
              className="text-center"
              style={{
                fontSize: "20px",
                fontStyle: "italic"
              }}
            >
              CẢM ƠN BẠN ĐÃ SỬ DỤNG DỊCH VỤ CỦA CHÚNG TÔI
            </h5>
          </Grid>
          <Grid item >
            <Button

              component={Link} to="/user"
            >
              Trang chủ
            </Button>
          </Grid>
        </Grid>
      </Card>

    </>
  );
};

export default OrderCompleted;
