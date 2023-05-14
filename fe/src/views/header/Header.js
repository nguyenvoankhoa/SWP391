import React, { Component } from 'react'
import ContactInfoComponent from './ContactInfoComponent'
import HeaderComponent from './HeaderComponent'
import '../../styles/bootstrap.css'
import '../../styles/header/styleHeader.scss'

export default class Header extends Component {

    state = {
        serviceList: [
            { content: 'DỊCH VỤ 1' },
            { content: 'DỊCH VỤ 2' },
            { content: 'DỊCH VỤ 3' },
            { content: 'DỊCH VỤ 4' },
            { content: 'DỊCH VỤ 5' },
        ]
    }

    render() {

        return (
            <div className='header'>
                <ContactInfoComponent />
                <div className='header-tags'>
                    <div className=''><img className='logo' src='assets/img/LOGO.png' /></div>
                    <div className='header-text'>
                        <HeaderComponent
                            content='DỊCH VỤ'
                            serviceList={this.state.serviceList}
                        />
                    </div>
                    <div className='header-text'>
                        <HeaderComponent content='GIỚI THIỆU' />
                    </div>
                    <div className='header-text'>
                        <HeaderComponent content='LIÊN HỆ' />
                    </div>
                    <div className='header-text'>
                        <HeaderComponent content='TIN TỨC' />
                    </div>
                    <div className='header-text'>
                        <HeaderComponent content='CHÍNH SÁCH BẢO HÀNH' />
                    </div>
                    <div className=''><img className='button' src='assets/img/user.png' /></div>
                    <div className=''><img className='button' src='assets/img/cart.png' /></div>
                </div>
            </div>
        )
    }
}