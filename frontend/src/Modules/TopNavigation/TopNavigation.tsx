import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import './TopNavigation.css'

const TopNavigation = () => {

		return (
		<div className={'top-navigation'}>
			<div className={'top-navigation__left'}>
				<IconButton edge="start"  color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6"  >
					Информация
				</Typography>
			</div>
			<Button color="inherit">Войти</Button>
		</div>
	)
}
export  default  TopNavigation
