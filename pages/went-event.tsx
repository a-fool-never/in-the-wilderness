import { convJson } from '../interfaces/type';
import { CreateList } from '../interfaces/function';
import Layout from '../components/Layout';
import EventData from '../data/event.json';

const WentEvent = () => {
    let titleArray = Object.values(EventData.data)
    let titleNum = titleArray.length;
    let forMakeListData: convJson = [];
    let sortData = EventData.data.sort(function (a, b) {
        return (a.year > b.year) ? -1 : 1;
    });
    for (const element of sortData) {
        let strHeader = String(element.year);
        forMakeListData.push({ title: element.title, header: strHeader })
    }

    return (
        <Layout title="went event | in the wilderness">
            <div id="content">
                <h2>I went to an event.</h2>
                <p id="number-of-works">行ったイベント数:{titleNum}</p>
                <p>年基準</p>
                <CreateList Data={forMakeListData} />
            </div>
        </Layout>
    );
}

export default WentEvent