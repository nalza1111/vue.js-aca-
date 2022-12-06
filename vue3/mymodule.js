export function myfunc(msg){
    console.log("msg", msg)
}
export function moduleB(msg){
    console.log("moduleB:", msg)
}
export default function moduleC(msg){
    console.log("moduleC:", msg)
}
// function myfunc(msg){
//     console.log("msg", msg)
// }
// function moduleB(msg){
//     console.log("moduleB:", msg)
// }
// export{myfunc, moduleB}
// export default moduleC
