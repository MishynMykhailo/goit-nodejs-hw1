const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const updateContacts = async (contact) => {
  await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
};

// fn get all contacts
async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf8");
  try {
    const normalizeData = JSON.parse(data);
    return normalizeData;
  } catch (error) {
    console.log(error.message);
  }
}

//fn get contact by ID
async function getContactById(contactId) {
  const contacts = await fs.readFile(contactsPath);
  try {
    const normalizeData = JSON.parse(contacts);
    const result = normalizeData.find(
      ({ id }) => parseInt(id) === parseInt(contactId)
    );
    console.log(typeof contactId, contactId);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

// fn delete Contact by ID
async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((item) => item.id === contactId);
    if (idx == -1) {
      return null;
    }
    const [result] = contacts.splice(idx, 1);
    console.log(`Contact with id=${contactId} was removed`);
    updateContacts(contacts);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    const newContacts = [...contacts, newContact];
    updateContacts(newContacts);
    console.log(`Contact with name="${name}" was added to database.`);
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
