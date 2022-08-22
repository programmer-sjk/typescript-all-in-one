export {}

interface Profile {
    name: string,
    age: number,
    married: boolean
}

const myProfile1 = {
    name: '서정국',
    age: 33,
    married: false
}

type A = Exclude<keyof Profile, 'married'> // 'name' | 'age'
type B = Extract<keyof Profile, 'married'> // 'married'
type BB = Extract<keyof Profile, 'name' | 'married'> // 'name' | 'married'
