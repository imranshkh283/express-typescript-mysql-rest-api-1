import { Router } from "express";

import { checkapi, createUser, updateUser } from '../controller/users';

const router = Router();

router.get("/", checkapi);

router.post('/', createUser);

router.post("/update/:id", updateUser);

export default router;