export default class Fetch {
  constructor() {

  }

  request(obj) {
    fetch(obj.url, obj)
      .then(res => {
        console.log('>>>>> res', res)
      })
      .then(data => {
        console.log('>>>>> data', data)
      })
  }
}