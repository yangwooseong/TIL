export {}

interface IFish {
  type: 'FISH'
  swim: () => void
}

interface IBird {
  type: 'BIRD'
  fly: () => void
}

type TAnimal = IFish | IBird

function isFish(animal: TAnimal): animal is IFish {
  return (animal as IFish).swim !== undefined
}

/*
union 타입일 경우에는 공통 속성만 사용가능하기 때문에
타입 가드를 사용하여 다른 속성도 사용가능하게 하자. 
타입 가드를 사용하지 않으면 type assertion 을 일일이 사용해야 함
 */

function moveAnimal(animal: TAnimal) {
  if (isFish(animal)) {
    animal.swim()
    console.log(animal.type)
  } else {
    animal.fly()
    console.log(animal.fly)
  }

  console.log((animal as IBird).type)
  console.log((animal as IBird).fly)
}

/* 
tuple vs array
*/

const arr: string[] = ['a', 'b', 'c']
// arr: 길이 아무렇게나 지정 가능, arr[3] 접근 가능
console.log(arr[3])

/*
도대체 제네릭을 언제 써야 잘 썼다고 소문이 나는걸까?

*/

// 1) 함수의 argument 에 object가 있고 그 키값들을 쓸 때 키의 타입을 지정해줄 수가 있음
function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]) {
  let result = {} as Pick<T, K>
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}

const language = {
  name: 'TypeScript',
  age: 8,
  extensions: ['ts', 'tsx'],
}

const ageAndExtensions = pickObjectKeys(language, ['age', 'extensions'])

// 2) return 타입을 내가 원하는 대로 지정가능

type ProgrammingLanguage = {
  name: string
}
function identity<T>(value: T): T {
  return value
}

const result = identity<ProgrammingLanguage>({ name: 'TypeScript' })

// 3) promise 반환 값의 타입을 선언할 때
type User = {
  name: string
}

const wrapper = async () => {
  // wrapper just for warning
  async function fetchApi<ResultType>(path: string): Promise<ResultType> {
    const response = await fetch(`https://example.com/api${path}`)
    return response.json()
  }
  const data = await fetchApi<User[]>('/users')
  console.log(data)
}

export {}

// practice

interface user {
  name: 'abc'
}

type myuser<T> = {
  [K in keyof T]: boolean
}

const me: myuser<user> = {
  name: true,
}
