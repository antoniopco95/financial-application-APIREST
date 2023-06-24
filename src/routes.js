const express = require('express');
const router = express.Router();
const acountController = require('./controllers/acountController');
const creatAcount = require('./controllers/createAcount');
const acountUpdate = require('./controllers/acountUpdate');
const acountDelete = require('./controllers/acountDelete');
const cashDeposit = require('./controllers/cashDeposit');

router.get('/contas', acountController.listAcounts);
router.post('/contas', creatAcount.createAcounts);
router.put(`/contas/:numero/usuario`, acountUpdate.acountUpdates);
router.delete('/contas/:numero', acountDelete.deleteAcount);
router.post('/transacoes/depositar', cashDeposit.depositAmount);


module.exports = router;
