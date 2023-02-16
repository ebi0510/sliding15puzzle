const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
    // Math.randomは0~1未満の少数を返すため、「0〜10」の範囲を作りたい場合は、+1する必要がある
    // Math.randomで最大値の0.9が出た場合、*10すると9にしかならず10を出すことが不可能なため   
      const temp = array[i];
    // 配列の元の並びを保管する
      array[i] = array[j];
    // もとの配列のi番目とシャッフルした配列のj番目を置き換える
      array[j] = temp;
    // なんだこいつ？
    }
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,''];
  shuffleArray(arr);
  console.log(arr);

while(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,'']){
}