
// all the imports here
import { Product } from "./product.interface";
import ProductModel from "./product.model";

// create product and save into db
const createProductIntoDb = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
};

// get all the data from db
const getProductsFromDb = async () => {
    const result = await ProductModel.find();
    return result;
}

// get single product from db by id
const getSingleProductFromDbById = async (id: string) => {
    const result = await ProductModel.findOne({_id: id});
    return result;
}

// update single product information
const updateSingleProductIntoDb = async (id: string, product: Product) => {
    const getProduct = await ProductModel.findOne({_id: id});
    return getProduct;
}

// all the exports here
export const productServices = {
    createProductIntoDb,
    getProductsFromDb,
    getSingleProductFromDbById,
    updateSingleProductIntoDb,
}