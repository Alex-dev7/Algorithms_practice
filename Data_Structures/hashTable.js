
function hashStringToInt() {

}

class HashTable {
    table = new Array(100)


    setItem = (key, value) => {
        const idx = hashStringToInt(key)
        table[idx] = value
        
    }

    getItem = (key) => {
        return ''
    }
}


const myTable = new HashTable()
myTable.setItem('firstName', 'John')
myTable.getItem('firstName')

console.log(myTable.getItem('firstName'))