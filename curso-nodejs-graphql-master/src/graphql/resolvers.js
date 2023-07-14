const { getProduct, getProducts, addProduct, deleteProduct, updateProduct } = require('./product.resolvers') 

const resolvers = {
    Query: {
        hello: () => `hola mundo`,
        getPerson: (_,args) => `Hello, my name is ${args.name}, Im ${args.age} years old!`,
        getInt: () => 1,
        getFloat: (_,args) => args.price,
        getString: () => "soy un string",
        getBoolean: () => true,
        getID: () => "1534545",
        
        //PRODUCTS
        product: getProduct,
        products: getProducts
        },
        Mutation: {
            addProduct,
            updateProduct,
            deleteProduct
        }
    }


module.exports = resolvers;