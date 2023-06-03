import React from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
const EditService = () => {
  const data = useLoaderData();
  console.log(data.data);
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
      <div className="table-ser table-responsive ">
        <Card>
          <table
            className="table table-bordered table-striped text-center"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Công việc</th>
                <th scope="col">Loại</th>
                <th scope="col">Chi tiết</th>
                <th scope="col">Giá</th>
                <th scope="col">Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              {data.map((service) => (
                <tr key={service.serviceId}>
                  <th scope="row">{service.serviceId}</th>
                  <td>{service.name}</td>
                  <td>{service.type}</td>
                  <td>{service.detail}</td>
                  <td>{service.price}</td>
                  <td className="d-flex justify-content-center">
                    <div>
                      <img
                        src="/assets/images/edit.png"
                        alt="img"
                        style={{
                          width: "20px",
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
};

export default EditService;
export async function serviceLoader() {
  const res = await fetch("https://swp391-production.up.railway.app/services");
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
