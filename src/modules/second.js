import getData from "./getData"
import postData from "./postData"
const second = () => {
    getData().then((data) => {
        console.log(data)
    })
    const cartBtn = document.getElementById('cart')
    cartBtn.addEventListener('click', (e)=>{

        // e.preventDefault()
        // postData().then((data) => {
        //     console.log(data)

        // })
    })
}

export default second