import getClient from "./getClient";

const setTodo = async (doc, data) => {
  const { initFirebase } = getClient();
  const database = initFirebase.database();
  await database.ref(doc).set(data);
};

export default setTodo;
