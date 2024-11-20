import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topRight">
                    <span className="logo">Ali Mohammadi ❤</span>
                </div>

                <div className="topLeft">
                    <div className="topbarIcon">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIcon">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIcon">
                        <SettingsIcon />
                    </div>
                    <img className='topAvatar' src="logo192.png" alt='' />

                </div>
            </div>
        </div>
    );
}

export default Topbar;
