import './WidgetLg.css'
import { transAction } from '../../data'


const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={'widgetLgbtn  ' + type} >{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest TransActions</h3>

            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Costomer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>

                {transAction.map(user => (
                    <tr key={user.id} className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="193.png" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">{user.name} </span>
                        </td>
                        <td className="widgetLgDate">{user.date} </td>
                        <td className="widgetLgAmount">{user.amount}</td>
                        <td className="widgetLgStatus">
                            <Button type={user.status} />
                        </td>
                    </tr>
                ))}

            </table>
        </div>
    );
}

export default WidgetLg;
