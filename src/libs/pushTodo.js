import getFirebaseClient from './getClient'

const pushTodo = async (data) => {
     const docRef = "todos"
     const { initFirebase } = getFirebaseClient()
     const database = initFirebase.database()
     await database.ref(docRef).push(data)
}

export default pushTodo