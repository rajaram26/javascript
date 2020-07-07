//filter method

// const user=[
//     {name:'Raja', prime:true },
//     {name:'Ram', prime:false },
//     {name:'Naren', prime:true },
//     {name:'sankar', prime:false },
//     {name:'Rohit', prime:true }
// ];
// const out=user.filter(ele => {
//     return ele.prime;
// });
// console.log(out);


//map method

const product=[
    {name:'apple',price:50},
    {name:'orange',price:10},
    {name:'ladiesfinger',price:30},
    {name:'grapes',price:70},
    {name:'lemon',price:20},
];

// const buy=product.map((ele) => {
//     if(ele.price > 30){
//         return {name: ele.name,price: ele.price / 2};
//     }else{
//         return ele;
//     }
// });

// console.log(buy);

//sort method

const buy=product.sort((a,b) => {
    // if(a.price > b.price){
    //     return -1;
    // }else if(b.price > a.price){
    //     return 1;
    // }else{
    //     return 0;
    // }
    return a.price - b.price;
});

console.log(buy);