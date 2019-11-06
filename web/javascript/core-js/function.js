function sum(a, b) {
    return a + b;
}

const sum = function (a, b) {
    return a + b;
}

function sumWithCallBack(a, b, fn) {
    const sum = a + b;
    fn(sum);
}

const printValue = function (value) {
    console.log(value);
};

sumWithCallBack(1, 2, printValue);

sumWithCallBack(1, 2,  function (value) {
  console.log(value);
})

sumWithCallBack(1, 2, (value) => {
   console.log(value);
});

sumWithCallBack(1, 2, value => value);



