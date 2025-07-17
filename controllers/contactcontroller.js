const asyncHandler = require("express-async-handler");
const Contact = require("../model/dbschema"); // ✅ Standard model name

// GET all contacts
const getcontact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// POST (create contact)
const createcontact = asyncHandler(async (req, res) => {
  const { name, email, phno } = req.body;

  if (!name || !email || !phno) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const contact = await Contact.create({ name, email, phno });
  res.status(201).json(contact);
});

// GET contact by ID
const getsinglecontact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json(contact);
});

// PUT (update contact)
const updatecontact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updated = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updated);
});

// DELETE contact
const deleteecontact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json({ message: "Contact deleted", contact });
});


// Export all
module.exports = {
  getcontact,
  createcontact,
  getsinglecontact,
  updatecontact,
  deleteecontact,
};
