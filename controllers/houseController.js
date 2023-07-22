const phoneBookDao = require("../services/phoneBookService.js");
const phoneBookService = phoneBookDao.getInstance();

const getAll = async (req, res) => {
  try {
    const contacts = await phoneBookService.getAll();
    return res.json(contacts);
  } catch (err) {
    console.log(err);
  }
};
const createContact = async (req, res) => {
  try {
    const name = req.body.name
    const phoneNumber = req.body.phoneNumber;
    const lastName = req.body.lastName;

    const createContact = await phoneBookService.createContact(phoneNumber, name, lastName);

    res.json({createContact});
  } catch (err) {
    console.log(err);
  }
};
const deleteContact = async (req, res) => {
  try {
    const name = req.body.name
    const phoneNumber = req.body.phoneNumber;
    const lastName = req.body.lastName;
    const deleteContact = await phoneBookService.deleteContact(phoneNumber, name, lastName);
    res.json({deleteContact });
  } catch (err) {
    console.log(err);
  }
};
const updateContact = async (req, res) => {
  try {
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const lastName = req.body.lastName;
    const find = req.body.find;
    const updateContact = await phoneBookService.updateContact(phoneNumber, name, lastName, find)
    res.json({updateContact});
  } catch (err) {
    console.log(err);
  }
};
const findContact = async (req, res) => {
  try {
    const find = req.body.find;
    const findContact = await phoneBookService.findContact(find)
    res.json({findContact});
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  createContact,
  updateContact,
  deleteContact,
  findContact ,
};
