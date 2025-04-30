export default class LocalStorage {
  constructor(storageName) {
    this.storageName = storageName;
  }

  getItem() {
    const item = localStorage.getItem(this.storageName);
    return item === null ? null : JSON.parse(item);
  }

  setItem(value) {
    localStorage.setItem(this.storageName, JSON.stringify(value));
  }
}