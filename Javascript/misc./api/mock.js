export const fetchCat = () =>
  new Promise((res) => setTimeout(() => res('cat'), 1000))
export const fetchDog = () =>
  new Promise((res) => setTimeout(() => res('dog'), 2000))
export const fetchRat = () =>
  new Promise((res) => setTimeout(() => res('rat'), 3000))
