export {}

function numOrStr(a: number | string) {
    a.split(',') // number 일 수 있으므로 에러
}

function numOrStr2(a: number | string) {
    if (typeof a === 'string') {
        a.split(',')
    } else {
        a.toFixed(1)
    }
}

class A {
    aaa() {}
}

class B {
    bbb() {}
}

function aOrB(param: A | B) {
    if (param instanceof A) {
        param.aaa()
    }
}
aOrB(new A())
aOrB(new B())
