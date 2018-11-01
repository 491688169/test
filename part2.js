//  实现一个promise
//  1.由于new Promise((resolve, reject)=>{})，所以传入一个参数（函数excutor），传入就执行。
//  2.executor里面有两个参数，一个叫resolve（成功），一个叫reject（失败）。
//  3.Promise存在三个状态（state）pending、fulfilled、rejected
//  4.pending（等待态）为初始态，并可以转化为fulfilled（成功态）和rejected（失败态）
//  5.成功时，不可转为其他状态，且必须有一个不可改变的值（value）
//  6.失败时，不可转为其他状态，且必须有一个不可改变的原因（reason）
//  7.new Promise((resolve, reject)=>{resolve(value)}) resolve为成功，接收参数value，状态改变为fulfilled，不可再次改变。
//  8.new Promise((resolve, reject)=>{reject(reason)}) reject为失败，接收参数reason，状态改变为rejected，不可再次改变。
//  9.若是executor函数报错 直接执行reject();
//  10.Promise有一个叫做then的方法，里面有两个参数：onFulfilled,onRejected,成功有成功的值，失败有失败的原因
