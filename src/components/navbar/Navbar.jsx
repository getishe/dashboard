import "./navbar.scss";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="list">
          <FormatListBulletedOutlinedIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
          <NotificationsNoneOutlinedIcon className="icon"/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <SettingsOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <img src=" https://images.pexels.com/photos/4386429/pexels-photo-4386429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt=""
             className="avatar" />
         
          </div>
        
          <div className="item">
            <img src="   https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260    
            " alt="" 
            className="avatar" />
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;