const express = require('express');
const router = express.Router();
const Cracker = require('../models/cracker');

// Define CRUD routes for crackers

// Create a new cracker
router.post('/', async (req, res) => {
    try {
        const { cracker_id,cracker_name, price_per_box, quantity } = req.body.newCracker;
        const total_price = price_per_box * quantity;
        const available_quantity = quantity;
        const newCracker = await Cracker.create({
            cracker_id,
            cracker_name,
            price_per_box,
            quantity,
            available_quantity,
            total_price,
        });
        res.status(201).json(newCracker);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve all crackers
router.get('/', async (req, res) => {
    try {
        const crackers = await Cracker.findAll();
        res.status(200).json(crackers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve a specific cracker by ID
router.get('/:id', async (req, res) => {
    try {
        const cracker = await Cracker.findByPk(req.params.id);
        if (cracker) {
            res.status(200).json(cracker);
        } else {
            res.status(404).json({ message: 'Cracker not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a cracker by ID
router.put('/', async (req, res) => {
   try {
    const crackersToUpdate = req.body; // Array of crackers to update (received from the frontend)
    
    console.log(crackersToUpdate);
    // Loop through the array and update the quantity of each cracker in the database
    for (const cracker of crackersToUpdate) {
      const { id, quantity } = cracker;
        console.log(id);
      // Find the cracker by ID and get its original quantity
      const originalCracker = await Cracker.findByPk(id);
      if (originalCracker) {
        // Calculate the updated quantity by subtracting the sent quantity from the original quantity
        const updatedQuantity = originalCracker.available_quantity - quantity;
        console.log(updatedQuantity);
        // Update the cracker's quantity in the database
        await Cracker.update({ available_quantity: updatedQuantity }, {
          where: {
            cracker_id: id
          }
        });
      }
    }

    res.status(200).json({ message: 'Crackers quantity updated successfully' });
  } catch (error) {
    console.error('Error updating crackers quantity:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a cracker by ID
router.delete('/:id', async (req, res) => {
    // Delete logic here
});

module.exports = router;
