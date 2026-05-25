import express from "express";
import type { Application } from "express";
import todoRouter from "./todo/routes.js";
export function createServerApp(): Application {
  const app = express();

  app.get("/", function (req, res) {
    res.status(200).json({
      message: "Kya haal hai !",
    });
  });
  app.get("/me", function (req, res) {
    res.status(200).json({
      message: "Main tera Main tera !",
    });
  });
  return app;
}
