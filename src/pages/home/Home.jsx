// import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Overview from "../../components/overview/Overview";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";  
import Date from "../../components/date/Date";
const Home = () => {
  return (
    <div className="home">
    <Sidebar />
         <div className="homeContainer">
            <Navbar /> 
            <div className="main">
                  <Overview />  
                  <Date/>   
              </div>  
          
            
            <div className="col">       
            <div className="widgets">
             <Widget type="Total profit"/>
             <Widget type="Total Expences"/>
             <Widget type="New user"/>
               <div className="featured">
             <Featured />
             </div>
            </div>
            
           
           </div> 
              <div className="charts">
                <Chart/>
                
              </div>
           </div> 
    </div>
  );
};

export default Home;
