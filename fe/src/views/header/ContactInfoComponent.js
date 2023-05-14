import React, { Component } from 'react';
import '../../styles/header/styleContact.scss';
import '../../styles/bootstrap.css';

export default class ContactInfoComponent extends Component {
    render() {
        return (
            <div className='contact-infor row'>
                <div className='comp col-md-6'>
                    <img src='assets/img/247.png' />
                    <p>Dịch vụ 24/7</p>
                </div>
                <div className='comp col-md-3'>
                    <img src='assets/img/mail.png' />
                    <p>smartcity@gmail.com</p>
                </div>
                <div className='comp col-md-3'>
                    <img src='assets/img/phone.png' />
                    <p>0977.54.54.50</p>
                </div>
            </div>
        )
    }
}