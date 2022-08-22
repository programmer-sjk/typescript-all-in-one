export {}

interface obj {
    [key: string]: number;
}

const a: obj = { 'a': 1, 'b': 2, 'c':3 }
const aa: Record<string, number> = { 'a': 1, 'b': 2, 'c':3 }

type customRecord<T extends keyof any, S> = {
    [key in T]: S
}

const aaa: customRecord<string, number> = { 'a': 1, 'b': 2, 'c':3 }
