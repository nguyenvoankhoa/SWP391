import React from "react";
import Title from "./Title";
import Seperator from "../UI/Seperator";
import "./Feedback.css";
const Feedback = () => {
  return (
    <>
      <Title
        color="#DD6E42"
        title="PHẢN HỒI CỦA KHÁCH HÀNG"
        fontSize="40px"
        fontWeight="700"
        className="feedback-title"
      />
      <div className="feedback-container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <p>
              Mình là khách hàng thường xuyên của dịch vụ bên CleanShine. Vì
              tính chất công việc bận rộn, mình không có nhiều thời gian sắp
              xếp, dọn dẹp, vệ sinh nhà cửa nên chỉ cần nhấc điện thoại lên gọi
              đặt lịch buổi lẻ. Các bạn nhân viên làm việc rất sạch sẽ, gọn gàng
              và nhiệt tình. Mình rất hài lòng về dịch vụ của CleanShine, cũng
              như có thể thanh toán online qua các ứng dụng khác như ví MoMo rất
              tiện lợi. Hiện tại, mỗi tuần mình vẫn sử dụng dịch vụ để có thời
              gian nghỉ ngơi và chăm con. Mình đã recommend dich vụ với bạn bè
              và người thân. Chúc quý công ty ngày càng phát triển.
            </p>
            <p className="feedback-text text-center">
              Chị An Thư <br /> Thành phố Hồ Chí Minh
            </p>
            <div className="user">
              <img src="assets/images/dancer.svg" alt=""></img>
              <img src="assets/images/student.svg" alt=""></img>
              <img src="assets/images/delivery.svg" alt=""></img>
              <img src="assets/images/gamer.svg" alt=""></img>
              <img src="assets/images/woman.svg" alt=""></img>
              <img src="assets/images/lover.svg" alt=""></img>
              <img src="assets/images/mother.svg" alt=""></img>
              <img src="assets/images/customer.svg" alt=""></img>
              <img src="assets/images/ceo.svg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <Seperator />
    </>
  );
};

export default Feedback;
