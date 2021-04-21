// http://makeup-api.herokuapp.com/api/v1/products.json

// Create dynamic drop down menu from first request


let eyeProd = []
let lipProd = []
let faceProd =[]

const getOptions = async () => {
  const url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type"
  try {
    const response = await axios.get(url)
    const conArr = response.data.slice(0, 465)

    console.log(conArr)
   
    conArr.forEach((product) => {
      if (product.product_type === "eyebrow" || product.product_type === "eyeliner" || product.product_type === "eyeshadow" || product.product_type === "mascara" ) {
        eyeProd.push(product)
      } else if (product.product_type === "lip_liner" || product.product_type === "lipstick" ) {
        lipProd.push(product)
      } else {
        faceProd.push(product)
      }
})
  
    eyeOptions(eyeProd)
}
  catch (error) {
    console.error(error)
  }
}

getOptions()



// Create the form option menu/tags


function eyeOptions(list) {
  
  const eyeList = list.map((product) => {
  return product.product_type
  })
  // console.log(eyeList)
  const uniqueEye = eyeList.filter((x, i, a) => a.indexOf(x) === i)
  // console.log(uniqueEye)
  const eyeCat = document.querySelector('#select-eye')
 uniqueEye.forEach((product) => {
    const eyeProduct = document.createElement('option')
    eyeProduct.innerText= product
    eyeProduct.value = product
    eyeCat.append(eyeProduct)

  })
  

}





// Select tag value from drop down menu

function getEyeValue(e) {
  e.preventDefault()
  const eyeOpValue = document.querySelector('#select-eye').value
  // console.log(eyeProd)
  // product_type: "eyeliner"
  const selectedResultList = eyeProd.filter((val) => val.product_type === eyeOpValue )
  renderList(selectedResultList)
}





// Form Eventhandler 

const eyeForm = document.querySelector('#select-eye')
eyeForm.addEventListener('change', getEyeValue)


// Create Product Card
const renderList = (data) => {
  data.forEach((l) => {
    if (l.image_link !== 'undefined') {

    // creating elements
    const eyeProdImg = document.createElement('img')
    const eyeBrand = document.createElement('h4')
    const eyeProdName = document.createElement('p')
    const eyeProdPrice = document.createElement('p')
    // const eyeProdColor = document.createElement('p')

    // creating css names
    eyeProdImg.className = 'eye-image'
    eyeBrand.className = 'eye-brand'
    eyeProdName.className = 'eye-name'
    eyeProdPrice.className = 'eye-price'
    // eyeProdColor.className = 'eye-color'

// adding values to new elements
    eyeProdImg.src = l.image_link
    eyeBrand.textContent = l.brand
    eyeProdName.textContent = l.name
    eyeProdPrice.textContent = `$ ${l.price}`
  
// append elements
    document.querySelector(".product-card").append(eyeProdImg) 
    document.querySelector(".product-card").append(eyeBrand)
    document.querySelector(".product-card").append(eyeProdName)
    document.querySelector(".product-card").append(eyeProdPrice)

    }
  })
// console.log(renderList)
}





// Remove previous product selection

function removeImage() {
  const removeImageDiv = document.querySelector('.product-card')
  while (removeImageDiv.lastChild) {
    removeImageDiv.removeChild(removeImageDiv.lastChild)
  }
}