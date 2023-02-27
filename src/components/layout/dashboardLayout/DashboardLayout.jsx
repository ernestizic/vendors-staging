import React, {useState, useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../../dashboardComponents/sidebar/Sidebar'
import { DashboardContainer } from './DashboardLayoutStyle'
const DashboardLayout = () => {
  const location = useLocation()
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
        if(screenWidth < breakpoint) {
          nav.style.width = '100%';
        } else {
          nav.style.width = "240px"
        }
			} else {
				nav.style.width = '0px';
			}
		})();
	}, [screenWidth, showSidebar]);

  	// Close sidebar when route changes
	useEffect(()=> {
		if(screenWidth < breakpoint) {
			setShowSidebar(false);
		}
	}, [location, screenWidth])

  return (
    <DashboardContainer>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        
        <div className='dashboard-screen'>
            <Outlet context={[showSidebar, setShowSidebar]}/>
        </div>
    </DashboardContainer>
  )
}

export default DashboardLayout