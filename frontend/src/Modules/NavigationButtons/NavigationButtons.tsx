import * as React from 'react';
import './NavigationButtons.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import BusinessIcon from '@material-ui/icons/Business';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import FireplaceSharpIcon from '@material-ui/icons/FireplaceSharp';

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
                <BottomNavigationAction label="Каналы" icon={<BorderAllIcon />} />
                <BottomNavigationAction label="Подписки" icon={<BusinessIcon />} />
                <BottomNavigationAction label="Добавленое" icon={<FireplaceSharpIcon />} />
                <BottomNavigationAction label="Сообщения" icon={<BuildSharpIcon />} />
                <BottomNavigationAction label="Информация" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </div>
    );
};
export default NavigationButtons;
