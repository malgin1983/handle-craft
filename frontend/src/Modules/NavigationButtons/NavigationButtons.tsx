import * as React from 'react'
import './NavigationButtons.css'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import BorderAllIcon from '@material-ui/icons/BorderAll'
import BusinessIcon from '@material-ui/icons/Business'
import HomeWorkIcon from '@material-ui/icons/HomeWork'
import StyleIcon from '@material-ui/icons/Style'
import BuildSharpIcon from '@material-ui/icons/BuildSharp'
import AddToPhotosSharpIcon from '@material-ui/icons/AddToPhotosSharp'
import DvrSharpIcon from '@material-ui/icons/DvrSharp'
import FireplaceSharpIcon from '@material-ui/icons/FireplaceSharp';

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
				<BottomNavigationAction  label='Пвх' icon={<BorderAllIcon  />} />
				<BottomNavigationAction  label='Алюминий' icon={<BusinessIcon />} />
				<BottomNavigationAction  label='Витражи' icon={<HomeWorkIcon />} />
				<BottomNavigationAction  label='Комплектующие' icon={<BuildSharpIcon />} />
				<BottomNavigationAction  label='Декор' icon={<StyleIcon />} />
				<BottomNavigationAction  label='Огнестойкие' icon={<FireplaceSharpIcon />} />
				<BottomNavigationAction  label='Расчет' icon={<AddToPhotosSharpIcon />} />
				<BottomNavigationAction  label='Информация' icon={<DvrSharpIcon />} />
				<BottomNavigationAction  label='Регион' icon={<LocationOnIcon />} />
			</BottomNavigation>

		</div>
	)
}
export  default  NavigationButtons
