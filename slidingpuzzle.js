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

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
shuffleArray(array);

let diff = [];

for(let i = 1 ; i < 15 ; i++){
    const anser = array[i] - array[i-1];
    diff[i] = anser[i];
    if(anser != 1){
        // anser != 1に当てはまらなかったら強制終了
        return false;
    }else{
      console.log(diff.length);
      console.log(array[i],array[i-1],anser);
      if(diff.length == 15){
        console.log("終わり");
        // console.logの結果は他の関数から見れないので、別の書き方に置き換える必要がある
        break;
      }
    }
}
// 1.23〜31行目までを関数化する
// 2.関数を中断する方法。process.exit(-1);（これは強制終了）以外の方法