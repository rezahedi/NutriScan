## Nutrition Facts Scanner

This project is an [Next.js](https://nextjs.org/) project designed to make informed nutrition decisions by scanning UAN or UPC barcode formats on food products. Leveraging the [Browser Barcode Detection API](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API), NutriScan retrieves barcode numbers, calls [Open Food Facts](https://world.openfoodfacts.org/data) or [USDA](https://fdc.nal.usda.gov/api-guide.html) APIs to fetch nutrition facts, analyzes and rates each nutrients. The information is then presented graphically for users to easily understand and make informed decisions about the healthiness of a product.

This project inspired by the [Yuka App](https://yuka.io) which is my favorite app for grocery shopping.

![Screenshots](https://github.com/rezahedi/nutrition-facts-scanner/blob/main/public/Screenshots_20231219-120947-portrait.png)

## Features

- __Barcode Scanning:__ Utilizes the Browser Barcode Detection API to scan UAN or UPC barcodes on food products.
- __Nutrition Information:__ Fetches detailed nutrition facts from Open Food Facts or USDA APIs based on the scanned barcode.
- __Nutrient Analysis:__ Analyzes and rates each nutrient to provide an overall assessment of the product's healthiness.
- __Graphical Presentation:__ Presents nutrition information in a graphical format for easy comprehension.

## Getting Started

Clone the repository, install dependencies, and run the development server:

```bash
git clone https://github.com/rezahedi/nutrition-facts-scanner.git
cd nutrition-facts-scanner
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To use USDA API, you need to set environment variables for the API secret. Create a `.env` file in the root directory and add the following variable:

```bash
USDA_API_KEY="Your USDA Secret Key"
```

Check the live demo at [https://nutrition-facts-scanner.vercel.app](https://nutrition-facts-scanner.vercel.app).

## Future Steps

It's a portfolio project and a ground for me to learn Next.js and TypeScript. I have plans to improve the project in the future:

- __Database Integration:__ Design and implement a database to store scanned product data to eliminating redundant API calls and store user profiles and activities.
- __User Profiles and Authentication:__ Create user profiles for personalized experiences and implement user authentication.
- __Product History Display:__ Show a list of scanned products for each user in their profile.
- __Improved UI/UX:__ Enhance the user interface and experience for a more polished and user-friendly application.

Contributions to the project are welcome! Feel free to submit issues, feature requests, or pull requests.

## License

This project is licensed under the MIT License.
