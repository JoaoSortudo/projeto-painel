import React, { useState } from "react";
import styled from "styled-components";
import { postCliente } from "../servicos/clientes";


//#region estilos da pagina
const Button = styled.button`
    width: auto;
`;

const FormCadastro = styled.form`
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const CadastroContainer = styled.div`
    display: flex;
`;

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

const CadastroCliente = styled.section`
    width: 50%;
`;

const CadastroDependente = styled.section`
    width: 50%;
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Legend = styled.legend`
    font-size: 1.2em;
    font-weight: bold;
`;
//#endregion

function ClienteCadastro() {
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
        status:"Ativo",
        classe:"Independente",
        cpfTitular:"null",
        tipoPlano:'clinico',
        tipoPagamento: 'recorrencia',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newCliente = await postCliente(formData);
            console.log('Cliente criado com sucesso:', newCliente);
            alert('Cliente cadastrado com sucesso')
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
        }
    };

    return (
        <FormCadastro onSubmit={handleSubmit}>
            <CadastroContainer>
                <CadastroCliente>
                    <fieldset>
                        <Legend>Cliente</Legend>
                        <div>
                            <Label htmlFor="nome">Nome completo:</Label>
                            <Input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
                        </div>
                        <FlexContainer>
                            <FlexItem>
                                <Label htmlFor="cpf">CPF (apenas números):</Label>
                                <Input type="text" id="cpf" maxLength="11" name="cpf" value={formData.cpf} onChange={handleChange} required />
                            </FlexItem>
                            <FlexItem>
                                <Label htmlFor="nascimento">Data de nascimento:</Label>
                                <Input type="date" id="nascimento" name="nascimento" value={formData.nascimento} onChange={handleChange} required />
                            </FlexItem>
                        </FlexContainer>
                        <div>
                            <Label htmlFor="email">E-mail:</Label>
                            <Input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <FlexContainer>
                            <FlexItem>
                                <Label htmlFor="telefone">Telefone:</Label>
                                <Input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />
                            </FlexItem>
                            <FlexItem>
                                <Label htmlFor="cep">CEP:</Label>
                                <Input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} required />
                            </FlexItem>
                        </FlexContainer>
                        <div>
                            <Label htmlFor="endereco">Endereço:</Label>
                            <Input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} />
                        </div>
                        <FlexContainer>
                            <FlexItem>
                                <Label htmlFor="cidade">Cidade:</Label>
                                <Input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} required />
                            </FlexItem>
                            <FlexItem>
                                <Label htmlFor="estado">Estado:</Label>
                                <Input type="text" id="estado" name="estado" value={formData.estado} onChange={handleChange} required />
                            </FlexItem>
                        </FlexContainer>
                    </fieldset>
                    <h1>Mais Informações</h1>
                    <fieldset>
                        <Legend>Plano</Legend>
                        <div>
                            <Label htmlFor="tipoPlano">Tipo de plano:</Label>
                            <Select id="tipoPlano" name="tipoPlano" value={formData.tipoPlano} onChange={handleChange}>
                                <option value="clinico">Clínico (G)</option>
                                <option value="psicologia">Psicologia (P)</option>
                                <option value="G+P">Clínico + Psicologia (GP)</option>
                                <option value="G+S">Clínico + Especialista (GS)</option>
                                <option value="G+S+P">Clínico + Especialista + Psicologia (P)</option>
                            </Select>
                            <Label htmlFor="tipoPagamento">Tipo de pagamento:</Label>
                            <Select id="tipoPagamento" name="tipoPagamento" value={formData.tipoPagamento} onChange={handleChange}>
                                <option value="recorrencia">Recorrência</option>
                                <option value="consulta">Consulta</option>
                            </Select>
                        </div>
                    </fieldset>
                </CadastroCliente>
                <CadastroDependente>
                    <button type="button">Adicionar</button>
                </CadastroDependente>
            </CadastroContainer>
            <Button type="submit">Cadastrar</Button>
        </FormCadastro>
    );
}

export default ClienteCadastro;
