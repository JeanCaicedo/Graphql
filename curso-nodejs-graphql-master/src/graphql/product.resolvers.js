
const ProductsService = require('./../services/product.service');
const service = new ProductsService();

const getProduct = async (_, { id }) => {
    const product = await service.findOne(id);
    return product;
}
const getProducts =  async (_, { id }) => {
    const products = await service.find({});
    return products;
}

const addProduct = async (_, { dto }) => {
    const newProduct = await service.create(dto);
    return newProduct;
}

const updateProduct = async (_, {id, dto }) => {
    return service.update(id, dto);
}

const deleteProduct = async (_, { id }) => {
     service.delete(id);
     return id 
}

module.exports = { getProduct, getProducts, addProduct, updateProduct, deleteProduct };