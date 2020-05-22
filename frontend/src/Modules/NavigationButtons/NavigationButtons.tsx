import * as React from 'react'
import './NavigationButtons.css'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'


const NavigationButtons:React.FC = () => {
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
				<BottomNavigationAction  label="Пвх" icon={<RestoreIcon />} />
				<BottomNavigationAction  label="Алюминий" icon={<FavoriteIcon />} />
				<BottomNavigationAction  label="Витражи" icon={<LocationOnIcon />} />
				<BottomNavigationAction  label="Комплектующие" icon={<RestoreIcon />} />
				<BottomNavigationAction  label="Декор" icon={<FavoriteIcon />} />
				<BottomNavigationAction  label="Новости рынка" icon={<LocationOnIcon />} />
			</BottomNavigation>

		</div>
	)
}
export  default  NavigationButtons
