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
                <div className='ai-content'>
                    <div className='col-md-6 ai-avtcontainer'>
                        <img src='/assets/images/person1.svg' alt='Avatar'></img>
                        <h3>UserName</h3>
                    </div>
                    <div className='col-md-6'>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountInfor;