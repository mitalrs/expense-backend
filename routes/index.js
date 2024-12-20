import { Router } from "express";
import TransactionsApi from "./TransactionsApi.js";
import AuthApi from "./authApi.js";
import UserApi from "./UserApi.js";
import CategoryApi from "./CategoryApi.js";
import passport from 'passport';

const router = Router();
const auth = passport.authenticate('jwt', { session: false });

router.use("/transaction", auth, TransactionsApi);
router.use("/auth", AuthApi);
router.use("/user", UserApi);
router.use("/category", auth, CategoryApi);


export default router;