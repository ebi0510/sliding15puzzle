// const shuffleArray = array => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//     // Math.randomは0~1未満の少数を返すため、「0〜10」の範囲を作りたい場合は、+1する必要がある
//     // Math.randomで最大値の0.9が出た場合、*10すると9にしかならず10を出すことが不可能なため
//     [ array[i], array[j] ] = [ array[j], array[i] ];   
//     //   const temp = array[i];
//     // // 配列の元の並びを保管する
//     //   array[i] = array[j];
//     // // もとの配列のi番目とシャッフルした配列のj番目を置き換える
//     //   array[j] = temp;
//     // // array[i]を保持したまま、array[j]に入れつ
//     }
//   }
  
// //   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15,''];
// //   shuffleArray(arr);
// //   console.log(arr);

// const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// shuffleArray(array);

// let diff = [];

// for(let i = 1 ; i < 15 ; i++){
//     const anser = array[i] - array[i-1];
//     diff[i] = anser[i];
//     if(anser != 1){
//         // anser != 1に当てはまらなかったら強制終了
//         return false;
//     }else{
//       console.log(diff.length);
//       console.log(array[i],array[i-1],anser);
//       if(diff.length == 15){
//         console.log("終わり");
//         // console.logの結果は他の関数から見れないので、別の書き方に置き換える必要がある
//         break;
//       }
//     }
// }
// 1.23〜31行目までを関数化する
// 2.関数を中断する方法。process.exit(-1);（これは強制終了）以外の方法

// 格子状のマス目番号の取得https://dianxnao.com/javascript%EF%BC%9A%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%A7%E6%A0%BC%E5%AD%90%E7%8A%B6%E3%81%AE%E3%83%9E%E3%82%B9%E7%9B%AE%E7%95%AA%E5%8F%B7%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B/

var mytable = document.getElementById("tbl");
// tbl内のデータを参照する（getElementById＝id内のデータを参照する）
 
for (var i=0; i < mytable.rows.length; i++) {
  for (var j=0; j < mytable.rows[i].cells.length; j++) {
    // rows.lengthは行(i)。cells.lengthは列(j)。
    // 縦横最大値まで繰り返す。
    mytable.rows[i].cells[j].id = (i+1) + "-" + (j+1);
    // mytable上のi行j列idは i - j とする
    mytable.rows[i].cells[j].onclick = clicked;
    // mytable上のi行j列idがクリックされたら、clicked関数を動作させる
  }
}
 
function clicked(e) {
  alert(`${e.target.id}がクリックされました。値は：${e.target.innerHTML}`);
}
// target=イベントが行われたオブジェクトを参照できる。
// innerHTML=要素内のHTMLを取得できる（target内のHTMLを取得）

// 参考：JavaScriptのtableのクリックしたセルと行を取得する
// https://pg-happy.jp/javascript-table.html#:~:text=%E4%BB%A5%E4%B8%8B%E3%81%AE%E3%81%A8%E3%81%8A%E3%82%8A%E3%80%82-,JavaScript%E3%81%AEtable%E3%81%AE%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%97%E3%81%9F%E3%82%BB%E3%83%AB%E3%81%A8%E8%A1%8C%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B,-%E5%A4%9A%E5%88%86%E6%96%B9%E6%B3%95%E3%81%AF