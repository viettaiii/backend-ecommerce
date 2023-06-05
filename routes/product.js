const router = require("express").Router();
const {
    getProducts,getProductDetail,createProduct
 } = require('../controllers/product')
router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProductDetail);

module.exports = router;
