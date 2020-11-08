import * as React from 'react';
import './Footer.css';
import IconButtonWithText from '../../Components/IconButtonWithText/IconButtonWithText';

const Footer: React.FC = () => {
    return (
        <div className={'footer'}>
            <div className={'footer__container'}>
                <span className={'footer__container__container-logo'}>© "ETMV Group" 2021г. </span>
                <div className={'footer__container__container-buttons'}>
                    <IconButtonWithText typeIcon={'service'} text={'Сервис'} color={'inherit'} />
                    <IconButtonWithText typeIcon={'partners'} text={'Партнерам'} color={'inherit'} />
                </div>
            </div>
        </div>
    );
};
export default Footer;
