const getData = () => {
    return fetch('https://o-zone-3474c-default-rtdb.firebaseio.com/goods.json')
      .then(response => response.json())
}

export default getData