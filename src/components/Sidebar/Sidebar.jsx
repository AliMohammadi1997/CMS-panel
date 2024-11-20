import './Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/' className='link' >
                        <li className="sidebarListItem">
                            <HomeOutlinedIcon className='sidebarIcon' />
                            <span className="listItemTitle">Home</span>
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TimelineOutlinedIcon className='sidebarIcon' />
                            <span className="listItemTitle">Analytics</span>
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpOutlinedIcon className='sidebarIcon' />
                            <span className="listItemTitle">Sales</span>
                        </li>
                    </ul>
                </div>


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to='/users' className='link' >
                        <li className="sidebarListItem">
                            <PersonOutlineOutlinedIcon className='sidebarIcon' />
                            <span className="listItemTitle">Users</span>
                        </li>
                        </Link>
                        <Link to='/newuser' className='link' >
                        <li className="sidebarListItem">
                            <PersonAddAltOutlinedIcon className='sidebarIcon' />
                            <span className="listItemTitle">New User</span>
                        </li>
                        </Link>
                        <Link to='/products' className='link' >
                        <li className="sidebarListItem">
                            <ProductionQuantityLimitsIcon className='sidebarIcon' />
                            <span className="listItemTitle">Products</span>
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className='sidebarIcon' />
                            <span className="listItemTitle">Transactions</span>
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlinedIcon className='sidebarIcon' />
                            <span className="listItemTitle">Reports</span>
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notiication</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <EmailOutlinedIcon className='sidebarIcon' />
                            <span className="listItemTitle">Mail</span>
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedOutlinedIcon className='sidebarIcon' />
                            <span className="listItemTitle">Feedback</span>
                        </li>
                        <li className="sidebarListItem">
                            <SmsOutlinedIcon className='sidebarIcon' />
                            <span className="listItemTitle">Messages</span>
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ManageAccountsOutlinedIcon className='sidebarIcon' />
                            <span className="listItemTitle">Manage</span>
                        </li>
                        <li className="sidebarListItem">
                            <TimelineOutlinedIcon className='sidebarIcon' />
                            <span className="listItemTitle">Analitcs</span>
                        </li>
                        <li className="sidebarListItem">
                            <ReportIcon className='sidebarIcon' />
                            <span className="listItemTitle">Reports</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;
