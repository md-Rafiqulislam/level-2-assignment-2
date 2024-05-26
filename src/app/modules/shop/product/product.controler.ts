
// all the imports here
import { Request, Response } from "express";
import { productServices } from "./product.service";

// create product controler
const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await req.body;
        const result = await productServices.createProductIntoDb(product);

        // send response
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Product can not created for something unusual",
        })
    }
};

// get all the products
const getAllProdcuts = async (req: Request, res: Response) => {
    try {
        const result = await productServices.getProductsFromDb();

        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Product can not retrive for something unusual",
        })
    }
}

// get single product by id
const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productServices.getSingleProductFromDbById(productId);

        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Product can not find",
        });
    }
}

// updata product information
const updateSingleProductInformation = async (req: Request, res: Response) => {
    try {
        const {productId} = req.params;
        const product = req.body;
        const result = await productServices.updateSingleProductIntoDb(productId, product);

        res.status(200).json({
            success: true,
            message: "roduct updated successfully!",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Product can not update the product for some reason",
        });
    }
}

// all the exports here
export const productControlers = {
    createProduct,
    getAllProdcuts,
    getSingleProduct,
    updateSingleProductInformation,
};