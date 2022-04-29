import {convJson,ListHtml} from './type';

export const makeListHtml = (plh: string, pli: string[]): ListHtml => {
    let list: ListHtml = { lh: plh, li: pli }
    return list;
}

export const CreateList = ({ Data }: { Data: convJson }) => {
    let headerArray: string[] = [];
    let returnDivData: ListHtml[] = [];
    let returnDiv = [];

    //見出し配列作成
    headerArray = Array.from(new Set(Data.map((x) => x.header)));

    //見出しでまとめた配列データ作成
    for (let i = 0; i < headerArray.length; i++) {
        let matchItem = Data.filter(x => (x.header === headerArray[i])).map(x => x.title);
        matchItem.sort();
        returnDivData.push(makeListHtml(headerArray[i], matchItem));
    }
    
    for (const element of returnDivData) {//HTML作成
        let listData = [];
        returnDiv.push(<h2>{element.lh}</h2>);
        listData.push(element.li.map(x => <li>{x}</li>));
        returnDiv.push(<ul>{listData}</ul>);
    }

    return (<div>{ returnDiv } </div>);
}