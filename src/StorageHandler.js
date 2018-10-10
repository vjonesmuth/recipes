/**
 * Handle storage of data.
 */
export default class StorageHandler {

  /**
   * StorageHandler constructor.
   * 
   * @param {*} storageKey 
   * @public
   */
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  /**
   * Write the data to a storage.
   */
  writeData = (data) => {
    console.log('writeData data :', data);
    let json = JSON.stringify(data);
    localStorage.setItem(this.storageKey, json);
  };

  /**
   * Get the data from storage.
   */
  getData = key => {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }
}
