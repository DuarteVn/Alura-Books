import { Link } from 'react-router-dom'
import styled from 'styled-components'


const OpcaoContainer = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const OpcoesCont = styled.ul`
display: flex;
`
const textoOpcoes =['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader(){
    return(
        <OpcoesCont>
          { textoOpcoes.map((texto) => (
              <Link to={`/${texto.toLowerCase()}`}> 
                  <OpcaoContainer><p>{texto}</p></OpcaoContainer>
              </Link> 
          )) }
       </OpcoesCont>
    )
}
export default OpcoesHeader