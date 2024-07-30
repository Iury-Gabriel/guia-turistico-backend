import express from 'express';
import DestinoController from '../controllers/DestinoController';
import AtrativoController from '../controllers/AtrativoController';
import AuthController from '../controllers/AuthController';
import PasswordResetController from '../controllers/PasswordResetController';
import Database from '../models/Database';

const router = express.Router();
const database = new Database();

const destinoController = new DestinoController(database.getPrisma());
const atrativoController = new AtrativoController(database.getPrisma());
const authController = new AuthController();
const passwordResetController = new PasswordResetController();

router.post('/register', (req, res) => authController.register(req, res));
router.post('/login', (req, res) => authController.login(req, res));

// Rotas para redefinição de senha
router.post('/request-password-reset', (req, res) => passwordResetController.requestPasswordReset(req, res));
router.post('/reset-password/:code', (req, res) => passwordResetController.resetPassword(req, res));

// Rotas existentes
router.get('/destinos', (req, res) => destinoController.getAll(req, res));
router.get('/destinos/:id', (req, res) => destinoController.getById(req, res));
router.get('/atrativos/:destinoId', (req, res) => atrativoController.getByDestinoId(req, res));

module.exports = router;
