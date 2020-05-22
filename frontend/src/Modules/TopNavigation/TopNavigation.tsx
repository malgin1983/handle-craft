import * as React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles';
import './TopNavigation.css'
import TextButton from "../../Components/TextButton/TextButton";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

const TopNavigation:React.FC = () => {
	const ButterButton = withStyles({
		root: {
			color: '#0b1475',
			marginLeft: '1rem',
		},
	})(IconButton);

	return (
		<div className={'top-navigation'}>
			<div className={'top-navigation__left'}>
				<ButterButton edge="start"   aria-label="menu" className={'top-navigation__left-button'}>
					<MenuIcon />
				</ButterButton>
			</div>
			<div className={'top-navigation__right'}>
				<NavigationButtons />
				<TextButton text={'Войти'} color={'#0b1475'} />
			</div>

		</div>
	)
}
export  default  TopNavigation
