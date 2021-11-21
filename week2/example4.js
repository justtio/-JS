function numGenerator() {
  let num = 1;
  num++;
  return () => {
    console.log(num);
  };
}

var getNum = numGenerator();
getNum();
