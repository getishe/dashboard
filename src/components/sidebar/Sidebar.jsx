// import React from 'react'
import "./sidebar.scss";
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import DonutSmall from '@mui/icons-material/DonutSmall';
import Group from '@mui/icons-material/Group';
import LocalGroceryStoreOutlined from '@mui/icons-material/LocalGroceryStoreOutlined';
import Inventory2Outlined from '@mui/icons-material/Inventory2Outlined';
import VoiceOverOffOutlined from '@mui/icons-material/VoiceOverOffOutlined';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';
import EventNote from '@mui/icons-material/EventNote';
import BarChart from '@mui/icons-material/BarChart';
import EditAttributes from '@mui/icons-material/EditAttributes';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top"><span className="logo"> Blueberry </span><span className="logo1"> CRM </span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <li>
                <HomeOutlined className="Icon" />
                <span>Dashboard</span>               
            </li>
            
              <p className="title">Management</p>
          
            <li>
                <DonutSmall className= "Icon" />
              <span>Analystics</span>
            </li>
            <li>
              <Group  className="Icon" />
              <span>Customers</span>
            </li>
            <li>
              <LocalGroceryStoreOutlined  className ="Icon" />
              <span>Orders</span>
            </li>
            <li>
              <Inventory2Outlined      className ="Icon" />
              <span>Products</span>
            </li>
            <li>
              <VoiceOverOffOutlined       className ="Icon" />
              <span>Innvoices</span>
            </li>
            
              <p className="title"> PAGES </p>
            
            <li>
              <BookmarkAdded   className="Icon" />
              <span>Authentication</span>
            </li>
            <li>
              <EventNote         className="Icon" />
              <span>Calender</span>
            </li>
            
              <p className="title">COMPONENTES</p>
            
            <li>
              <BarChart       className="Icon" />
              <span>Charts</span>
            </li>
            <li>
              <EditAttributes    className ="Icon" />
              <span>UI Elements</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
       


    </div>
  );
};

export default Sidebar;