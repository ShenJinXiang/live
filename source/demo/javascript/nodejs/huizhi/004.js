// 004.js uncaughtException 事件
//参数err表示发生的异常
process.on("uncaughtException",function(err){
  console.log(err);
});
//故意抛出一个异常
throw new Error("我故意的...");
