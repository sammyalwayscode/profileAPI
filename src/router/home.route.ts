import express, { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Server is Ready🚀🚀🚀",
  });
});

export default router;
