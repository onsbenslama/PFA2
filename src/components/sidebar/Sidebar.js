import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div  class="jsx-2576226853 ">
        <div className="sidebar__img">
          <h1>Dashboard</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Admin dashboard</a>
        </div>
        <h2>dashboard</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="#">Compte admin</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="#">Les produits</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Les Patiens</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Les chambres</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Contact</a>
        </div>
        <h2>LEAVE</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Questions</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#">Remarques</a>
        </div>
    
        { <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          {/* <a href="#">Apply for leave</a> */}
        </div> }
        <h2>Bloc opératoire </h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">produits du bloc</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          {/* <a href="#">Paygrade</a> */}
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;