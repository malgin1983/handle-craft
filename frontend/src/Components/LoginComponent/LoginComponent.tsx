import* as React from 'react'
import clsx from 'clsx'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import './LoginComponent.css'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
        },
        margin: {
            margin: theme.spacing(1),
            width: '100%',
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
            width: '100%',
        },
        textField: {
            width: '100%',
        },
    }),
);

interface State {
    login: string
    password: string
    weight: string
    showPassword: boolean;
}

const LoginComponent: React.FC = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        login: '',
        password: '',
        weight: '',
        showPassword: false,
    });

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, login: event.target.value });
    };

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className={'login-component'}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="login-login">Логин (email)</InputLabel>
                <Input
                    id="login-login"
                    type={'text'}
                    value={values.login}
                    onChange={handleLoginChange}
            />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField)}>
                <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    className={'login-component__password'}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                        }
                />
            </FormControl>
            <div className={'login-component-submit'}>
                <Button variant="outlined"  type={'submit'} color="primary">
                    Отправить
                </Button>
            </div>
        </div>
    )
}
export default LoginComponent
