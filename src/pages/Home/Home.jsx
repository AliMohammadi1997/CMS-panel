import Chart from "../../components/Chart/Chart";
import Features from "../../components/Features/Features";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import {xAxisData} from "../../data";
import './Home.css'

const Home = () => {
    return (
    <div className="home">
        <Features/>
        <Chart grid title='Month Sale' data={xAxisData} dataKey={'Sale'} />
        <div className="widgetsHome">
            <WidgetSm />
            <WidgetLg />
        </div>
    </div>
 );
}

export default Home;
