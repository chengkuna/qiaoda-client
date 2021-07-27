// @ts-ignore
export default class Storage {
  get(key: string): any {
    const result = localStorage.getItem(key)
    return result ? JSON.parse(result) : result
  }
  set<T>(key: string, value: T | any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  remove(key: string): void {
    localStorage.removeItem(key)
  }
  removeAll(): void {
    localStorage.clear()
  }
}
