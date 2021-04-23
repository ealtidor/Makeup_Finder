// http://makeup-api.herokuapp.com/api/v1/products.json

// Search feature
// Referenced: https://www.jamesqquick.com/blog/build-a-javascript-search-bar

let conArr = null;

const searchProduct = document.getElementById('search')
searchProduct.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchString = document.querySelector('#search-product').value

  const filteredProducts = conArr && conArr.filter(product => {
    return product.product_type?.includes(searchString) || product.brand?.includes(searchString) || product.name?.includes(searchString)
  })
  removeProduct()
  productRenderList(filteredProducts)
})

const getProduct = document.querySelector('.search-btn')
getProduct.addEventListener('onclick', searchProduct)

// Retrieving API Data

let eyeProd = []
let lipProd = []
let faceProd =[]

const getOptions = async () => {
  const url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type"
  try {
    const response = await axios.get(url)
    conArr = [...response.data]

    // Removes underscore from lip_liner
    conArr = conArr.map((a) => {
      if (a.product_type === "lip_liner") {
        a.product_type = a.product_type.replace(/_/g, " ") 
      }
      return a
    } )
  
//  Pulls in product type value
   
    conArr.forEach((product) => {
      if (product.product_type === "eyebrow" || product.product_type === "eyeliner" || product.product_type === "eyeshadow" || product.product_type === "mascara" ) {
        eyeProd.push(product)
      } else if (product.product_type === "lip liner" || product.product_type === "lipstick" ) {
        lipProd.push(product)
      } else if (product.product_type === "bronzer" || product.product_type === "blush" || product.product_type === "foundation") {
        faceProd.push(product)
      }
      else {
        delete product.product_type
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
  
  // Prevents duplicates in dropdown
  const uniqueEye = eyeList.filter((x, i, a) => a.indexOf(x) === i)
  
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
  
  const uniqueLip = lipList.filter((x, i, a) => a.indexOf(x) === i)
  
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
  
  const uniqueFace = faceList.filter((x, i, a) => a.indexOf(x) === i)
  
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
  productRenderList(selectedResultList)
}


function getLipValue(e) {
  e.preventDefault()
  const lipOpValue = document.querySelector('#select-lip').value
  const selectedResultList = lipProd.filter((val) => val.product_type === lipOpValue)
  removeProduct()
  productRenderList(selectedResultList)
}


function getFaceValue(e) {
  e.preventDefault()
  const faceOpValue = document.querySelector('#select-face').value
  const selectedResultList = faceProd.filter((val) => val.product_type === faceOpValue)
  removeProduct()
  productRenderList(selectedResultList)
}






// Form Eventhandler 

const eyeForm = document.querySelector('#select-eye')
eyeForm.addEventListener('change', getEyeValue)

const lipForm = document.querySelector('#select-lip')
lipForm.addEventListener('change', getLipValue)

const faceForm = document.querySelector('#select-face')
faceForm.addEventListener('change', getFaceValue)




// Create Product Card

const productRenderList = (data) => {
  data.forEach((l) => {
    if (l.image_link !== 'N/A') {
      const prodCard = document.createElement('div')
      prodCard.className = 'product-card'

    // creating elements
    const prodImg = document.createElement('img')
    const prodBrand = document.createElement('h4')
    const prodName = document.createElement('p')
    const prodPrice = document.createElement('p')
    

    // creating css names
    prodImg.className = 'prod-image'
    prodBrand.className = 'prod-brand'
    prodName.className = 'prod-name'
    prodPrice.className = 'prod-price'
    

// adding values to new elements
    prodImg.src = l.image_link
    prodBrand.textContent = l.brand
    prodName.textContent = trimSentence(l.name)
    prodPrice.textContent = `$${l.price}0`
  
// append elements
      prodCard.appendChild(prodImg)
      prodCard.appendChild(prodBrand)
      prodCard.appendChild(prodName)
      prodCard.appendChild(prodPrice)
      
    document.querySelector(".product-container").append(prodCard) 
  
    }
  })
  // Replaces Broken Images
  // Referenced: https://stackoverflow.com/questions/92720/jquery-javascript-to-replace-broken-images
  document.querySelectorAll('img').forEach((img) => {
    img.onerror = function() {
      this.src = "data:image/png;base64,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";
    }
  });
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
  if (string.length > 25) {
    return `${string.substring(0, 20)}...`
  } else {
    return string
  }
}


// Navigation Bar Reference Link


const navLink = document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', navSelection)
})

function navSelection(e) {
  const linkContent = e.target.textContent
  removeProduct()
  if (linkContent === "EYE") {
    productRenderList(eyeProd)
  } else if (linkContent === "LIP") {
    productRenderList(lipProd)
  } else {
    productRenderList(faceProd)
  }
}
