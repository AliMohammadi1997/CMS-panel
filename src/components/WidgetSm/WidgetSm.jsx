import './widgetsm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newUser } from '../../data';

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmtitle">New Join Member</span>
            <ul className="widgetsmList">
                {newUser.map(user => (
                    <li key={user.id} className="widgetSmItem">
                    <img src={user.img} alt="" className="widgetSmimg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.name}</span>
                        <span className="widgetSmUserTitle"> {user.title} </span>
                    </div>
                    <button className="widgerSmBtn">
                      <VisibilityIcon className='widgetSmIcon'/>
                    </button>
                </li>
                ))}

            </ul>
        </div>
    );
}

export default WidgetSm;
