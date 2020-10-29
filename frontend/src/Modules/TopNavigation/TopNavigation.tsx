import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import './TopNavigation.css';
import TextButton from '../../Components/TextButton/TextButton';
import NavigationButtons from '../NavigationButtons/NavigationButtons';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RegistrationModal from '../../Components/RegistrationModal/RegistrationModal';

const TopNavigation: React.FC = () => {
    const ButterButton = withStyles({
        root: {
            color: '#0b1475',
            marginLeft: '1rem',
        },
    })(IconButton);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={'top-navigation'}>
            <div className={'top-navigation__left'}>
                <ButterButton edge="start" aria-label="menu" className={'top-navigation__left-button'}>
                    <MenuIcon />
                </ButterButton>
            </div>
            <div className={'top-navigation__right'}>
                <NavigationButtons />
                <div>
                    <TextButton text={'Войти'} color={'#0b1475'} handleClick={handleOpen} />
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <RegistrationModal />
                        </Fade>
                    </Modal>
                </div>
            </div>
        </div>
    );
};
export default TopNavigation;
