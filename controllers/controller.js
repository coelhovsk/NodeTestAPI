import sampleData from "../data/sampledata"

module.exports = {
  getAllItems: () => sampleData,
  getItemById: (id) => sampleData.find(item => item.id === parseInt(id)),
  addItem: (newItem) => {
    const item = { id: sampleData.length + 1, ...newItem };
    sampleData.push(item);
    return item;
  }
};