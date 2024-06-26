//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10%;
`
const BotoesContainer = styled.div`
    display: flex;
    gap: 3rem;

`

function Header() {
    return(
        <HeaderContainer>
            <Link to='/'>
                <h1>Clientes</h1>
            </Link>
            <BotoesContainer>
                <input placeholder="Pesquisar(nome, cpf, etc...)"/>
                <button>Sair</button>
                <img alt="logo oimed"></img>
            </BotoesContainer>
        </HeaderContainer>


    )
}

export default Header;