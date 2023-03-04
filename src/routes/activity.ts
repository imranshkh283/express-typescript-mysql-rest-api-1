import { Router } from "express";

const router = Router();

import { create } from '../controller/activity';

router.post('/', create);

export default router;