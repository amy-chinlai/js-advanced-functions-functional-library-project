let standardizeInput = function(collection){
    return collection instanceof Array ? collection.slice() : Object.values(collection)
}


let myEach = function(collection, callback){
    let newCollection = standardizeInput(collection)
    
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
}

let myMap = function(collection, callback){
    let newCollection = standardizeInput(collection)
    
    let newArray = []

    for (let i=0; i < newCollection.length; i++){
        newArray.push(callback(newCollection[i]))
    }
}