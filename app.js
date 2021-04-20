// http://makeup-api.herokuapp.com/api/v1/products.json

// Create dynamic drop down menu from first request

const baseUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json'
const lipCat = document.querySelector('.lip-dropdown')
const faceCat = document.querySelector('.face-dropdown')

const getOptions = async () => {
  const url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type"

  try {
    const response = await axios.get(url)
    const conArr = response.data.slice(0, 465)
    console.log(conArr)
    let eyeProd = []
    let lipProd = []
    let faceProd =[]
    conArr.forEach((product) => {
      if (product.product_type === "eyebrow" || product.product_type === "eyeliner" || product.product_type === "eyeshadow" || product.product_type === "mascara" ) {
        eyeProd.push(product)
      } else if (product.product_type === "lip_liner" || product.product_type === "lipstick" ) {
        lipProd.push(product)
      } else {
        faceProd.push(product)
      }
})
    // console.log("eye", eyeProd)
    // console.log("lip", lipProd)
    // console.log("face",faceProd)
  
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
  console.log(eyeList)
  const uniqueEye = eyeList.filter((x, i, a) => a.indexOf(x) === i)
  console.log(uniqueEye)
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
  // console.log(eyeOpValue)
  // getBreedImage(optionValue)
  return eyeOpValue
}







// Eventhandler for the Form









// Create dynamic image tag and append to DOM








// Remove previous product selection