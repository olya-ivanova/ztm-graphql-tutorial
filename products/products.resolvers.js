const productsModal = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return productsModal.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModal.getProductsByPrice(args.minPrice, args.maxPrice);
    },
    product: (_, args) => {
      return productsModal.getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsModal.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return productsModal.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
  },
};
