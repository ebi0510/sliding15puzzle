const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
    // Math.randomは0~1未満の少数を返すため、「0〜10」の範囲を作りたい場合は、+1する必要がある
    // Math.randomで最大値の0.9が出た場合、*10すると9にしかならず10を出すことが不可能なため
    [ array[i], array[j] ] = [ array[j], array[i] ];   
    //   const temp = array[i];
    // // 配列の元の並びを保管する
    //   array[i] = array[j];
    // // もとの配列のi番目とシャッフルした配列のj番目を置き換える
    //   array[j] = temp;
    // // array[i]を保持したまま、array[j]に入れつ
    }
  }
  
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15,''];
//   shuffleArray(arr);
//   console.log(arr);

// arrayがクリック時に動いているのか？

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,''];
shuffleArray(array);
$('#tbl').append(`<tr><td id="1-1">${array[0]}</td><td id="1-2">${array[1]}</td><td id="1-3">${array[2]}</td><td id="1-4">${array[3]}</td></tr><tr><td id="2-1">${array[4]}</td><td id="2-2">${array[5]}</td><td id="2-3">${array[6]}</td><td id="2-4">${array[7]}</td></tr><tr><td id="3-1">${array[8]}</td><td id="3-2">${array[9]}</td><td id="3-3">${array[10]}</td><td id="3-4">${array[11]}</td></tr><tr><td id="4-1">${array[12]}</td><td id="4-2">${array[13]}</td><td id="4-3">${array[14]}</td><td id="4-4">${array[15]}</td></tr>`);
// arrayとappend（HTML)は必ずイコールになってるのか？パズルを動かした後にデベロッパーツールでチェックする。
// 格子状のマス目番号の取得https://dianxnao.com/javascript%EF%BC%9A%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%A7%E6%A0%BC%E5%AD%90%E7%8A%B6%E3%81%AE%E3%83%9E%E3%82%B9%E7%9B%AE%E7%95%AA%E5%8F%B7%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B/

var mytable = document.getElementById("tbl");
// tbl内のデータを参照する（getElementById＝id内のデータを参照する）

for (var i=0; i < mytable.rows.length; i++) {
  for (var j=0; j < mytable.rows[i].cells.length; j++) {
    // rows.lengthは行(i)。cells.lengthは列(j)。
    // 縦横最大値まで繰り返す。
    mytable.rows[i].cells[j].id = `${i+1},${j+1}`;
    // mytable上のi行j列idは i - j とする
    // idはHTMLに指定しなくてもある項目だが、空欄（指定なし）か指定ありかは場合による
    // rows[i],cells[j]のidを書き換えている状態
    // idはテキストのみ数字はできない。配列を使うと、勝手にテキストに変換してる
    mytable.rows[i].cells[j].onclick = clicked;
    // mytable上のi行j列idがクリックされたら、clicked関数を動作させる
  }
}

function clicked(e) {
  if(e.target.id == "1,1"){
    var top = "なし";
    var a = document.getElementById(top) 
    var left = "なし";
    var b = document.getElementById(left)
    var right = "1,2";
    var c = document.getElementById(right)
    var under = "2,1";
    var d = document.getElementById(under)
  }else if(e.target.id == "1,2"){
    var top = "なし";
    var a = document.getElementById(top);
    var left = "1,1";
    var b = document.getElementById(left);
    var right = "1,3";
    var c = document.getElementById(right);
    var under = "2,2";    
    var d = document.getElementById(under);
  }else if(e.target.id == "1,3"){
    var top = "なし";
    var a = document.getElementById(top);
    var left = "1,2";
    var b = document.getElementById(left);
    var right = "1,4";
    var c = document.getElementById(right);
    var under = "2,3";       
    var d = document.getElementById(under);
  }else if(e.target.id == "1,4"){
    var top = "なし";
    var a = document.getElementById(top);
    var left = "1,3";
    var b = document.getElementById(left);
    var right = "なし";
    var c = document.getElementById(right);
    var under = "2,4";        
    var d = document.getElementById(under);
  }else if(e.target.id == "2,1"){
    var top = "1,1";
    var a = document.getElementById(top);
    var left = "なし";
    var b = document.getElementById(left);
    var right = "2,2";
    var c = document.getElementById(right);
    var under = "3,1";        
    var d = document.getElementById(under);
  }else if(e.target.id == "2,2"){
    var top = "1,2";
    var a = document.getElementById(top);
    var left = "2,1";
    var b = document.getElementById(left);
    var right = "2,3";
    var c = document.getElementById(right);
    var under = "3,2";        
    var d = document.getElementById(under);
  }else if(e.target.id == "2,3"){
    var top = "1,3";
    var a = document.getElementById(top);
    var left = "2,2";
    var b = document.getElementById(left);
    var right = "2,4";
    var c = document.getElementById(right);
    var under = "3,3";        
    var d = document.getElementById(under);
  }else if(e.target.id == "2,4"){
    var top = "1,4";
    var a = document.getElementById(top);
    var left = "2,3";
    var b = document.getElementById(left);
    var right = "なし";
    var c = document.getElementById(right);
    var under = "3,4";        
    var d = document.getElementById(under);
  }else if(e.target.id == "3,1"){
    var top = "2,1";
    var a = document.getElementById(top);
    var left = "なし";
    var b = document.getElementById(left);
    var right = "3,2";
    var c = document.getElementById(right);
    var under = "4,1";        
    var d = document.getElementById(under);
  }else if(e.target.id == "3,2"){
    var top = "2,2";
    var a = document.getElementById(top);
    var left = "3,1";
    var b = document.getElementById(left);
    var right = "3,3";
    var c = document.getElementById(right);
    var under = "4,2";        
    var d = document.getElementById(under);
  }else if(e.target.id == "3,3"){
    var top = "2,3";
    var a = document.getElementById(top);
    var left = "3,2";
    var b = document.getElementById(left);
    var right = "3,4";
    var c = document.getElementById(right);
    var under = "4,3";        
    var d = document.getElementById(under);
  }else if(e.target.id == "3,4"){
    var top = "2,4";
    var a = document.getElementById(top);
    var left = "3,3";
    var b = document.getElementById(left);
    var right = "なし";
    var c = document.getElementById(right) ;
    var under = "4,4";        
    var d = document.getElementById(under);
  }else if(e.target.id == "4,1"){
    var top = "3,1";
    var a = document.getElementById(top);
    var left = "なし";
    var b = document.getElementById(left);
    var right = "4,2";
    var c = document.getElementById(right);
    var under = "なし";       
    var d = document.getElementById(under);
  }else if(e.target.id == "4,2"){
    var top = "3,2";
    var a = document.getElementById(top);
    var left = "4,1";
    var b = document.getElementById(left);
    var right = "4,3";
    var c = document.getElementById(right);
    var under = "なし";        
    var d = document.getElementById(under);
  }else if(e.target.id == "4,3"){
    var top = "3,3";
    var a = document.getElementById(top);
    var left = "4,2";
    var b = document.getElementById(left);
    var right = "4,4";
    var c = document.getElementById(right);
    var under = "なし";         
    var d = document.getElementById(under);
  }else if(e.target.id == "4,4"){
    var top = "3,4";
    var a = document.getElementById(top);
    var left = "4,3";
    var b = document.getElementById(left);
    var right = "なし";
    var c = document.getElementById(right);
    var under = "なし";        
    var d = document.getElementById(under);
  }

  // クリックしたマスに対して周囲4マスを見に行き、空のマスを探す
  // 16個全部一回書いてみる
  // 4パターンに収束するはず。外周を検出するとキレイなIF文になる
  // パズルを動かしてモチベ保とう
  // alert(`${e.target.id}がクリックされました。値は：${e.target.innerHTML}。上は：${top}（${a?.innerHTML ?? "なし"}）。左は${left}（${b?.innerHTML ?? "なし"}）。右は${right}（${c?.innerHTML ?? "なし"}）。下は${under}（${d?.innerHTML ?? "なし"}）`);
  if(a?.innerHTML == ""){
    // クリックしたときに上下左右のどこから「」の場合、そこのマスをクリックしたマスの数で上書きする
    a.innerHTML = e.target.innerHTML;
    e.target.innerHTML = "";
  }else if(b?.innerHTML == ""){
    b.innerHTML = e.target.innerHTML;
    e.target.innerHTML = "";
  }else if(c?.innerHTML == ""){
    c.innerHTML = e.target.innerHTML;
    e.target.innerHTML = "";
  }else if(d?.innerHTML == ""){
    d.innerHTML = e.target.innerHTML;
    e.target.innerHTML = "";
  }

  const newArray = [first1.innerHTML,first2.innerHTML,first3.innerHTML,first4.innerHTML,second1.innerHTML,second2.innerHTML,second3.innerHTML,second4.innerHTML,third1.innerHTML,third2.innerHTML,third3.innerHTML,third4.innerHTML,fourth1.innerHTML,fourth2.innerHTML,fourth3.innerHTML,fourth4.innerHTML]
  $('#tbl').insertAdjacentHTML(`<tr><td>${first1.innerHTML}</td><td>${first2.innerHTML}</td><td>${first3.innerHTML}</td><td>${first4.innerHTML}</td></tr><tr><td>${second1.innerHTML}</td><td>${second2.innerHTML}</td><td>${second3.innerHTML}</td><td>${second4.innerHTML}</td></tr><tr><td>${third1.innerHTML}</td><td>${third2.innerHTML}</td><td>${third3.innerHTML}</td><td>${third4.innerHTML}</td></tr><tr><td>${fourth1.innerHTML}</td><td>${fourth2.innerHTML}</td><td>${fourth3.innerHTML}</td><td>${fourth4.innerHTML}}</td></tr>`);

// クリック後に毎回動かす
// 30〜35を消すとなぜ動かないか
setTimeout(()=>{
  for(let i = 1 ; i < 15 ; i++){
    const answer = array[i] - array[i-1];
    if(answer != 1){
      // anser != 1に当てはまらなかったら強制終了
      console.log("まだ続く");
      return;
    }
  }
    alert("クリア")
},0);
// for文が全部回ると順番、中断すると順番じゃないのがなんでなのか調べる。
// 0だと前処理終わった直後に処理する。同時にはならない。（イベントループ）
// 1.23〜31行目までを関数化する
// 2.関数を中断する方法。process.exit(-1);（これは強制終了）以外の方法
}
// ${e.target.id}は文字。
// target=イベントが行われたオブジェクトを参照できる。
// innerHTML=要素内のHTMLを取得できる（target内のHTMLを取得）
// eにはイベント関数で取得した情報が全部詰まってる。どこクリックしたのか、ダブルクリックなのか、右クリック7日とか。ここが空欄だと何も入らない
// 複数のイベント関数があったら、最後のものがeに入る

// 参考：JavaScriptのtableのクリックしたセルと行を取得する
// https://pg-happy.jp/javascript-table.html#:~:text=%E4%BB%A5%E4%B8%8B%E3%81%AE%E3%81%A8%E3%81%8A%E3%82%8A%E3%80%82-,JavaScript%E3%81%AEtable%E3%81%AE%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%97%E3%81%9F%E3%82%BB%E3%83%AB%E3%81%A8%E8%A1%8C%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B,-%E5%A4%9A%E5%88%86%E6%96%B9%E6%B3%95%E3%81%AF
