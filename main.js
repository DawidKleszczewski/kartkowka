const arr = new Array(1, 15, 150 ,1500, 'Jan', 5525, 'Henryk')

const wypisanie = arr.map(item =>{
    console.log(item)
})

console.log(arr.every(item => item > 1)) 

const indx = arr.findIndex(item => item === 'Jan')
console.log('Index Jan to' + ' ' + indx)


const nowaTab = arr.map(item => item)
console.log(nowaTab)
