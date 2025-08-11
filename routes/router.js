
import { Router } from "express";
import { getAllItems } from "../controllers/controller.js"
import { getItemById } from "../controllers/controller.js"
import { addItem } from "../controllers/controller.js"

export const router = Router();

router.get('/items', (req, res) => {
    const items = getAllItems()
    res.json(items)
})

router.get('/items/:id', (req, res) => {
  const item = getItemById(req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item não encontrado' });
  }
});

router.post('/items', (req, res) => {
  const newItem = addItem(req.body);
  res.status(201).json(newItem);
});
