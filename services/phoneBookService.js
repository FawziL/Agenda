const phoneBook = require("../model/phoneBookModel.js");
let instance;

class phoneBookMongoDAO {
  constructor() {
    this.collection = phoneBook;
  }

  getAll = async () => {
    try {
      const contacts = await this.collection.find().lean();
      return contacts;
    } catch (err) {
      console.log(err);
      return [];
    }
  };
  createContact = async (phoneNumber, name, lastName) => {
    try {
      const newContact = {phoneNumber:phoneNumber, name:name, lastName:lastName}
      const createdContact = await this.collection.create(newContact);
      return createdContact;
    } catch (err) {
      console.log(err);
    }
  };
  deleteContact = async (phoneNumber, name, lastName) => {
    try {
      let deleteContact;
      if (phoneNumber) {
        deleteContact = await this.collection.deleteOne({ phoneNumber });
      } else if (name && lastName) {
        deleteContact = await this.collection.deleteOne({ name, lastName });
      } 

      return deleteContact;
    } catch (error) {
      console.log(error);
    }
  };
  updateContact= async (phoneNumber, name, lastName, find) => {
    try {
      const searchValue = new RegExp(find, 'i');
  
      const searchQuery = {}; 

      if (find) {
        searchQuery.$or = [
          { name: searchValue },
          { lastName: searchValue },
          { phoneNumber: searchValue }
        ];
      }
  
      const updateFields = {};

      if (name) {
        updateFields.name = name;
      }
      if (lastName) {
        updateFields.lastName = lastName;
      }
      if (phoneNumber) {
        updateFields.phoneNumber = phoneNumber;
      }
  
      const updateResult = await this.collection.updateOne(searchQuery, { $set: updateFields });
      return updateResult;
    } catch (error) {
      console.log(error);
    }
  };
  findContact = async (find) => {
    const searchValue = new RegExp(find, 'i');

    try {
      const results = await this.collection.find({
        $or: [
          { phoneNumber: searchValue },
          { name: searchValue },
          { lastName: searchValue },
        ],
      });
  
      return results;
  }catch (error) {
    console.error("Error en la búsqueda:", error);
    return [];
  }}

  static getInstance() {
    if (!instance) {
      instance = new phoneBookMongoDAO();
    }
    return instance;
  }
}

module.exports = phoneBookMongoDAO;
