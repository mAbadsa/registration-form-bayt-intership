import { Router } from "express";
import userRouter from "./user";

function router() {
  const router: Router = Router();

  return router.use(userRouter());
}

export default router;

