import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import CardRecomenda from "../CardRecomenda"
import imagemLivro from '../../imagens/livro2.png'
import { Titulo } from "../Titulo"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`



function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo 
                cor='#EB9B00' 
                tamanhoFonte='36px'                    
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
                <NovosLivrosContainer>
                    {livros.map(livro=>(
                        <img src={livro.src}/>
                    ))}
                </NovosLivrosContainer>
                <CardRecomenda
                    titulo='Talvez você se interesse por...'
                    subtitulo='ANgular 11'
                    descricao='Construindo app com plat google'
                    img={imagemLivro}
                />
                <CardRecomenda
                    titulo='Talvez você se interesse por...'
                    subtitulo='One Piece'
                    descricao='Luffy e seus amigos vão embarcar numa aventura pirata.'
                    img={imagemLivro}
                />
        </UltimosLancamentosContainer>
    )
}
export default UltimosLancamentos