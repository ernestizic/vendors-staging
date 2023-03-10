import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getVendorStores } from '../../../redux/slices/storeSlice';
import Sidebar from '../../dashboardComponents/sidebar/Sidebar';
import { ContentCenter } from '../../global/CenterBox';
import Loader from '../../global/Loader';
import { DashboardContainer } from './DashboardLayoutStyle';

const DashboardLayout = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	const { error, isLoading: storeLoading } = useSelector((state) => state.store);
	const { userInfo } = useSelector((state) => state.auth);
	const [showSidebar, setShowSidebar] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
		userInfo.email_verified_at ?? navigate("/verify")
		dispatch(getVendorStores("initialLoad"))
		// eslint-disable-next-line
	}, [dispatch, userInfo]);

	// Navigate to create store if there are no stores for a user
	if (!storeLoading && error) {
		return (
			<div className='sidebar'> 
				<Navigate to="/create-store" />
			</div>
		);
	}

	return (
		<>
			{storeLoading ? (
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
