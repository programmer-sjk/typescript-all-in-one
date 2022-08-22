export {}

interface Profile {
    name?: string,
    age?: number,
    married?: boolean
}

interface readProfile {
    readonly name?: string,
    readonly age?: number,
    readonly married?: boolean
}

const myProfile1: Required<Profile> = {
    name: '서정국',
    age: 33,
    married: true
}

type R<T> = {
    [key in keyof T]-?: T[key] // -?를 붙이면 ?를 마이너스 해서 제거한다.
}

const myProfile2: R<Profile> = {
    name: '서정국',
    age: 33,
    married: true
}

type writeR<T> = {
    -readonly [key in keyof T]: T[key] // -readolny를 붙이면 readonly가 제거된다.
}

const myProfile3: writeR<readProfile> = {
    name: '서정국',
    age: 33,
    married: true
}

myProfile3.name = '오 -readonly로 제거가 되네???'

