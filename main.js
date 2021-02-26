const arr = new Array(1, 15, 150 ,1500, 'Jan', 5525, 'Henryk')

console.log(arr)

console.log(arr.every(item => item > 1)) 

const indx = arr.findIndex(item => item === 'Jan')
console.log('Index Jan to' + ' ' + indx)

const tab1 = new Array
const tab2 = new Array
const tab = arr.map(item => {
    if(typeof item === 'number'){
        tab1.push(item)
    }
    if(typeof item === 'string'){
        tab2.push(item)
    }
})
console.log(tab1)
console.log(tab2)   