import React from 'react';

function Sidebar() {
    return (
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/*<!-- Sidebar - Brand -->*/}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
    <div className="sidebar-brand-icon">
        <i className="fas fa-chart-line"></i>
    </div>
    <div className="sidebar-brand-text mx-3">Admin</div>
</a>

{/*<!-- Divider -->*/}
<hr className="sidebar-divider my-0"/>

{/*<!-- Nav Item - Dashboard -->*/}
<li className="nav-item active">
    <a className="nav-link" href="/">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>

{/*<!-- Divider -->*/}
<hr className="sidebar-divider"/>

{/*<!-- Heading -->*/}
<div className="sidebar-heading">Actions</div>

{/*<!-- Nav Item - Pages -->*/}
<li className="nav-item">
    <a className="nav-link collapsed" href="http://localhost:3001/home">
        <i className="fas fa-fw fa-home"></i>
        <span>Home</span>
    </a>
</li>

{/*<!-- Nav Item - Charts -->*/}
<li className="nav-item">
    <a className="nav-link" href="http://localhost:3001/products/almacen">
        <i className="fas fa-dolly"></i>
        <span>Almacen</span></a>
</li>

{/*<!-- Nav Item - Tables -->*/}
<li className="nav-item">
    <a className="nav-link" href="http://localhost:3001/instituciones">
        <i className="fas fa-church"></i>
        <span>Instituciones</span></a>
</li>

{/*<!-- Divider -->*/}
<hr className="sidebar-divider d-none d-md-block"/>
</ul>
    )
}

export default Sidebar;