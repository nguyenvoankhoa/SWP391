import React from 'react';
import './ServiceCard.css';

const ServiceCard = () => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-evenly'>
        <div className='col-md-4 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <span className='dot'>
              <img src="assets/images/cleaning-product.svg" alt=''/>
              </span>
              <h5 className='card-title'>TẠP VỤ VỆ SINH</h5>
              <p>Là đơn vị hàng đầu chuyên cung cấp dịch vụ vệ sinh hàng ngày hoặc theo giờ chuyên nghiệp.</p>
              <button type="button" class="btn btn-outline-primary">Đặt ngay</button>
            </div>
          </div>
        </div>
       
        <div className='col-md-4 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <span className='dot'>
              <img src="assets/images/globe.svg" alt=''/>
              </span>
              <h5 className='card-title'>SỬA CHỮA THIẾT BỊ</h5>
              <p>Đội ngũ kỹ thuật được đào tạo bài bản, có kinh nghiệm trong việc nắm bắt và sự lý sự cố.</p>
              <button type="button" class="btn btn-outline-primary">Đặt ngay</button>
            </div>
          </div>
        </div>

        <div className='col-md-4 mb-4'>
          <div className='card'>
            <div className='card-body'>
              <span className='dot'>
              <img src="assets/images/qualification.svg" alt=''/>
              </span>
              <h5 className='card-title'>BẢO HÀNH DỌN DẸP</h5>
              <p>Đảm bảo chính sách bảo hành đối với việc vệ sinh những thiết bị gia dụng thông minh.</p>
              <button type="button" class="btn btn-outline-primary">Đặt ngay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
