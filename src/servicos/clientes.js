import axios from "axios";

const clientesAPI = axios.create({baseURL: 'http://localhost:8000/clientes'})

async function getClientes(){
    const response = await clientesAPI.get('/')

    return response.data
}

async function deleteCliente(clienteId) {
    try {
        const response = await clientesAPI.delete(`/${clienteId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao excluir cliente:', error);
        throw error;
    }
}

async function postCliente(clienteData) {
    try {
        const response = await clientesAPI.post('/', clienteData);
        return response.data;
    } catch (error) {
        console.error('Error creating client:', error);
        throw error;
    }
}

async function patchCliente(clienteId, clienteData) {
    try {
        const response = await clientesAPI.patch(`/${clienteId}`, clienteData);
        return response.data;
    } catch (error) {
        console.error('Erro ao editar cliente:', error);
        throw error;
    }
}

export {
    getClientes,
    deleteCliente,
    postCliente,
    patchCliente
}