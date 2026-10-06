/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { httpServerHandler } from "cloudflare:node";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello Express on Cloudflare Workers!"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    subject: "PaaS",
    week: 5,
    platform: "Cloudflare Workers"
  });
});

// Challenge 1 - Info aplikasi
app.get("/api/info", (req, res) => {
  res.json({
    framework: "Express",
    runtime: "Cloudflare Workers",
    course: "Platform as a Service"
  });
});

// Challenge 2 - Waktu server
app.get("/api/time", (req, res) => {
  res.json({
    time: new Date().toISOString()
  });
});

// Challenge 3 - Route parameter
app.get("/hello/:name", (req, res) => {
  const { name } = req.params;

  res.json({
    message: `Hello, ${name}!`,
    platform: "Cloudflare Workers"
  });
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });
