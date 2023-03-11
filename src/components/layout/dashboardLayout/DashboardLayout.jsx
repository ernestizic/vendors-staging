import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getVendorStores } from '../../../redux/slices/storeSlice';
import Sidebar from '../../dashboardComponents/sidebar/Sidebar';
import { ContentCenter } from '../../global/CenterBox';
import Loader from '../../global/Loader';
import { DashboardContainer } from './DashboardLayoutStyle';

const LoadingContainer = styled.div`
	text-align: center;
	z-index: 5;
	background-color: rgba(255, 255, 255, 0.3);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(3px);
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
`;

const DashboardLayout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { error, isLoading: storeLoading } = useSelector(
		(state) => state.store
	);
	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		userInfo.email_verified_at ?? navigate('/verify');
		dispatch(getVendorStores('initialLoad'));
		// eslint-disable-next-line
	}, [dispatch, userInfo]);

	// Navigate to create store if there are no stores for a user
	if (!storeLoading && error) {
		return <Navigate to='/create-store' />;
	}

	return (
		<DashboardContainer>
			{storeLoading && (
				<LoadingContainer>
					<ContentCenter>
						<Loader />
						<p>Fetching store...</p>
					</ContentCenter>
				</LoadingContainer>
			)}
			<Sidebar />

			<div className='dashboard-screen'>
				<Outlet />
			</div>
		</DashboardContainer>
	);
};

export default DashboardLayout;
