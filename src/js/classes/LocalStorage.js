export default class LocalStorage {
  constructor(storageName) {
    this.storageName = storageName;
  }

  getItem(def) {
    const item = localStorage.getItem(this.storageName);
    if (!item && def) this.setItem(def);
    return item === null ? null : JSON.parse(item);
  }

  setItem(value) {
    localStorage.setItem(this.storageName, JSON.stringify(value));
  }
}