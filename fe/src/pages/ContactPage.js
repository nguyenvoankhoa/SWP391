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
                Đội ngũ Tư vấn viên và Chăm sóc Khách hàng kinh nghiệm, chuyên
                nghiệp, tận tâm. Chúng tôi cam kết bảo hành dịch vụ khi Khách
                hàng chưa hài lòng. Người giúp việc nhà tiêu chuẩn, đáng tin
                cậy, có đầy đủ hồ sơ. Công ty chúng tôi chịu trách nhiệm tuyển
                chọn, đào tạo và quản lý.
              </p>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6424536748896!2d106.83237667486964!3d10.83865025804328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521d997c9daa5%3A0xf30260a8a5a58c74!2sT%C3%B2a%20nh%C3%A0%20S3.03%20Vinhome%20Grand%20Park!5e0!3m2!1svi!2s!4v1684665746293!5m2!1svi!2s"
        style={{ border: "none", width: "100vw", height: "80vh" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <div className={classes.map}></div> */}
    </>
  );
};

export default ContactPage;
