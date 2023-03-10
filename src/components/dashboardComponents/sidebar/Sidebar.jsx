import React from 'react';
import PropTypes from 'prop-types';
import ArrowDown from '../../../assets/icons/arrow-down.svg';
import OverviewIcon from '../../../assets/icons/overview-icon.svg'
import ProductsIcon from '../../../assets/icons/sidebar-product-icon.svg'
import BoostIcon from '../../../assets/icons/boost-icon.svg'
import ShopIcon from '../../../assets/icons/shop-icon.svg'
import UserIcon from '../../../assets/icons/user-profile-icon.svg'
import CloseIcon from '../../../assets/icons/close_square.svg'
import { ListItem, SelectStoreContainer, SidebarContainer, SidebarMenu } from './SidebarStyle';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/slices/authSlice';


const menuList = [
    {
      title: "Overview",
      slug: "overview",
      icon: OverviewIcon,
    },
    {
      title: "Products",
      slug: "products/0",
      icon: ProductsIcon,
    },
    {
      title: "Boost products",
      slug: "boost-products",
      icon: BoostIcon,
    },
    {
      title: "Store details",
      slug: "store-details",
      icon: ShopIcon,
    },
    {
      title: "User profile",
      slug: "profile",
      icon: UserIcon,
    },
    {
      title: "Support",
      slug: "support",
      icon: UserIcon,
    },
  ];
const Sidebar = ({showSidebar, setShowSidebar}) => {
  const dispatch = useDispatch()
  const { currentStore } = useSelector((state) => state.store);
	return (
		<SidebarContainer>
      <div className='sidebar'>
        <button className='close-btn' onClick={()=> setShowSidebar(!showSidebar)}>
          <img src={CloseIcon} alt="close" width="24px"/>
        </button>
        <SelectStoreContainer>
          <div className='store-logo-text'>
              <p className='body-md-semibold'>B</p>
          </div>
          <p className='body-xs-semibold'>{currentStore?.name}</p>
          <img src={ArrowDown} alt="arrow down"/>
        </SelectStoreContainer>

              <SidebarMenu>
                  {menuList.map((item, idx)=> (
                      <ListItem key={idx}>
                          <NavLink to= {`/${item.slug}`}>
                              <img src={item.icon} alt={item.title} />
                              {item.title}
                          </NavLink>
                      </ListItem>
                  ))}
                <button onClick={()=> dispatch(logout())}>Log out</button>
              </SidebarMenu>
      </div>
		</SidebarContainer>
	);
};


// PropTypes
Sidebar.propTypes = {
	showSidebar: PropTypes.bool,
	setShowSidebar: PropTypes.func,
};

export default Sidebar;
