// Firebase-база интенсива больше недоступна (401), поэтому товары берём из db/db.json.
// new URL(..., import.meta.url) говорит webpack положить файл в сборку и подставить его адрес
const dbUrl = new URL('../../db/db.json', import.meta.url)

const getData = () => {
    return fetch(dbUrl)
      .then(response => response.json())
      .then(data => data.goods)
}

export default getData
