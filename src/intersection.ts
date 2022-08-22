// and는 둘다 만족해야 한다. 
type A = { hello: 'world'} & { seo: 'jeong'}

const aa: A = { hello: 'world', seo: 'jeong' }


// 또는 이라면 하나만 있어도 된다.
type B = { hello: 'world'} | { seo: 'jeong'}

const bb1: B = { hello: 'world' }
const bb2: B = { seo: 'jeong' }
const bb3: B = { hello: 'world', seo: 'jeong' }
