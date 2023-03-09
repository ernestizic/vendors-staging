import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getVendorStores } from '../../../redux/slices/storeSlice';
import Sidebar from '../../dashboardComponents/sidebar/Sidebar';
import { ContentCenter } from '../../global/CenterBox';
import Loader from '../../global/Loader';
import { DashboardContainer } from './DashboardLayoutStyle';

const DashboardLayout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	const { stores, isLoading: storeLoading, userEmailVerified } = useSelector((state) => state.store);
	const [showSidebar, setShowSidebar] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [isLoading, setIsLoading] = useState(true);

	const breakpoint = 768;

	useEffect(() => {
		// Set screen width as window resizes
		const handleWindowResize = () => setScreenWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);

		// show sidebar on larger screen and remove sidebar on smaller screens
		if (screenWidth > breakpoint) {
			setShowSidebar(true);
		} else {
			setShowSidebar(false);
		}
		return () => window.removeEventListener('resize', handleWindowResize);
	}, [screenWidth]);

	useEffect(() => {
		// toggle sidebar
		(() => {
			const nav = document.querySelector('.sidebar');
			if (showSidebar) {
				if (screenWidth < breakpoint) {
					nav.style.width = '100%';
				} else {
					nav.style.width = '240px';
				}
			} else {
				nav.style.width = '0px';
			}
		})();
	}, [screenWidth, showSidebar]);

	// Close sidebar when route changes
	useEffect(() => {
		if (screenWidth < breakpoint) {
			setShowSidebar(false);
		}
	}, [location, screenWidth]);

	useEffect(() => {
		dispatch(getVendorStores())
	}, [dispatch]);

	// ensure user sees the dashboard only if they are verified and have at least one store created
	useEffect(() => {
		setIsLoading(true);
		if (!userEmailVerified) {
			navigate('/verify-email');
			return;
		}
		if (stores.length < 1) {
			navigate('/create-store');
			setIsLoading(false);
		}
		// eslint-disable-next-line
	}, [stores]);

	return (
		<>
			{isLoading || storeLoading ? (
				<div className='sidebar' style={{textAlign: "center"}}><ContentCenter><Loader /></ContentCenter></div>
			) : (
				<DashboardContainer>
					<Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

					<div className='dashboard-screen'>
						<Outlet context={[showSidebar, setShowSidebar]} />
					</div>
				</DashboardContainer>
			)}
		</>
	);
};

export default DashboardLayout;
