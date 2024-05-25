import axios from "axios";

const clientesAPI = axios.create({baseURL: 'http://localhost:8000/clientes'})

async function getClientes(){
    const response = await clientesAPI.get('/')

    return response.data
}

// async function deleteClientes(){
//     const response = await clientesAPI.delete('/')

//     return response.data
// }



export {
    getClientes,
    //deleteClientes
}