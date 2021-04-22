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
    lipOptions(lipProd)
    faceOptions(faceProd)
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



function lipOptions(list) {
  
  const lipList = list.map((product) => {
  return product.product_type
  })
  // console.log(eyeList)
  const uniqueLip = lipList.filter((x, i, a) => a.indexOf(x) === i)
  // console.log(uniqueEye)
  const lipCat = document.querySelector('#select-lip')
 uniqueLip.forEach((product) => {
    const lipProduct = document.createElement('option')
    lipProduct.innerText= product
    lipProduct.value = product
    lipCat.append(lipProduct)

  })
  

}

function faceOptions(list) {
  
  const faceList = list.map((product) => {
  return product.product_type
  })
  // console.log(eyeList)
  const uniqueFace = faceList.filter((x, i, a) => a.indexOf(x) === i)
  // console.log(uniqueEye)
  const faceCat = document.querySelector('#select-face')
 uniqueFace.forEach((product) => {
    const faceProduct = document.createElement('option')
    faceProduct.innerText= product
    faceProduct.value = product
    faceCat.append(faceProduct)

  })
  

}




// Select tag value from drop down menu

function getEyeValue(e) {
  e.preventDefault()
  const eyeOpValue = document.querySelector('#select-eye').value
  const selectedResultList = eyeProd.filter((val) => val.product_type === eyeOpValue)
  removeProduct()
  eyeRenderList(selectedResultList)
}


function getLipValue(e) {
  e.preventDefault()
  const lipOpValue = document.querySelector('#select-lip').value
  const selectedResultList = lipProd.filter((val) => val.product_type === lipOpValue)
  removeProduct()
  lipRenderList(selectedResultList)
}


function getFaceValue(e) {
  e.preventDefault()
  const faceOpValue = document.querySelector('#select-face').value
  const selectedResultList = faceProd.filter((val) => val.product_type === faceOpValue)
  removeProduct()
  faceRenderList(selectedResultList)
}




// Form Eventhandler 

const eyeForm = document.querySelector('#select-eye')
eyeForm.addEventListener('change', getEyeValue)

const lipForm = document.querySelector('#select-lip')
lipForm.addEventListener('change', getLipValue)

const faceForm = document.querySelector('#select-face')
faceForm.addEventListener('change', getFaceValue)




// Create Product Card
const eyeRenderList = (data) => {
  data.forEach((l) => {
    if (l.image_link !== 'N/A') {
      const prodCard = document.createElement('div')
      prodCard.className = 'product-card'

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
    eyeProdName.textContent = trimSentence(l.name)
    eyeProdPrice.textContent = `$ ${l.price}`
  
// append elements
      prodCard.appendChild(eyeProdImg)
      prodCard.appendChild(eyeBrand)
      prodCard.appendChild(eyeProdName)
      prodCard.appendChild(eyeProdPrice)
      
    document.querySelector(".product-container").append(prodCard) 
  
    }
  })
}



const lipRenderList = (data) => {
  data.forEach((l) => {
    if (l.image_link !== 'N/A') {
      const prodCard = document.createElement('div')
      prodCard.className = 'product-card'

    // creating elements
    const lipProdImg = document.createElement('img')
    const lipBrand = document.createElement('h4')
    const lipProdName = document.createElement('p')
    const lipProdPrice = document.createElement('p')
    // const eyeProdColor = document.createElement('p')

    // creating css names
    lipProdImg.className = 'lip-image'
    lipBrand.className = 'lip-brand'
    lipProdName.className = 'lip-name'
    lipProdPrice.className = 'lip-price'
    // eyeProdColor.className = 'eye-color'

// adding values to new elements
    lipProdImg.src = l.image_link
    lipBrand.textContent = l.brand
    lipProdName.textContent = trimSentence(l.name)
    lipProdPrice.textContent = `$ ${l.price}`
  
// append elements
      prodCard.appendChild(lipProdImg)
      prodCard.appendChild(lipBrand)
      prodCard.appendChild(lipProdName)
      prodCard.appendChild(lipProdPrice)
      
    document.querySelector(".product-container").append(prodCard) 
  
    }
  })
}



const faceRenderList = (data) => {
  data.forEach((l) => {
    if (l.image_link !== 'N/A') {
      const prodCard = document.createElement('div')
      prodCard.className = 'product-card'

    // creating elements
    const faceProdImg = document.createElement('img')
    const faceBrand = document.createElement('h4')
    const faceProdName = document.createElement('p')
    const faceProdPrice = document.createElement('p')
    // const eyeProdColor = document.createElement('p')

    // creating css names
    faceProdImg.className = 'face-image'
    faceBrand.className = 'face-brand'
    faceProdName.className = 'face-name'
    faceProdPrice.className = 'face-price'
    // eyeProdColor.className = 'eye-color'

// adding values to new elements
    faceProdImg.src = l.image_link
    faceBrand.textContent = l.brand
    faceProdName.textContent = trimSentence(l.name)
    faceProdPrice.textContent = `$ ${l.price}`
  
// append elements
      prodCard.appendChild(faceProdImg)
      prodCard.appendChild(faceBrand)
      prodCard.appendChild(faceProdName)
      prodCard.appendChild(faceProdPrice)
      
    document.querySelector(".product-container").append(prodCard) 
  
    }
  })
}



// Remove previous product selection

function removeProduct() {
  const removeProdDiv = document.querySelector('.product-container')
  while (removeProdDiv.lastChild) {
    removeProdDiv.removeChild(removeProdDiv.lastChild)
  }
}



// Trim Sentence function for product name
function trimSentence(string) {
  if (string.length > 30) {
    return `${string.substring(0, 20)}...`
  } else {
    return string
  }
}