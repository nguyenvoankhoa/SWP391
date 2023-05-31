import React from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
const EditService = () => {
  return (
    <>
      <div className="bg user-navbar" />
      <Title
        title="DỊCH VỤ"
        color="white"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 0 13vw"
      />
      <div className="table-cus table-responsive ">
        <Card>
          <table class="table table-bordered table-striped text-center"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Công việc</th>
                <th scope="col">Giá</th>
                <th scope="col" style={{ opacity: 0 }}>Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Tổng vệ sinh</td>
                <td>500.000</td>
                <td className="d-flex justify-content-center">
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
                <td>Vệ sinh Sofa</td>
                <td>200.000</td>
                <td className="d-flex justify-content-center">
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
                <td>Vệ sinh máy lạnh</td>
                <td>300.000</td>
                <td className="d-flex justify-content-center">
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

export default EditService;
