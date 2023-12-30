## Nutrition Facts Scanner

This project is an [Next.js](https://nextjs.org/) and [MongoDB](https://mongodb.com) project designed to make informed nutrition decisions by scanning UAN or UPC barcode formats on food products. Leveraging the [Browser Barcode Detection API](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API), NutriScan retrieves barcode numbers, calls [Open Food Facts](https://world.openfoodfacts.org/data) or [USDA](https://fdc.nal.usda.gov/api-guide.html) APIs to fetch nutrition facts, analyzes and rates each nutrients. The information is then presented graphically for users to easily understand and make informed decisions about the healthiness of a product.

This project inspired by the [Yuka App](https://yuka.io) which is my favorite app for grocery shopping.

![Screenshots](https://github.com/rezahedi/nutrition-facts-scanner/blob/main/public/Screenshots_20231219-120947-portrait.png)

## Features

- __Barcode Scanning:__ Utilizes the Browser Barcode Detection API to scan UAN or UPC barcodes on food products.
- __Nutrition Information:__ Fetches detailed nutrition facts from Open Food Facts or USDA APIs based on the scanned barcode.
- __Nutrient Analysis:__ Analyzes and rates each nutrient to provide an overall assessment of the product's healthiness.
- __Graphical Presentation:__ Presents nutrition information in a graphical format for easy comprehension.
- __Database Integration:__ MongoDB document-oriented database integrated to store fetched product data from third-party APIs to eliminating redundant API calls.

## Getting Started

Clone the repository, install dependencies, and run the development server:

```bash
git clone https://github.com/rezahedi/nutrition-facts-scanner.git
cd nutrition-facts-scanner
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

There are few environment variables that you need to set to run the project, So using .env.example file, create your .env file and set the following variables:

```bash
# To use USDA API, you need to set environment variables for the API secret. 
USDA_API_KEY="Your USDA Secret Key"
# To use MongoDB Atlas, you need to set environment variables for the database connection string.
DATABASE_URL="mongodb+srv://<username>:<password>@clusterName.example.mongodb.net/<DatabaseName>"
```

__NOTE__: One thing I always forget to do is to regenerate prisma client before deploying project to Vercel so I added vercel-build script/command to package.json file to do that for me:

```bash
{
  "scripts": {
    "vercel-build": "prisma generate && next build"
  }
}
```

Check the live demo at [https://nutrition-facts-scanner.vercel.app](https://nutrition-facts-scanner.vercel.app).

## Future Steps

It's a portfolio project and a ground for me to learn Next.js and TypeScript. I have plans to improve the project in the future:

- __Skeleton Placeholder:__ Add skeleton placeholder for better user experience while fetching data from database.
- __User Profiles and Authentication:__ Create user profiles for personalized experiences and implement user authentication.
- __Product History Display:__ Show a list of scanned products for each user in their profile.
- __PWA:__ Make the application a Progressive Web App for offline use and native app-like experience.

Contributions to the project are welcome! Feel free to submit issues, feature requests, or pull requests.

## License

This project is licensed under the MIT License.
