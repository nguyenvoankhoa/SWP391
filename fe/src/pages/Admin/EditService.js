import React, { useState } from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
import EditServiceForm from "../../components/Admin/EditServiceForm";
const EditService = () => {
  const data = useLoaderData();
  const [service, setService] = useState([]);
  const handleServiceChange = (service) => {
    setService(service);
  };
  return (
    <>
      <div className="mb-5" />
      <Title title="DỊCH VỤ" color="white" fontSize="35px" fontWeight="700" />

      <div className="row justify-content-center">
        <div className="col-10">
          <Card>
            <div class="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-bordered table-striped mb-0">
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
                      <td>
                        <div className="item-icon">
                          <img
                            src="../assets/images/edit.png"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => handleServiceChange(service)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
      <EditServiceForm service={service} />
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
