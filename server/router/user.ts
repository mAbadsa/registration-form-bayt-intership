import { Router } from "express";
import { signup } from "../controller";
import { signupValidation } from "../middleware/validation";
import User from "../models/User";
import { boomify } from "../utils";

function userRouter() {
  const router: Router = Router();

  return router.post(
    "/signup",
    signupValidation({ boomify }),
    signup({ User, boomify })
  );
}

export default userRouter;

