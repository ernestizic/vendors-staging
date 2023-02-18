import React from 'react';
import ArrowDown from '../../../assets/icons/arrow-down.svg';
import OverviewIcon from '../../../assets/icons/overview-icon.svg'
import ProductsIcon from '../../../assets/icons/sidebar-product-icon.svg'
import BoostIcon from '../../../assets/icons/boost-icon.svg'
import ShopIcon from '../../../assets/icons/shop-icon.svg'
import UserIcon from '../../../assets/icons/user-profile-icon.svg'
import { ListItem, SelectStoreContainer, SidebarContainer, SidebarMenu } from './SidebarStyle';
import { NavLink } from 'react-router-dom';


const menuList = [
    {
      title: "Overview",
      slug: "overview",
      icon: OverviewIcon,
    },
    {
      title: "Products",
      slug: "products",
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
      slug: "user-profile",
      icon: UserIcon,
    },
    {
      title: "Support",
      slug: "wish-lists/profile",
      icon: UserIcon,
    },
  ];
const Sidebar = () => {
    
	return (
		<SidebarContainer>
			<SelectStoreContainer>
				<div className='store-logo-text'>
                    <p className='body-md-semibold'>B</p>
                </div>
                <p className='body-xs-semibold'>Blingz collection</p>
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
            </SidebarMenu>
		</SidebarContainer>
	);
};

export default Sidebar;
