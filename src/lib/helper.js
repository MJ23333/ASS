// @ts-nocheck
export async function parseActivities() {
    const response = await fetch("https://image-1258734717.cos.ap-beijing.myqcloud.com/ASSD/zh_CN/main.json");
    let activities = await response.json();
    var types=new Set();
    for(var act of activities){
        types.add(act.type);
    }
    // console.log(activities);
    return {activities,types:Array.from(types)};
}
function convertToChinaNum(num) {
    var arr1 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    var arr2 = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千','万', '十', '百', '千','亿'];//可继续追加更高位转换值
    if(!num || isNaN(num)){
        return "零";
    }
    var english = num.toString().split("")
    var result = "";
    for (var i = 0; i < english.length; i++) {
        var des_i = english.length - 1 - i;//倒序排列设值
        result = arr2[i] + result;
        var arr1_index = english[des_i];
        result = arr1[arr1_index] + result;
    }
    //将【零千、零百】换成【零】 【十零】换成【十】
    result = result.replace(/零(千|百|十)/g, '零').replace(/十零/g, '十');
    //合并中间多个零为一个零
    result = result.replace(/零+/g, '零');
    //将【零亿】换成【亿】【零万】换成【万】
    result = result.replace(/零亿/g, '亿').replace(/零万/g, '万');
    //将【亿万】换成【亿】
    result = result.replace(/亿万/g, '亿');
    //移除末尾的零
    result = result.replace(/零+$/, '')
    //将【零一十】换成【零十】
    //result = result.replace(/零一十/g, '零十');//貌似正规读法是零一十
    //将【一十】换成【十】
    result = result.replace(/^一十/g, '十');
    return result;
}
export function countOccurrences(array) {
    return array.reduce((acc, v) => v != 0 ? acc + 1 : acc, 0);
}  
export async function getContent(page) {
    var endpoint = "https://prts.wiki/api.php?action=query&prop=revisions&rvprop=content&origin=*&format=json&&titles=" + page;
    const response = await fetch(endpoint);
    let data = await response.json();
    // console.log(data);
    let key = Object.keys(data.query.pages)[0];
    return data.query.pages[key].revisions[0]["*"];
}
function stringToObject(input) {
    const lines = input.trim().split('\n');
    const result = {};

    for (const line of lines) {
        const [key, value] = line.split(',');
        result[key.trim()] = "https://prts.wiki"+value.trim();
    }

    return result;
}
const source_url = "https://static.prts.wiki/";
export async function getImageMap() {
    var unparsed =await getContent("Widget:Data_Image");
    unparsed=unparsed.replaceAll("</includeonly>","").replaceAll("<includeonly>","");
    return stringToObject(unparsed);
}
export async function getMusicMap() {
    var unparsed =await getContent("Widget:Data_Audio");
    unparsed=unparsed.replaceAll("</includeonly>","").replaceAll("<includeonly>","").toLowerCase();
    var res=await JSON.parse(unparsed);
    for(let k in res){
        // console.log(res[k]);
        // res[k]=res[k].toLocaleLowerCase();
        if(res[k].toString().indexOf("sound_beta_2") == -1) continue;
        res[k] = res[k].replace("sound_beta_2",source_url + "music") + ".mp3";
    }
    console.log(res);
    res["btn_click"] = source_url + "music/general/g_ui/g_ui_btn_n.mp3";
    // unparsed=unparsed.replaceAll("</includeonly>","").replaceAll("<includeonly>","");
    return res;
}
export async function getLinkMap() {
    var unparsed =await getContent("Widget:Data_Link");
    var res=await JSON.parse(unparsed);
    // unparsed=unparsed.replaceAll("</includeonly>","").replaceAll("<includeonly>","");
    return res;
}
export async function getCharMap() {
    var unparsed =await getContent("Widget:Data_Char");
    unparsed=unparsed.replaceAll("</includeonly>","").replaceAll("<includeonly>","");
    return stringToObject(unparsed);
}
export async function getImage(name) {
    var endpoint = "https://prts.wiki/api.php?action=query&titles=&origin=*&titles=文件:" + name+"&prop=imageinfo&iiprop=url&format=json";
    console.log(endpoint);
    const response = await fetch(endpoint);
    let data = await response.json();
    // console.log(data);
    let key = Object.keys(data.query.pages)[0];
    return data.query.pages[key].imageinfo[0].url;
}
export async function parseContent(txt){
    const response = await fetch("https://image-1258734717.cos.ap-beijing.myqcloud.com/ASSD/zh_CN/"+txt+".json");
    if(!response.ok){
        
        return {};
    }
    let activities = await response.json();
    // console.log(activities);
    return activities;
}
export async function getCover(query) {
    var endpoint = "https://prts.wiki/api.php?action=query&titles=&origin=*&titles=";
    for (var q of query){
        endpoint+="文件:"+q+"|";
    }
    endpoint=endpoint.slice(0,-1);
    endpoint+="&prop=imageinfo&iiprop=url&format=json";
    console.log(endpoint);
    const response = await fetch(endpoint);
    let data = await response.json();
    // console.log(data);
    var covers=[];
    let keys = Object.keys(data.query.pages)
    for(var page of keys){
        covers.push({key:data.query.pages[page].title.replace("文件:",""),value:data.query.pages[page].imageinfo[0].url});
    }
    return covers;
}
function chunk(array, size) {
    //获取数组的长度，如果你传入的不是数组，那么获取到的就是undefined
    const length = array.length
    //判断不是数组，或者size没有设置，size小于1，就返回空数组
    if (!length || !size || size < 1) {
      return []
    }
    //核心部分
    let index = 0 //用来表示切割元素的范围start
    let resIndex = 0 //用来递增表示输出数组的下标
  
    //根据length和size算出输出数组的长度，并且创建它。
    let result = new Array(Math.ceil(length / size))
    //进行循环
    while (index < length) {
      //循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
      result[resIndex++] = array.slice(index, (index += size))
    }
    //输出新数组
    return result
  }
export async function findCover(activities) {
    var reg = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g;
    var mainline_count=1;
    var query=[];
    for (var act of activities){
        // console.log(act);
        if((act.type=="支线"||act.type=="剧情")&&act.name!="特殊"){
            query.push("活动名称_"+act.name.replaceAll(reg,"").replaceAll(" ","_").trim()+".png");
            // console.log(act.cover);
        }
        else if(act.type=="主线"){
            if(mainline_count==1){
                query.push("章节名称_序章.png");
            }else{
                query.push("章节名称_第"+convertToChinaNum(mainline_count-1)+"章.png");
            }
            mainline_count++;
        }

    }
    var queries=chunk(query,45);
    var r=[];
    for (var q of queries){
        r.push(await getCover(q))
    }
    console.log(r);
    const covers = r.flat().reduce((obj, item) => ({
        ...obj,
        [item.key]: item.value
      }), {});
    console.log(covers);
    mainline_count=1;
    for (var act of activities){
        // console.log(act);
        if((act.type=="支线"||act.type=="剧情")&&act.name!="特殊"){
            if(covers["活动名称 "+act.name.replaceAll(reg,"").trim()+".png"]){
                act.cover=covers["活动名称 "+act.name.replaceAll(reg,"").trim()+".png"];
            }
            // console.log(act.cover);
        }
        else if(act.type=="主线"){
            var name;
            if(mainline_count==1){
                name="章节名称 序章.png";
            }else{
                name="章节名称 第"+convertToChinaNum(mainline_count-1)+"章.png";
            }
            console.log(name);
            if(covers[name]){
                act.cover=covers[name];
            
            }
            mainline_count++;
        }

    }
}
// export async function activity(){
//     var endpoint = "https://prts.wiki/api.php?action=parse&page=关卡一览/活动关卡&format=json&origin=*";
//     const response = await fetch(endpoint);
//     let data = await response.json();
//     // console.log(data);
//     let content=data.parse.text["*"];
//     const root = parse(content);
//     var trs=root.querySelectorAll('tbody');
//     // console.log(trs);
//     const regex = /data-src="([^"]+)"/;
//     var covers={};
//     for (var tr of trs){
//         // console.log(tr);
//         if(tr.querySelector("th>big>big")){
//             var res=tr.querySelector("th>big>big");
//             console.log(res);
//         }
//         // var act=tr.childNodes[3].childNodes[0].childNodes[0]._rawText;
//         // if(tr.childNodes[7].childNodes[0].childNodes[0]){
//         //     covers[act]="https://prts.wiki"+tr.childNodes[7].childNodes[0].childNodes[0].rawAttrs.match(regex)[1];
//         // }
//         // else covers[act]="https://prts.wiki"+tr.childNodes[7].childNodes[0].rawAttrs.match(regex)[1];
//     }
//     return covers;
// }