'use strict';

const DataModel = require('../memory.js');

class Categories extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      name: { required: true },
    };
  }
}

// class Product extends DataModel {
//   constructor() {
//     super();
//     this.schema = {
//       categoryId: { required: true },
//       quantityInStock: { required: true },
//     };
//   }
// }
module.exports = Categories;
// module.exports = Product;