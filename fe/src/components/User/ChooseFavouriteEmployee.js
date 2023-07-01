
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/material';
import React, { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ChooseFavouriteEmployee = (props) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
    handleOpen();
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setUnderstood(false);
  }
  const [data, setData] = useState(null);
  const [employeeId, setEmployeeId] = useState(null);
  const [understood, setUnderstood] = useState(false);

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
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(apiUrl + "customer/favourite-employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(req),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.error("Error fetching data:", response.status);
      }
    };

    fetchData();
  }, [props.date, props.name]);
  // const icon = (

  //   <Button variant="contained" onClick={handleOpen}>Chọn nhân viên</Button>


  // );
  return (
    <>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
      />
      {/* <Box sx={{ display: 'flex' }}>
        <Fade in={checked}>{icon}</Fade>
      </Box> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
          !understood ?
            <Box sx={style}>
              <h5>Bạn tự chọn người làm</h5>
              <p>Chức năng ngày cho phép nhiều người cùng nhận công việc của bạn</p>
              <p>Bạn được chọn 1 trong số những người này đến làm cho mình</p>
              <p>Xin vui lòng chọn sớm để họ có thời gian chuẩn bị. Một tiếng trước khi công việc bắt đầu, nếu bạn không chọn thì hệ thống sẽ chọn hộ và vẫn mất phí</p>
              <p style={{ color: 'red' }}>Phí : 20.000 đ</p>
              <Button variant="contained" onClick={() => setUnderstood(true)}>Chọn nhân viên </Button>
            </Box>
            :
            <Box
              sx={style}
            >
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
            </Box>
        }

      </Modal >
    </>


  );
};


export default ChooseFavouriteEmployee;
