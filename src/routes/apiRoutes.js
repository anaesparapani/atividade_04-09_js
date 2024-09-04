// Importa o módulo Router do express
// Router será utilizado para definir rotas específicas da aplicação
const router = require('express').Router();

// Importa a controller onde contém a lógica relacionada aos numbers
const numbersController = require('../controllers/controllersNumbers');

// Rota POST para '/numbers'
router.post('/numbers/',controllersNumbers.checkPar);
router.post('/numbersPrimos/',controllersNumbers.checkPrimo);

module.exports = router;