import React, { useEffect, useState } from "react";

const ChooseFavouriteEmployee = (props) => {
  const [data, setData] = useState(null);
  const [isOn, setIsOn] = useState(false);
  const [employeeId, setEmployeeId] = useState(null);
  const handleClick = () => {
    setIsOn(!isOn);
    props.onAddFavourite(!isOn);
  };

  const handleChooseEmployee = (id) => {
    setEmployeeId(id);
    props.onAddEmployee(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const token = sessionStorage.getItem("jwtToken");

      const req = {
        customerId: user.id,
        businessName: props.name,
        date: props.date ? props.date.$D : 26,
        month: props.date ? props.date.$M + 1 : 6,
      };

      const response = await fetch(
        "https://swp391-production.up.railway.app/customer/favourite-employee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(req),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.error("Error fetching data:", response.status);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
      {isOn && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Tên nhân viên</th>
              <th scope="col">Tổng điểm</th>
              <th scope="col">Điểm đánh giá</th>
              <th scope="col">Chọn</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((employee) => (
                <tr key={employee.employeeId}>
                  <td>{employee.employeeName}</td>
                  <td>{employee.totalPoint}</td>
                  <td>{employee.averagePoint}</td>
                  <td>
                    <input
                      type="checkbox"
                      id={employee.employeeId}
                      value={employee.employeeId}
                      checked={employeeId === employee.employeeId}
                      onChange={() => handleChooseEmployee(employee.employeeId)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ChooseFavouriteEmployee;
