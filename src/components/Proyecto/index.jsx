import styled from "styled-components"
import Logo from "../../assets/logo.jpg"

export const ProyectoContainer = styled.div`
    max-width:520px;
    min-width:340px;
    width:90%;
    height:100%;
    max-height:560px;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index:6;
    justify-self:center;
    align-self:center;
    border-radius:7px;
    box-shadow: 4px 9px 50px -10px rgba(0,0,0,0.85);
    background-color:white;
    overflow-y:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-left:0.5rem;
    padding-right:0.5rem;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    @media(max-width:420px){
        padding:0.75rem;
        max-height:480px; 
    }
`
const Parrafo = styled.p`
    padding: 0 0.75rem;
    text-align:justify;
    margin:0;
`
const Proyecto = () => {
    return(
        <ProyectoContainer>
            <img src={Logo} alt="logo-proyecto" style={{width:'280px',paddingTop:'16px',paddingBottom:'16px'}}/>
            <Parrafo>	
                Parque Los Hualles es un Loteo de 70 parcelas urbanizadas ubicada 10 kilómetros 
                antes de llegar a la ciudad de Fresia con acceso directo a la carretera 
                asfaltada en un entorno natural, el loteo contará con caminos, 
                red de electricidad y de agua potable soterrada.
                <br/>
                <br/>
                El nombre del Loteo se debe al Hualle que es un árbol nativo del tipo roble 
                chileno de hoja caduca, la palabra Hualle viene del mapudungun y significa 
                madera joven, cuando es árbol joven y amarillento se le llama Hualle y el 
                mismo ya maduro, sólido y rojo es el Pellín.
                <br/>
                <br/>
                En el año 1995 se plantaron en todo el deslinde interior del proyecto alrededor 
                de 3.000 Hualles, desde donde nace su nombre.

            </Parrafo>
        </ProyectoContainer>
    )
}
export default Proyecto