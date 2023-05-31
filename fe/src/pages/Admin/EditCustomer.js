import React from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
const EditCustomer = () => {
  return (
    <>
      <div className="bg user-navbar d-flex" />
      <Title
        title="KHÁCH HÀNG"
        color="white"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 0 13vw"
      />
      <div className="table-cus table-responsive ">
        <Card>
          <table class="table table-bordered table-striped text-center"
            style={{ fontSize: "18px", fontWeight: "400", }}
          >
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Email</th>
                <th scope="col">Số toà</th>
                <th scope="col">Số phòng</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Số đơn đã đặt</th>
                <th scope="col" style={{ opacity: 0, }}>1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Thiên An</td>
                <td>Andy@gmail.com</td>
                <td>S303</td>
                <td>333</td>
                <td>23456789JQKA</td>
                <td>1000</td>
                <td className="d-flex justify-content-around">
                  <div className="item-icon">
                    <img src="/assets/images/iconTrash.svg"
                      alt="img"
                      style={{
                        width: "22px"
                      }} />
                  </div>
                  <div>
                    <img src="/assets/images/edit.png"
                      alt="img"
                      style={{
                        width: "20px"
                      }} />
                  </div>

                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Thiên An</td>
                <td>Andy@gmail.com</td>
                <td>S303</td>
                <td>333</td>
                <td>23456789JQKA</td>
                <td>1000</td>
                <td className="d-flex justify-content-around">
                  <div className="item-icon">
                    <img src="/assets/images/iconTrash.svg"
                      alt="img"
                      style={{
                        width: "22px"
                      }} />
                  </div>
                  <div>
                    <img src="/assets/images/edit.png"
                      alt="img"
                      style={{
                        width: "20px"
                      }} />
                  </div>

                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Thiên An</td>
                <td>Andy@gmail.com</td>
                <td>S303</td>
                <td>333</td>
                <td>23456789JQKA</td>
                <td>1000</td>
                <td className="d-flex justify-content-around">
                  <div className="item-icon">
                    <img src="/assets/images/iconTrash.svg"
                      alt="img"
                      style={{
                        width: "22px"
                      }} />
                  </div>
                  <div>
                    <img src="/assets/images/edit.png"
                      alt="img"
                      style={{
                        width: "20px"
                      }} />
                  </div>

                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
};

export default EditCustomer;
