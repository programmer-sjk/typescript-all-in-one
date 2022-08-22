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

type PPick<T, S extends keyof T> = {
    [key in S]: T[key]
}

const myProfile2: PPick<Profile, 'name' | 'age'> = {
    name: '서정국',
    age: 33,
}

const myProfile3: Pick<Profile, 'name' | 'age'> = {
    name: '서정국',
    age: 33,
}
