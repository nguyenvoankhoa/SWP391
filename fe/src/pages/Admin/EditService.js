import React, { useState, useEffect } from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData, useParams } from "react-router-dom";
import EditServiceForm from "../../components/Admin/EditServiceForm";
const EditService = () => {
  const data = useLoaderData();
  const [service, setService] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const param = useParams();

  useEffect(() => {
    setFilteredData(data.filter((service) => service.name === param.serviceId));
  }, [param]);

  {
    if (filteredData.length == 0) {
      setFilteredData(data);
    }
  }

  const handleServiceChange = (service) => {
    setService(service);
  };
  return (
    <>
      <Title
        title="DỊCH VỤ"
        color="black"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 1% 0"
      />

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
                  {filteredData.map((service) => (
                    <tr key={service.serviceId}>
                      <th scope="row">{service.serviceId}</th>
                      <td>{service.name}</td>
                      <td>{service.type}</td>
                      <td>{service.detail}</td>
                      <td>{service.price}</td>
                      <td>
                        <div className="item-icon">
                          <img
                            src="/assets/images/edit.png"
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
  const apiUrl = process.env.REACT_APP_API_URL;
  const res = await fetch(apiUrl + "services");
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
