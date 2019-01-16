var fs = require('fs');

var data = fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
  console.log(1, data);
}); //파일읽는데 오래걸리기 때문에 다음 라인 먼저 실행
console.log(2);
