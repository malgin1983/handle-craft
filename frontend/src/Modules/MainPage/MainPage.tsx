import * as React from 'react'
import './MainPage.css'
import TopNavigation from "../TopNavigation/TopNavigation";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainPage = () => {
	return (
		<div className={'main-page'}>
			<Header />
			<TopNavigation />
			<div className={'main-page__main'}>Main Page</div>
			<Footer/>
		</div>
	)
}
export  default  MainPage;
