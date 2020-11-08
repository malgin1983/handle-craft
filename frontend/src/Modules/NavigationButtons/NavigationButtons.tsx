import * as React from 'react';
import './NavigationButtons.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TvIcon from '@material-ui/icons/Tv';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import MessageIcon from '@material-ui/icons/Message';
import HomeIcon from '@material-ui/icons/Home';

const NavigationButtons: React.FC = () => {
    const [value, setValue] = React.useState(0);

    return (
        <div className={'navigation-buttons'}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={'navigation-buttons__container'}
            >
                <BottomNavigationAction label={'Главная'} icon={<HomeIcon />} />
                <BottomNavigationAction label="Каналы" icon={<TvIcon />} />
                <BottomNavigationAction label="Подписки" icon={<RateReviewIcon />} />
                <BottomNavigationAction label="Добавленое" icon={<AddToPhotosIcon />} />
                <BottomNavigationAction label="Сообщения" icon={<MessageIcon />} />
                <BottomNavigationAction label="Курсы" icon={<AssignmentIcon />} />
            </BottomNavigation>
        </div>
    );
};
export default NavigationButtons;
