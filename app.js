// http://makeup-api.herokuapp.com/api/v1/products.json

// Create dynamic drop down menu from first request

const baseUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json'
const eyeCat = document.querySelector('.eye-dropdown')
const lipCat = document.querySelector('.lip-dropdown')
const faceCat = document.querySelector('.face-dropdown')

const getOptions = async () => {
  // const url = 'http://makeup-api.herokuapp.com/api/v1/products.json'
  const url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type"

  try {
    const response = await axios.get(url)
    console.log(response.data)
}
  catch (error) {
    console.error(error)
  }
}

getOptions()



// Create the form option menu/tags












// Select tag value from drop down menu








// Eventhandler for the Form









// Create dynamic image tag and append to DOM








// Remove previous product selection