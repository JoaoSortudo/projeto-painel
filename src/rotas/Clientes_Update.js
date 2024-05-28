import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { patchCliente, getClientes } from '../servicos/clientes';

//#region estilos da pagina
const Button = styled.button`
    width: auto;
`

const FormUpdate = styled.form`
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const UpdateContainer = styled.div`
    display: flex;
`

const Label = styled.label`
    margin-bottom: 10px;
    display: block;
`;

const Input = styled.input`
    width: 100%;
    max-width: 95%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const FlexContainer = styled.div`
    max-width: 97%;
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
`;

const FlexItem = styled.div`
    flex: 1;
`;

const UpdateCliente = styled.section`
    width: 50%;
`;

const UpdateDependente = styled.section`
    width: 50%;
`;

//const Select = styled.select`
//    width: 100%;
//   padding: 10px;
//    margin-bottom: 15px;
//   border: 1px solid #ccc;
//    border-radius: 5px;
//`;

const Legend = styled.legend`
    font-size: 1.2em;
    font-weight: bold;
`;
//#endregion

function ClienteUpdate() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        nascimento: '',
        email: '',
        telefone: '',
        cep: '',
        endereco: '',
        cidade: '',
        estado: '',
        status: 'Ativo',
        classe: 'Independente',
        cpfTitular: 'null',
        tipoPlano: 'clinico',
        tipoPagamento: 'recorrencia',
    });

    useEffect(() => {
        async function fetchCliente() {
            try {
                const clientes = await getClientes();
                const cliente = clientes.find(cliente => cliente.id === parseInt(id, 10));
                if (cliente) {
                    setFormData(cliente);
                }
            } catch (error) {
                console.error('Erro ao buscar cliente:', error);
            }
        }
        fetchCliente();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('ID do cliente:', id); // Verificando o ID
            console.log('Dados do formulário:', formData); // Verificando os dados do formulário
            await patchCliente(id, formData);
            alert('Cliente editado com sucesso');
        } catch (error) {
            console.error('Erro ao editar cliente:', error);
        }
    };

    return (
        <FormUpdate onSubmit={handleSubmit}>
            <UpdateContainer>
                <UpdateCliente>
                    <fieldset>
                        <Legend>Cliente</Legend>
                        <div>
                            <Label htmlFor="nomeCompleto">Nome completo:</Label>
                            <Input
                                type="text"
                                id="nomeCompleto"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <FlexContainer>
                            <FlexItem>
                                <Label htmlFor="cpf">CPF (apenas números):</Label>
                                <Input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    maxLength="11"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    required
                                />
                            </FlexItem>
                            <FlexItem>
                                <Label htmlFor="nascimento">Data de nascimento:</Label>
                                <Input
                                    type="date"
                                    id="nascimento"
                                    name="nascimento"
                                    value={formData.nascimento}
                                    onChange={handleChange}
                                    required
                                />
                            </FlexItem>
                        </FlexContainer>
                        <FlexContainer>
                            <FlexItem>
                                <Label htmlFor="telefone">Telefone:</Label>
                                <Input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    required
                                />
                            </FlexItem>
                            <FlexItem>
                                <Label htmlFor="cep">CEP:</Label>
                                <Input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    value={formData.cep}
                                    onChange={handleChange}
                                    required
                                />
                            </FlexItem>
                        </FlexContainer>
                        <div>
                            <Label htmlFor="endereco">Endereço:</Label>
                            <Input
                                type="text"
                                id="endereco"
                                name="endereco"
                                value={formData.endereco}
                                onChange={handleChange}
                            />
                        </div>
                        <FlexContainer>
                            <FlexItem>
                                <Label htmlFor="cidade">Cidade:</Label>
                                <Input
                                    type="text"
                                    id="cidade"
                                    name="cidade"
                                    value={formData.cidade}
                                    onChange={handleChange}
                                    required
                                />
                            </FlexItem>
                            <FlexItem>
                                <Label htmlFor="estado">Estado:</Label>
                                <Input
                                    type="text"
                                    id="estado"
                                    name="estado"
                                    value={formData.estado}
                                    onChange={handleChange}
                                    required
                                />
                            </FlexItem>
                        </FlexContainer>
                    </fieldset>
                </UpdateCliente>
                <UpdateDependente>
                    <button>Adicionar</button>
                </UpdateDependente>
            </UpdateContainer>
            <Button type="submit">Salvar alterações</Button>
        </FormUpdate>
    );
}

export default ClienteUpdate;