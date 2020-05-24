// import* as React from 'react'
// import clsx from 'clsx'
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
// import IconButton from '@material-ui/core/IconButton'
// import Input from '@material-ui/core/Input'
// import InputLabel from '@material-ui/core/InputLabel'
// import InputAdornment from '@material-ui/core/InputAdornment'
// import FormControl from '@material-ui/core/FormControl'
// import Visibility from '@material-ui/icons/Visibility'
// import VisibilityOff from '@material-ui/icons/VisibilityOff'
// import MenuItem from '@material-ui/core/MenuItem'
// import Select from '@material-ui/core/Select'
//
// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             width: '100%',
//         },
//         margin: {
//             margin: theme.spacing(1),
//             width: '100%',
//         },
//         withoutLabel: {
//             marginTop: theme.spacing(3),
//             width: '100%',
//         },
//         textField: {
//             width: '100%',
//         },
//         formControl: {
//             margin: theme.spacing(1),
//             minWidth: 120,
//         },
//     }),
// );
//
// interface State {
//     name: string
//     login: string
//     password: string
//     weight: string
//     showPassword: boolean;
// }
//
// const RegistrationComponent: React.FC = () => {
//     const classes = useStyles();
//     const [values, setValues] = React.useState<State>({
//         name: '',
//         login: '',
//         password: '',
//         weight: '',
//         showPassword: false,
//     });
//     const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValues({ ...values, name: event.target.value });
//     };
//
//     const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValues({ ...values, login: event.target.value });
//     };
//
//     const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValues({ ...values, [prop]: event.target.value });
//     };
//
//     const handleClickShowPassword = () => {
//         setValues({ ...values, showPassword: !values.showPassword });
//     };
//
//     const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//         event.preventDefault();
//     };
//
//     return (
//         <div className={'login-component'}>
//             <FormControl className={clsx(classes.margin, classes.textField)}>
//                 <InputLabel htmlFor="login-name">Ф.И.O</InputLabel>
//                 <Input
//                     id="login-name"
//                     type={'text'}
//                     value={values.name}
//                     onChange={handleNameChange}
//                 />
//             </FormControl>
//             <FormControl className={clsx(classes.margin, classes.textField)}>
//                 <InputLabel htmlFor="login-login">Логин</InputLabel>
//                 <Input
//                     id="login-login"
//                     type={'text'}
//                     value={values.login}
//                     onChange={handleLoginChange}
//                 />
//             </FormControl>
//             <FormControl className={clsx(classes.margin, classes.textField)}>
//                 <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
//                 <Input
//                     id="standard-adornment-password"
//                     type={values.showPassword ? 'text' : 'password'}
//                     value={values.password}
//                     onChange={handleChange('password')}
//                     className={'login-component__password'}
//                     endAdornment={
//                         <InputAdornment position="end">
//                             <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 onMouseDown={handleMouseDownPassword}
//                             >
//                                 {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                             </IconButton>
//                         </InputAdornment>
//                     }
//                 />
//             </FormControl>
//             <FormControl className={classes.formControl}>
//                 <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
//                 <Select
//                     labelId="demo-controlled-open-select-label"
//                     id="demo-controlled-open-select"
//                     open={open}
//                     onClose={handleRoleClose}
//                     onOpen={handleRoleOpen}
//                     value={age}
//                     onChange={handleRoleChange}
//                 >
//                     <MenuItem value="">
//                         <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={10}>Частное лицо</MenuItem>
//                     <MenuItem value={20}>Компания</MenuItem>
//                 </Select>
//             </FormControl>
//         </div>
//     );
// }
// export default RegistartionComponent