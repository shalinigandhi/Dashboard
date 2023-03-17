import "./sidebar.scss";

const Sidebar = () => {
    return (
        <aside className="sidebar-container">
            <div className="sidebar-wrapper">
                <p className="heading">Dashboard</p>
                <ul className="navigation-links">
                    <li className="link">Analytical</li>
                    <li className="link">Ecommerce</li>
                    <li className="link">Notes</li>
                    <li className="link">Calendar</li>
                    <li className="link">Extra</li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;