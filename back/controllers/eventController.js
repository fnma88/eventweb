const Event = require("../models/event.js");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}
// Display the specified resource.
async function show(req, res) {
  try {
    const event = await Event.findOne({ name: req.params.name });
    res.status(200).json(event);
  } catch (error) {
    res.status(404).json({ message: "error" });
  }
}

// Show the form for creating a new resource
async function create(req, res) {
  try {
    const newEventData = req.body;
    const newEvent = await Event.create(newEventData);
    res.json(newEvent);
  } catch (error) {
    console.log(error);
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const eventId = req.params.id;
    const fieldsToEdit = req.body;

    const updatedEventData = await Event.updateOne({ eventId }, fieldsToEdit);

    res.json(updatedEventData);
  } catch (error) {
    console.log(error);
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const id = req.params.id;
    const event = await Event.findByIdAndUpdate(req.event.sub, {
      $pull: { event: id },
    });

    if (event) {
      await event.findByIdAndRemove(id);
      res.status(200).json({ message: "Event deleted successfully" });
    } else {
      res.status(400).json({ message: error });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
}
