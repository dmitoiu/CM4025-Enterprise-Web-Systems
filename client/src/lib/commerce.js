import Commerce from "@chec/commerce.js";

const commerce = new Commerce(process.env.REACT_APP_ECOMMERCE, true);

export {commerce}