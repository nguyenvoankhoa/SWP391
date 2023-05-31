import React from 'react';
import Title from '../../components/Title';
import './AccountInfor.css';

const AccountInfor = () => {
    return (
        <>
            <div className="bg user-navbar" />
            <div
                className='container'
                style={{
                    paddingLeft: "21.5vw",
                    paddingRight: "0",
                    margin: "0",
                    height: "100vh",
                    marginLeft: "4vw",
                }}
            >
                <Title
                    title="THÔNG TIN TÀI KHOẢN"
                    color="white"
                    fontSize="35px"
                    fontWeight="1000"
                    padding="3% 0 0  0"
                />
                <div className='ai-content d-flex justify-content-center'>
                    <div className='col-md-6 ai-username'>
                        <img src='/assets/images/person1.svg' alt='Avatar'></img>
                        <h3>UserName</h3>
                        <div className='col-md-12 d-flex justify-content-center'>
                            <button className='col-md-5'>Chỉnh sửa</button>
                        </div>
                    </div>

                    <div className='row col-md-6 d-flex u-infor'>
                        <div className='col-md-12 inputter'>
                            <label>Tên</label>
                            <input value={"Thiên An"}></input>
                        </div>
                        <div className='col-md-12 inputter'>
                            <label>Email</label>
                            <input value={"abc@gmail.com"}></input>
                        </div>
                        <div className='col-md-12 inputter'>
                            <label>Số tòa</label>
                            <input value={"S10.06"}></input>
                        </div>
                        <div className='col-md-12 inputter'>
                            <label>Số phòng</label>
                            <input value={"3502"}></input>
                        </div>
                        <div className='col-md-12 inputter'>
                            <label>Số điện thoại</label>
                            <input value={"0503.999.999"}></input>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountInfor;