// const fs = require("fs/promises");
// const { get } = require("http");
// const { type } = require("os");
// const path = require("path");

// const contactsPath = path.resolve("./db/contacts.json");

// console.log(contactsPath);
// // TODO: задокументировать каждую функцию
// async function listContacts() {
//   const data = await fs.readFile(contactsPath, "utf8");
//   try {
//     const normalizeData = data;

//     // result code!!!

//     // console.log(JSON.parse(normalizeData));

//     return normalizeData;
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// listContacts();
// async function getContactById(contactId) {
//   const contacts = await fs.readFile(contactsPath);
//   try {
//     const normalizeData = JSON.parse(contacts);
//     const result = normalizeData.filter(({ id }) => parseInt(id) === contactId);

//     // result code!!!!

//     // console.log(result);

//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getContactById(5);
// function removeContact(contactId) {
//   // ...твой код
// }

// async function addContact(name, email, phone) {
//   try {
//     // console.log(name, email, phone);
//     await fs.appendFile(contactsPath, [
//       {
//         name: name.toString(),
//         email: email.toString(),
//         phone: phone.toString(),
//       },
//     ]);
//     console.log("yes");
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// addContact("asdasd", "sadsad", "sdasdsa");
