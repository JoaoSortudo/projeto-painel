import styled from "styled-components";

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

function ClienteUpdate() {
    return (
        <FormUpdate>
            <UpdateContainer>
                <UpdateCliente>
                    <fieldset>
                        <Legend>Cliente</Legend>
                        <div>
                            <Label htmlFor="nomeCompleto">Nome completo:</Label>
                            <Input type="text" id="nomeCompleto" name="nomeCompleto" required />
                        </div>
                        <FlexContainer>
                            <FlexItem>
                                <Label htmlFor="cpf">CPF (apenas números):</Label>
                                <Input type="text" id="cpf" maxLength="11" name="cpf" required />
                            </FlexItem>
                            <FlexItem>
                                <Label htmlFor="nascimento">Data de nascimento:</Label>
                                <Input type="date" id="nascimento" name="nascimento" required />
                            </FlexItem>
                        </FlexContainer>
                        <FlexContainer>
                            <FlexItem>
                                <Label htmlFor="telefone">Telefone:</Label>
                                <Input type="tel" id="telefone" name="telefone" required />
                            </FlexItem>
                            <FlexItem>
                                <Label htmlFor="cep">CEP:</Label>
                                <Input type="text" id="cep" name="cep" required />
                            </FlexItem>
                        </FlexContainer>
                        <div>
                            <Label htmlFor="endereco">Endereço:</Label>
                            <Input type="text" id="endereco" name="endereco" />
                        </div>
                        <FlexContainer>
                            <FlexItem>
                                <Label htmlFor="cidade">Cidade:</Label>
                                <Input type="text" id="cidade" name="cidade" required />
                            </FlexItem>
                            <FlexItem>
                                <Label htmlFor="estado">Estado:</Label>
                                <Input type="text" id="estado" name="estado" required />
                            </FlexItem>
                        </FlexContainer>
                    </fieldset>
                    <h1>Mais Informações</h1>
                    <fieldset>
                        <Legend>Plano</Legend>
                        <div>
                            <Label htmlFor="tipoPlano">Tipo de plano:</Label>
                            <Select id="tipoPlano" name="tipoPlano">
                                <option value="clinico">Clínico (G)</option>
                                <option value="psicologia">Psicologia (P)</option>
                                <option value="G+P">Clínico + Psicologia (GP)</option>
                                <option value="G+S">Clínico + Especialista (GS)</option>
                                <option value="G+S+P">Clínico + Especialista + Psicologia (P)</option>
                            </Select>
                            <Label htmlFor="tipoPagamento">Tipo de pagamento:</Label>
                            <Select id="tipoPlano" name="tipoPlano">
                                <option value="recorrencia">Recorrência</option>
                                <option value="consulta">Consulta</option>
                            </Select>
                        </div>
                        {/* Adicione os outros campos aqui conforme necessário */}
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