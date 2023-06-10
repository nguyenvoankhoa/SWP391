import React, { useEffect, useState } from "react";

const EditOrderForm = ({ workType, hour }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
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
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [workType]);
  const handleChooseEmployee = (hours) => {
    for (const h in hours) {
      if (h === hour) {
        setError("Nhân viên đã bận");
        break;
      }
    }
  };
  if (error) {
    alert(error);
  }
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
                      <tr key={employee.email}>
                        <td>{employee.name}</td>
                        <td>{workType}</td>
                        <td>
                          {employee.workHours.length === 0 ? (
                            <span>Đang rảnh</span>
                          ) : (
                            employee.workHours.map((hour) => (
                              <span key={hour}>{hour}h, </span>
                            ))
                          )}
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            onChange={() =>
                              handleChooseEmployee(employee.workHours)
                            }
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
