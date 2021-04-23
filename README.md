# Project Overview

## The Perfect Look - Makeup Finder
Works best in Safari browser:

https://ealtidor.github.io/Makeup_Finder/

## Project Description

This application will serve as a guide to users to help them identify type of cosmetic products and brands they can use to curate the Peferct Look. For novice users, they will be able to find an array of products based on category. However, for more experienced makeup applicators, they can use the makeup finder to identify an alternative to products that no longer work for them. 

## API and Data Sample
http://makeup-api.herokuapp.com/api/v1/products.json

```
"id": 1048,
        "brand": "colourpop",
        "name": "Lippie Pencil",
        "price": "5.0",
        "price_sign": "$",
        "currency": "CAD",
        "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
        "product_link": "https://colourpop.com/collections/lippie-pencil",
        "website_link": "https://colourpop.com",
        "description": "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!",
        "rating": null,
        "category": "pencil",
        "product_type": "lip_liner",
        "tag_list": [
            "cruelty free",
            "Vegan"
        ],
        "created_at": "2018-07-08T23:45:08.056Z",
        "updated_at": "2018-07-09T00:53:23.301Z",
        "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/1048.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531093614",
        "product_colors": [
            {
                "hex_value": "#B28378",
                "colour_name": "BFF Pencil"
            },
            {
                "hex_value": "#A36B5E",
                "colour_name": "951 Pencil
```


## Wireframes

WIREFRAMES
https://whimsical.com/the-perfect-look-37VHjqGnQG5ycd4aRB7poY@2Ux7TurymNXDuGzK8512

### MVP/PostMVP  

#### MVP 

- Connect external api to the webpage
- Render a list of product types by category
- Search for product types by using search bar



#### PostMVP  

- Add second API
- Allow user to create a profile
- Allow user to get a quick view of the product before fully clicking on the item to view product detail
- Provide user a list of where the items are available for purchase
- Identify coupons for items listed in user's favorites
- Allow user to choose favorites 
- Allow user to remove items from favorites
- Create a display showing that the page is still loading
- Remove products that do not have an image
- Display product type name above product cards
- Divide page by section by displaying product type name when selecting category from navigation bar

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|April 19| Project Approval | Complete
|April 20| Core Application Structure (HTML, CSS, etc.) | Complete
|April 20| Pseudocode / actual code | Complete
|April 21| Initial Clickable Model  | Complete
|April 21| Initial Clickable Model / CSS Styling | Complete
|April 22| MVP | Complete
|April 23| Presentations | Complete

## Priority Matrix

https://whimsical.com/the-perfect-look-prioritization-matrix-DXbvqC3ZEiH8yPxcr8JCv7@LUSUr8hW5mbKd9Zh6j

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create HTML,JS & CSS sheets and complete all needed integrations | H | 1hrs| 1hrs | 1hrs |
| Create HTML Layout | H | 3hrs| 3hrs | 3hrs |
| Pseudocode JS sheet | H | 1hrs| 0.5hrs | 0.5hrs |
| Working with API | H | 3hrs| 7hrs | 7hrs |
| Navigation Bar | H | 3hrs| 3hrs | 3hrs |
| Create Product Dropdowns| H | 3hrs| 4hrs | 4hrs |
| Create Product Cards | H | 6hrs| 3hrs | 3hrs |
| Create Search Bar | H | 3hrs| 3hrs | 3hrs |
| Webpage Responsiveness | H | 3hrs| 4hrs | 4hrs |
| CSS Styling | H | 5hrs| 6hrs | 6hrs |
| Review of Functionality | H | 2hrs| 1hrs | 1hrs |
| Presentation Run Through | H | 1hrs| 1hrs | 1hrs |
| Total | H | 37hrs| 36.5hrs | 36.5hrs |

## Code Snippet

I originally had 3 different functions executing the same tasks for each of my product catergories. After I ensured that I had all the functionality on my page, I went back and refactored the code to just one huge function. I was also able to include a function that addressed any broken image links.

```
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
```

## Change Log
 - Moved the favorites functionality to PMVP due to inability to store users selections. 
 - Had difficulty removing products with broken image links, so I just replaced them with an image that reads "No Image Available" 
