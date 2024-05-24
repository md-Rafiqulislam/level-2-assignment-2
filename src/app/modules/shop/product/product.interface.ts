
// inventory type
export type Inventory = {
    quantity: number;
    inStock: boolean;
};

// varient type
export type Variant = {
    type: string;
    value: string;
};

// the final product type
export type Product = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Variant[];
    inventory: Inventory;
};
