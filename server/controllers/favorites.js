
const FavoriteBeverage = require("../models/favoriteBeverage");



const createFavorite = async(req, res)=>{
    try {
    
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
      console.log(id);
      const allFavorite= await FavoriteBeverage.find({ user_id: id });
      return res.status(200).send(allFavorite);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
}

// const deleteFavorite = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const beverage = await FavoriteBeverage.findById(id);
//       if (!beverage) {
//         return res.status(404).json({ msg: "Beverage not found" });
//       }
//       if (beverage.user.toString() !== req.user.id) {
//         return res.status(401).json({ msg: "User not authorized" });
//       }
//       await beverage.remove();
//       res.json({ msg: "Favorite Beverage remove" });
//     } catch (error) {
//       console.error(err.message);
//       return res.status(500).send("Server Error");
//     }
//   };
  
    

module.exports = {createFavorite , getAllFavorites}

