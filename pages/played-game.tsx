import { convJson } from '../interfaces/type';
import { CreateList } from '../interfaces/function';
import Layout from '../components/Layout';
import GameData from '../data/game.json';

const PlayedGame = () => {
    let titleArray = Object.values(GameData.data)
    let titleNum = titleArray.length;
    let forMakeListData: convJson = [];
    let sortData = GameData.data.sort(function (a, b) {
        return (a.year > b.year) ? -1 : 1;
    });
    for (const element of sortData) {
        let strHeader = String(element.year);
        forMakeListData.push({ title: element.title, header: strHeader })
    }

    return (
        <Layout title="played game | in the wilderness">
            <div id="content">
                <h2>I played game.</h2>
                <p id="number-of-works">プレイしたゲーム数:{titleNum}</p>
                <p>発売年・サービス開始年基準</p>
                <CreateList Data={forMakeListData} />
            </div>
        </Layout>
    );
}

export default PlayedGame