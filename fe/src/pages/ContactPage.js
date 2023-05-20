import React from "react";
import ContactInfo from "../components/ContactInfo";
import classes from "./ContactPage.module.css";
const ContactPage = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <ContactInfo
            title="Địa chỉ"
            content="Khu CNC, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh, Việt Nam"
            image="https://logowik.com/content/uploads/images/906_emailsymbol.jpg"
          />
          <ContactInfo
            image="https://logowik.com/content/uploads/images/906_emailsymbol.jpg"
            title="Địa chỉ"
            content="Khu CNC, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh, Việt Nam"
          />
          <ContactInfo
            image="https://logowik.com/content/uploads/images/906_emailsymbol.jpg"
            title="Địa chỉ"
            content="Khu CNC, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh, Việt Nam"
          />
        </div>
        <div className="row mb-5">
          <div className="col-lg-6 d-none d-sm-block">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeNYqx-vlYYXyfxA7Z24rOvo8YMIzE0eerg&usqp=CAU"
              alt=""
              className={classes.contactImage}
            />
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="container">
              <p className={classes.contactTitle}>THÔNG TIN LIÊN HỆ</p>
              <p className={classes.contactText}>
                Đội ngũ Tư vấn viên & Chăm sóc Khách hàng kinh nghiệm, chuyên
                nghiệp, tận tâm. Chúng tôi cam kết bảo hành dịch vụ khi Khách
                hàng chưa hài lòng. Người giúp việc nhà tiêu chuẩn, đáng tin
                cậy, có đầy đủ hồ sơ. Công ty chúng tôi chịu trách nhiệm tuyển
                chọn, đào tạo và quản lý.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.map}></div>
    </>
  );
};

export default ContactPage;
