import { convJson } from '../interfaces/type';
import { CreateList } from '../interfaces/function';
import Layout from '../components/Layout';
import MovieData from '../data/movie.json';

const WatchedMovie = () => {
    let titleArray = Object.values(MovieData.data)
    let titleNum = titleArray.length;
    let forMakeListData: convJson = [];
    let sortData = MovieData.data.sort(function (a, b) {
        return (a.year > b.year) ? -1 : 1;
    });
    for (const element of sortData) {
        let strHeader = String(element.year);
        forMakeListData.push({ title: element.title, header: strHeader })
    }

    return (
        <Layout title="watched movie | in the wilderness">
            <div id="content">
                <h2>I watched movie.</h2>
                <p id="number-of-works">見た映画数:{titleNum}</p>
                <p>上映年基準</p>
                <CreateList Data={forMakeListData} />
            </div>
        </Layout>
    );
}

export default WatchedMovie