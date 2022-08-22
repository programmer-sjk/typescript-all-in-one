const enum EDirection {
    Up,
    Down,
    Left,
    Right,
}

const a = EDirection.Up

const obj = { a: '123', b: 'hell', c: 'hi'};
type types = typeof obj      // { a: string, b: string, c: string }
type keys = keyof typeof obj // 'a' | 'b' | 'c'
const obj2: types = { a: 'aa', b: 'bb', c: 'cc'}
const obj3: keys = 'a'
