
const FavoriteBeverage = require("../models/favoriteBeverage");



const createFavorite = async(req,res)=>{
    try {
     console.log(req.body);
      const userId = await FavoriteBeverage.find({ user_id: req.body.userId });
        if (userId) {
          const newFavorite = await new FavoriteBeverage(req.body);
          await newFavorite.save();
          return res.status(201).send(newFavorite);
        }
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
}

const getAllFavorites = async (req, res) => {
    try {
      const { id } = req.params;
      const allFavorite= await Models.find({ user_id: id });
      return res.status(200).send(allFavorite);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
}
    

module.exports = {createFavorite , getAllFavorites}

