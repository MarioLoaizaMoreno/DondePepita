const Store = require ("../models/almacen")

const registerStore = async (req, res) => {
    if (!req.body.name || !req.body.direction || !req.body.city)
      return res.status(401).send("process failed: Incomplete data");
  
    const existingStore = await Store.findOne({ name: req.body.name });
    if (existingStore)
      return res.status(401).send("process failed: store alredy exist");
  
    const store = new Store({
      name: req.body.name,
      direction: req.body.direction,
      city: req.body.city,
      dbStatus: true,
    });
  
    const result = await store.save();
    if (!result) return res.status(401).send("failed to register store");
  
    return res.status(200).send({ store });
  };
  
  const listStore = async (req, res) => {
      const store = await Store.find()
      if(!store) return res.status(401).send("No store")
      return res.status(200).send({store})
  };
  
  module.exports = { registerStore, listStore };