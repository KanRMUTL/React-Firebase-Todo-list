import getClient from "./getClient";

const deleteTodo = async (doc) => {
  const { initFirebase } = getClient();
  const database = initFirebase.database();
  await database.ref(doc).remove();
};

export default deleteTodo;