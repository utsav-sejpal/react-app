import React from 'react'
import "../assets/css/dashboard.css"
import "../assets/js/dashboard.js"

export default function MainComponent() {
    return (
        <>
            {/* <div className="wrapper">
                <nav id="sidebar" className="sidebar js-sidebar">
                    <div className="sidebar-content js-simplebar">
                        <a className="sidebar-brand" href="index.html">
                            <span className="align-middle">AdminKit</span>
                        </a>

                        <ul className="sidebar-nav">
                            <li className="sidebar-item active">
                                <a className="sidebar-link" href="index.html">
                                    <i className="align-middle" data-feather="sliders"></i> <span
                                        className="align-middle">Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="main">
                    <nav className="navbar navbar-expand navbar-light navbar-bg">
                        <a className="sidebar-toggle js-sidebar-toggle">
                            <i className="hamburger align-self-center"></i>
                        </a>

                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav navbar-align">
                                <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <i className="align-middle" data-feather="message-square"></i>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                                    aria-labelledby="messagesDropdown">
                                    <div className="dropdown-menu-header">
                                        <div className="position-relative">
                                            4 New Messages
                                        </div>
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle"
                                                        alt="Vanessa Tucker" />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Vanessa Tucker</div>
                                                    <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu
                                                        tortor.</div>
                                                    <div className="text-muted small mt-1">15m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle"
                                                        alt="William Harris" />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">William Harris</div>
                                                    <div className="text-muted small mt-1">Curabitur ligula sapien euismod
                                                        vitae.</div>
                                                    <div className="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle"
                                                        alt="Christina Mason" />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Christina Mason</div>
                                                    <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.
                                                    </div>
                                                    <div className="text-muted small mt-1">4h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle"
                                                        alt="Sharon Lessman" />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Sharon Lessman</div>
                                                    <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed,
                                                        posuere ac, mattis non.</div>
                                                    <div className="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu-footer">
                                        <a href="#" className="text-muted">Show all messages</a>
                                    </div>
                                </div>
                                <ul />
                                <li className="nav-item dropdown">
                                    <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                                        data-bs-toggle="dropdown">
                                        <i className="align-middle" data-feather="settings"></i>
                                    </a>

                                    <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                                        data-bs-toggle="dropdown">
                                        <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1"
                                            alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1"
                                            data-feather="user"></i> Profile</a>
                                        <a className="dropdown-item" href="#"><i className="align-middle me-1"
                                            data-feather="pie-chart"></i>
                                            Analytics</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="index.html"><i className="align-middle me-1"
                                            data-feather="settings"></i> Settings & Privacy</a>
                                        <a className="dropdown-item" href="#"><i className="align-middle me-1"
                                            data-feather="help-circle"></i> Help Center</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Log out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <main className="content">

                </main>

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row text-muted">
                            <div className="col-6 text-start">
                                <p className="mb-0">
                                    <a className="text-muted" href="https://adminkit.io/"
                                        target="_blank"><strong>AdminKit</strong></a> - <a className="text-muted"
                                            href="https://adminkit.io/" target="_blank"><strong>Bootstrap Admin
                                                Template</strong></a> &copy;
                                </p>
                            </div>
                            <div className="col-6 text-end">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Support</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Help Center</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Privacy</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div > */}

            <div className="wrapper">
                <nav id="sidebar" className="sidebar js-sidebar">
                    <div className="sidebar-content js-simplebar">
                        <a className="sidebar-brand" href="index.html">
                            <span className="align-middle">AdminKit</span>
                        </a>

                        <ul className="sidebar-nav">
                            <li className="sidebar-item active">
                                <a className="sidebar-link" href="index.html">
                                    <i className="align-middle" data-feather="sliders"></i>
                                    <span className="align-middle">Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="main">
                    <nav className="navbar navbar-expand navbar-light navbar-bg">
                        <a className="sidebar-toggle js-sidebar-toggle">
                            <i className="hamburger align-self-center"></i>
                        </a>

                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav navbar-align">
                                <li className="nav-item">
                                    <a className="nav-icon" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                                        <i className="align-middle" data-feather="message-square"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                                        <div className="dropdown-menu-header">
                                            <div className="position-relative">4 New Messages</div>
                                        </div>
                                        <div className="list-group">
                                            {['Vanessa Tucker', 'William Harris', 'Christina Mason', 'Sharon Lessman'].map((name, index) => (
                                                <a href="#" className="list-group-item" key={index}>
                                                    <div className="row g-0 align-items-center">
                                                        <div className="col-2">
                                                            <img src={`img/avatars/avatar-${index + 2}.jpg`} className="avatar img-fluid rounded-circle" alt={name} />
                                                        </div>
                                                        <div className="col-10 ps-2">
                                                            <div className="text-dark">{name}</div>
                                                            <div className="text-muted small mt-1">Message content here.</div>
                                                            <div className="text-muted small mt-1">Time ago</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                        <div className="dropdown-menu-footer">
                                            <a href="#" className="text-muted">Show all messages</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                        <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" />
                                        <span className="text-dark">Charles Hall</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="pages-profile.html">
                                            <i className="align-middle me-1" data-feather="user"></i> Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="align-middle me-1" data-feather="pie-chart"></i> Analytics
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="index.html">
                                            <i className="align-middle me-1" data-feather="settings"></i> Settings & Privacy
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="align-middle me-1" data-feather="help-circle"></i> Help Center
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Log out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="content">
                        {/* Main content goes here */}
                    </main>

                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row text-muted">
                                <div className="col-6 text-start">
                                    <p className="mb-0">
                                        <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">
                                            <strong>AdminKit</strong>
                                        </a> - <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">
                                            <strong>Bootstrap Admin Template</strong>
                                        </a> &copy;
                                    </p>
                                </div>
                                <div className="col-6 text-end">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">Support</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">Help Center</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">Privacy</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">Terms</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}
