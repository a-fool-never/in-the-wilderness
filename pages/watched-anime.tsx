import { convJson } from '../interfaces/type';
import { CreateList } from '../interfaces/function';
import Layout from '../components/Layout';
import AnimeData from '../data/anime.json';

const WatchedAnime = () => {
    let titleArray = Object.values(AnimeData.data)
    let titleNum = titleArray.length;
    let forMakeListData: convJson = [];
    let sortData = AnimeData.data.sort(function (a, b) {
        return (a.year > b.year) ? -1 : 1;  //オブジェクトの昇順ソート
    });
    for (const element of sortData) {
        let strHeader = String(element.year);
        forMakeListData.push({ title: element.title, header: strHeader })
    }

    return (
        <Layout title="watched anime | in the wilderness">
            <div id="content">
                <h2>I watched anime.</h2>
                <p id="number-of-works">見たアニメ数:{titleNum}</p>
                <p>放映開始年基準</p>
                <CreateList Data={forMakeListData} />
            </div>
        </Layout>
    );
}

export default WatchedAnime