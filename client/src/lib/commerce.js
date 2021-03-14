// -----------------------------------------------------------------------
// Darie-Dragos Mitoiu
// RGU eShop (commerce.js) v1.0.0 13/03/2021
// A web application designed for a ecommerce shop
// -----------------------------------------------------------------------

// Importing components
import Commerce from "@chec/commerce.js";

// Create commerce object to fetch products
const commerce = new Commerce(process.env.REACT_APP_ECOMMERCE, true);

export {commerce}