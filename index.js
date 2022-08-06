// console.log("Welcome to Node.jss");
const { program } = require("commander");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");
program.parse();
const options = program.opts();

const argv = program.opts();

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      try {
        console.table(await listContacts());
      } catch (error) {
        console.log(error.message);
      }
      break;

    case "get":
      try {
        console.table(await getContactById(id));
      } catch (error) {
        console.log(error.message);
      }
      break;

    case "add":
      try {
        console.table(await addContact(name, email, phone));
      } catch (error) {
        console.log(error.message);
      }
      break;

    case "remove":
      try {
        console.table(await removeContact(id));
      } catch (error) {
        console.log(error.message);
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
