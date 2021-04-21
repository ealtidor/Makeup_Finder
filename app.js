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


// Retrieve Product Image
const renderList = (data) => {
  data.forEach((l) => {
    console.log(l.image_link)
    const eyeProdImg = document.createElement('img')
    eyeProdImg.className = 'eye-image'
    eyeProdImg.src = l.image_link
    document.querySelector(".product-card").append(eyeProdImg) 
  })

}


// Create dynamic image tag and append to DOM



// Remove previous product selection

