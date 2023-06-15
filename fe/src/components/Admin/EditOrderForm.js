import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditOrderForm = ({ workType, billId }) => {
  const [data, setData] = useState(null);
  const [employeeId, setEmployeeId] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("jwtToken");
      const businessName = { businessName: workType };
      const res = await fetch(
        "https://swp391-production.up.railway.app/admin/business",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(businessName),
        }
      );

      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      const responseData = await res.json();
      setData(responseData);
    };
    fetchData();
  }, [workType, billId]);

  const handleChooseEmployee = (id) => {
    setEmployeeId(id);
  };

  const assignEmployeeHandler = async () => {
    let newOrder = {
      billId: billId,
      employeeId: employeeId,
    };
    const token = sessionStorage.getItem("jwtToken");
    const res = await fetch(
      "https://swp391-production.up.railway.app/admin/assign",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newOrder),
      }
    );

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    nav("/admin/order-service");
  };
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog find-employ">
          <div className="modal-content find-employ-item">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Danh sách nhân viên
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Tên nhân viên</th>
                    <th scope="col">Công việc</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Chọn</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((employee) => (
                      <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{workType}</td>
                        <td>
                          {employee.employeeWorks.length === 0 ? (
                            <span>Đang rảnh</span>
                          ) : (
                            employee.employeeWorks.map((item) => (
                              <span key={item.workHour}>
                                {item.workHour}({item.date}/{item.month}){" "}
                              </span>
                            ))
                          )}
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onChange={() => handleChooseEmployee(employee.id)}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Huỷ
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={assignEmployeeHandler}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditOrderForm;
