// controller.js
import { sampleData } from "../data/sampledata.js";

export function getAllItems() {
  return sampleData;
}

export function getItemById (id) { return sampleData.find(item => item.id === parseInt(id))}

export function addItem (newItem) { 
    const item = { id: sampleData.length + 1, ...newItem }
    sampleData.push(item)
    return item
}