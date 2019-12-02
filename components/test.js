// // 年
// let year = "1998"
// let myYear = parseInt(year)
// // 月
// let bMonth = "04"
// let myMonth = parseInt(bMonth)
// // let rest = myYear % 4
// // console.log(rest)
// console.log(leapyear(myYear))
// // 二月閏年判斷 and 月份天數判斷
// if(myMonth == 02){
//     if(leapyear(myYear) === true){
//         console.log('29天')
//     } else {
//         console.log('28天')
//     }
// } else if(myMonth == 04 || myMonth == 06 || myMonth == 09 || myMonth == 11){
//     console.log('30天')
// } else {
//     console.log('31天')
// }
// // 閏年計算公式
// function leapyear(myYear){
//     return ((myYear % 4 == 0) && (myYear % 100 != 0)) || (myYear % 400 == 0);
// }
const dayN = (num) => {
    var dayX = [];
    var xStr = '';
    for(let x = 1 ; x<=num ; x++){
        xStr = (x<10) ? '0' + x : x
        // console.log('xStr', xStr)
        dayX.push({ value: `${xStr}`, label: `${xStr}`})
    }
    return dayX
}

console.log(dayN(28))
// console.log(dayN(29))
// console.log(dayN(30))
// console.log(dayN(31))