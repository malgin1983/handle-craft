import * as React from 'react'
import './RegistrationModal.css'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputIcon from '@material-ui/icons/Input'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import LoginComponent from "../LoginComponent/LoginComponent";

const RegistrationModal: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Paper square className={'registration-modal'}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab icon={<InputIcon/>} label="Вход" />
                <Tab icon={<AssignmentIndIcon />} label="Регистрация" />
            </Tabs>
            <div className={'registration-modal__container-fields'}>
                <LoginComponent />
            </div>

        </Paper>
    );
}
export default  RegistrationModal