// DEMO1
var a = 10
var obj = {
    a: 20
}

function test() {
    console.log(this.a)
}

test.call(obj)

// DEMO2    
var a = 20
var foo = {
    a: 10,
    getA: function() {
        return this.a
    }
}

var _getA = foo.getA
console.log(_getA())

// DEMO3
function test() {
    console.log(this.a)
}

function active(fn) {
    fn()
}

var a = 20
var obj = {
    a: 10,
    getA: test,
    active: active
}
active(obj.getA)

// DEMO4    
var a = 20
var obj = {
    a: 10,
    getA: function() {
        return function() {
            return this.a
        }
    }
}
console.log(obj.getA()())
