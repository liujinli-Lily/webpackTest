// Module3.js代码使用AMD机制 // module3.js，使用AMD模块机制
define(['./module2.js'], 
    function(sum){
        return console.log("1 + 2 = " + sum(1, 2));
    }
);
