import { convJson } from '../interfaces/type';
import { CreateList } from '../interfaces/function';
import Layout from '../components/Layout';
import MangaData from '../data/manga.json';

const ReadManga = () => {
    let titleArray = Object.values(MangaData.data)
    let titleNum = titleArray.length;
    let forMakeListData: convJson = [];
    let sortData = MangaData.data.sort(function (a, b) {
        return (a.year > b.year) ? -1 : 1;
    });
    for (const element of sortData) {
        let strHeader = String(element.year);
        forMakeListData.push({ title: element.title, header: strHeader })
    }

    return (
        <Layout title="read manga | in the wilderness">
            <div id="content">
                <h2>I read manga.</h2>
                <p id="number-of-works">読んだ漫画数:{titleNum}</p>
                <p>連載開始年基準</p>
                <CreateList Data={forMakeListData} />
            </div>
        </Layout>
    );
}

export default ReadManga