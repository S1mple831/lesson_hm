let objWithStringValue = {
    toString: function(){
        return "hello"
    }
}

console.log(Number(objWithStringValue)) // NaN

let objWithvalueOf = {
    toString: function(){
        return this
    },
    valueOf:function(){
     return 2
    }
}

console.log(String(objWithvalueOf))


let objWithoutPrimitive = {
    toString: function(){
        return this
    },
    valueOf: function(){
        return this
    }
}

try{ 
 console.log(Number(objWithoutPrimitive))
}catch(e){
    console.log(e)
}
