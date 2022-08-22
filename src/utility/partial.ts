export {}
interface Profile {
    name: string,
    age: number,
    married: boolean
}

type P<T> = {
    [Key in keyof T]?: T[Key];
}

const myProfile1 = {
    name: '서정국',
    age: 33,
    married: false
}

const myProfile2: Partial<Profile> = {
    name: '서정국',
    age: 33,
}

const myProfile3: P<Profile> = {
    name: '서정국',
    age: 33,
}
