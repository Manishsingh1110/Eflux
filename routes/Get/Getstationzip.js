const express = require('express');
const router = express.Router();
var fetchuser = require('../../middleware/fetch')
const batterymodel = require('../../models/Deletebatteryrequest');
const bookingmodel = require('../../models/Deleterequest');
router.post('/', fetchuser, async (req, res) => {
  ("Processing a add a station");
  try {
    const savedbatterybooking = await batterymodel.find({Station:req.user.id}).populate("Battery").populate("Station").populate("Customer")
    const savedstationbooking = await bookingmodel.find({Station:req.user.id}).populate("Slot").populate("Station").populate("Timeslot").populate("Customer")
    const data={
        savedbatterybooking:savedbatterybooking,
        savedstationbooking:savedstationbooking
    }
    return res.status(200).json({ data });
  }
  catch (error) {
    return res.status(500).json({ err: error.message });
  }
})
module.exports = router;