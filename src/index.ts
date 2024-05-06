import express from 'express';
import { initServer } from './app';
const port: number = 3001;

async function init() {
  const app = await initServer();
  app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
}

init();