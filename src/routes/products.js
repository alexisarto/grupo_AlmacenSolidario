var express = require('express');
const productsController = require('../controllers/productsController');
var router = express.Router();
var path = require('path');
const upload = require('../middlewares/productsMulter');
var adminMiddleware = require('../middlewares/adminMiddleware');
const validations = require('../middlewares/validations');

/* GET products add. */
router.get('/agregar-producto', productsController.productAdd);
/* POST products store. */
router.post('/agregar-producto', upload.any(), validations.productAddForm, productsController.productStore);

/* GET detalle producto*/
router.get('/detalleProducto/:id', productsController.detalleProducto);

/* GET todos los productos*/
router.get('/almacen', productsController.almacen);
router.get('/almacen1', productsController.almacen1);
router.get('/almacen2', productsController.almacen2);
router.get('/almacen3', productsController.almacen3);


router.get('/almacen/almacen/arrozYFideos', productsController.almacenArrozYFideos);
router.get('/almacen/almacen/conservas', productsController.almacenConservas);
router.get('/almacen/almacen/infusionesCacao', productsController.almacenInfusionesCacao);
router.get('/almacen/almacen/sopasCaldosPure', productsController.almacenSopasCaldosPure);
router.get('/almacen/almacen/mermeladasYDulces', productsController.almacenMermeladasYDulces);
router.get('/almacen/almacen/premezclaPostres', productsController.almacenPremezclaPostres);
router.get('/almacen/almacen/panaderiaGalletitas', productsController.almacenPanaderiaGalletitas);
router.get('/almacen/almacen/harinas', productsController.almacenHarinas);
router.get('/almacen/almacen/aceitesYAderezos', productsController.almacenAceitesYAderezos);
router.get('/almacen/almacen', productsController.categoriaAlmacen);

router.get('/almacen/lacteos/dulceDeLeche', productsController.lacteosDulceDeLeche);
router.get('/almacen/lacteos/lecheLargaVida', productsController.lacteosLecheLargaVida);
router.get('/almacen/lacteos/lecheEnPolvo', productsController.lacteosLecheEnPolvo);
router.get('/almacen/lacteos', productsController.categoriaLacteos);

router.get('/almacen/perfumeria', productsController.categoriaPerfumeria);

router.get('/almacen/bebidas/aguaMineral', productsController.bebidasAguaMineral);
router.get('/almacen/bebidas/gaseosas', productsController.bebidasGaseosas);
router.get('/almacen/bebidas', productsController.categoriaBebidas);

router.get('/almacen/limpieza/piso', productsController.limpiezaPiso);
router.get('/almacen/limpieza/banio', productsController.limpiezaBanio);
router.get('/almacen/limpieza/cocina', productsController.limpiezaCocina);
router.get('/almacen/limpieza/papeles', productsController.limpiezaPapeles);
router.get('/almacen/limpieza', productsController.categoriaLimpieza);

router.get('/almacen/bebes/paniales', productsController.bebesPaniales);
router.get('/almacen/bebes/oleoCalcareo', productsController.bebesOleoCalcareo);
router.get('/almacen/bebes', productsController.categoriaBebes);

/* GET product edit */
router.get('/editar-producto/:id', productsController.productEdit);
router.get('/editar-producto/:id/image', productsController.productEditImage);
/* POST product edit */
router.post('/editar-producto/:id', upload.any(), productsController.productUpdate);
router.post('/editar-producto/:id/image', upload.any(), productsController.productUpdateImage);

/* GET product destroy */
router.post('/destroy/:id', productsController.destroy);

/* GET products list. */
router.get('/list', adminMiddleware, productsController.list);

/* Products agregar marca, unidad, categoria y subcategoria*/
router.get('/agregarmarca', productsController.brandAdd);
router.post('/agregarmarca', productsController.brandStore);
router.post('/agregarunidad', productsController.unidadStore);
router.post('/agregarcategoria', productsController.categoryStore);
router.post('/agregarsubcategoria', productsController.subCategoryStore);

module.exports = router;