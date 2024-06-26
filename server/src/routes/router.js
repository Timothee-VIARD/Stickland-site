import express from 'express';
import ProductRouter from './ProductRouter.js';
import AdminRouter from './AdminRouter.js';
import AuthRouter from './AuthRouter.js';
import ProfileRouter from './ProfileRouter.js';
import OrderRouter from './OrderRouter.js';
import MailRouter from './MailRouter.js';

const router = express.Router();

router.use('/products', ProductRouter);
router.use('/admin', AdminRouter);
router.use('/auth', AuthRouter);
router.use('/profile', ProfileRouter);
router.use('/orders', OrderRouter);
router.use('/mail', MailRouter);

export default router;
