import React from 'react';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getClientes, deleteCliente } from '../servicos/clientes';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//#region estilos
const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 10%;
    flex-direction: row;
    align-items: flex-start;
`;

const Aside = styled.div`
    background: white;
    padding: 15px;
    margin: 10px;
    width: 15vw;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    background: white;
    padding: 15px;
    margin: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    border-bottom: 2px solid #ccc;
    width: 100%;
    background-color: #f5f5f5;
    font-weight: bold;
    text-align: center;
`;

const ClientesContainer = styled.div`
    width: 100%;
`;

const ClienteRow = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    border-bottom: 1px solid #ccc;
    align-items: center;
    text-align: center;

    & > * {
        padding: 5px;
    }

    & > *:not(:last-child) {
        border-right: 1px solid #ccc; /* Adiciona uma borda direita para todas as células, exceto a última */
    }
`;

const ClienteActions = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center; /* Aligns the buttons to the center */
`;

const Button = styled.button`
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 3px;

    &:hover {
        background-color: #0056b3;
    }
`;

const Filtros = styled.div`
    display: flex;
    flex-direction: column;
`
const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* Garante que a modal fique acima de outros elementos */
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #555;
`;

//#endregion
const clientes = getClientes();
console.log(clientes)

function Home() {
    const [clientes, setClientes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    useEffect(() => {
        async function fetchClientes() {
            try {
                const clientesDaApi = await getClientes();
                setClientes(clientesDaApi);
            } catch (error) {
                console.error('Erro ao obter clientes:', error);
            }
        }

        fetchClientes();
    }, []); 

    const showClientDetails = (cliente) => {
        setSelectedClient(cliente);
        setShowModal(true);
    };

    const deleteClient = async (clientId) => {
        try {
            console.log("ID do cliente a ser excluído:", clientId); // Adicione este log
            await deleteCliente(clientId);
    
            // Atualizar a lista de clientes após a exclusão
            const updatedClientes = clientes.filter(cliente => cliente.id !== clientId);
            console.log("Lista de clientes atualizada:", updatedClientes); // Adicione este log
    
            setClientes(updatedClientes);
            setShowModal(false);
        } catch (error) {
            console.error('Erro ao excluir cliente:', error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <HomeContainer>
            <Aside>
                <Link to='/clientes_cadastro'>
                    <Button>Criar Novo Cliente</Button>
                </Link>
                <Filtros>
                    <a href='localhost:3000'>* Todos</a>
                    <a href='localhost:3000'>* Ativos</a>
                    <a href='localhost:3000'>* Inativos</a>
                    <a href='localhost:3000'>* Pendentes</a>
                    <a href='localhost:3000'>* Ordem A-Z </a>
                    <a href='localhost:3000'>* Ordem Z-A</a>
                </Filtros>
            </Aside>
            <MainContent>
                <Title>Gestão de Beneficiários</Title>
                <HeaderRow>
                    <span>Nome</span>
                    <span>CPF</span>
                    <span>Data de Nascimento</span>
                    <span>Status</span>
                    <span>Ações</span>
                </HeaderRow>
                <ClientesContainer>
                    {clientes.map((cliente, index) => {
                        // Dividir a data de nascimento em partes
                        const partes = cliente.nascimento.split('-');
                        // Reorganizando as partes para dd/mm/aaaa
                        const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;

                        return (
                            <ClienteRow key={index}>
                                <span>{cliente.nome}</span>
                                <span>{cliente.cpf}</span>
                                <span>{dataFormatada}</span>
                                <span>{cliente.status}</span>
                                <ClienteActions>
                                    <Button onClick={() => showClientDetails(cliente)}>Detalhes</Button>
                                    <Link to={`/clientes_update/${cliente.id}`}>
                                        <Button>Editar</Button>
                                    </Link>
                                </ClienteActions>
                            </ClienteRow>
                        );
                    })}
                </ClientesContainer>
            </MainContent>
            {showModal && (
                <Modal>
                    <ModalContent>
                        <CloseButton onClick={closeModal}>Fechar</CloseButton>
                        <h2>Detalhes do Cliente</h2>
                        {selectedClient && (
                            <div>
                                <p>Nome: {selectedClient.nome}</p>
                                <p>CPF: {selectedClient.cpf}</p>
                                {/* Outros detalhes do cliente */}
                                <Button onClick={() => deleteClient(selectedClient.id)}>Excluir</Button>
                            </div>
                        )}
                    </ModalContent>
                </Modal>
            )}
        </HomeContainer>
    );
}

export default Home;
