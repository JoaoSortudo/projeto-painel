import React from 'react';
import styled from 'styled-components';

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

const clientes = [
    { nome: "João Silva", cpf: "123.456.789-00", nascimento: "01/01/1980", status: "Ativo" },
    { nome: "Maria Oliveira", cpf: "987.654.321-00", nascimento: "15/05/1975", status: "Inativo" },
    { nome: "Carlos Pereira", cpf: "456.789.123-00", nascimento: "30/09/1990", status: "Ativo" }
];

function Home() {
    return (
        <HomeContainer>
            <Aside>
                <Button>Criar Novo Cliente</Button>
                <div className='filtros'>
                    <a href='localhost:3000'>* Todos</a>
                    <a href='localhost:3000'>* Ativos</a>
                    <a href='localhost:3000'>* Inativos</a>
                    <a href='localhost:3000'>* Pendentes</a>
                    <a href='localhost:3000'>* Ordem A-Z </a>
                    <a href='localhost:3000'>* Ordem Z-A</a>
                </div>
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
                    {clientes.map((cliente, index) => (
                        <ClienteRow key={index}>
                            <span>{cliente.nome}</span>
                            <span>{cliente.cpf}</span>
                            <span>{cliente.nascimento}</span>
                            <span>{cliente.status}</span>
                            <ClienteActions>
                                <Button>Detalhes</Button>
                                <Button>Editar</Button>
                            </ClienteActions>
                        </ClienteRow>
                    ))}
                </ClientesContainer>
            </MainContent>
        </HomeContainer>
    );
}

export default Home;
