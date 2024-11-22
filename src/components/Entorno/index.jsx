/* eslint-disable react/prop-types */
import Lightbox from "yet-another-react-lightbox"
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const Entorno = ({estado, setEstado}) => {
    const {sectionActiva} = estado
    return(
        <Lightbox
            plugins={[Captions]}
            open={sectionActiva}
            close={() => {
                setEstado({...estado, sectionActiva:false})
                
            }}
            slides={[
                { src: new URL('../../assets/entorno/lago-laja.jpg', import.meta.url).href, description:'Lago Laja' },
                { src: new URL('../../assets/entorno/playa-buchupureo.jpg', import.meta.url).href, description:'Playa Buchupureo' },
                { src: new URL('../../assets/entorno/playa-cobquecura.jpg', import.meta.url).href, description:'Playa Cobquecura' },
                { src: new URL('../../assets/entorno/playa-curanipe.jpeg', import.meta.url).href, description:'Playa Curanipe' },
                { src: new URL('../../assets/entorno/playa-dichato.jpg', import.meta.url).href, description:'Playa Dichato' },
                { src: new URL('../../assets/entorno/playa-tregualemu.jpg', import.meta.url).href, description:'Playa Tregualemu' },
                { src: new URL('../../assets/entorno/reserva-nacional-nuble.jpg', import.meta.url).href, description:'Reserva Nacional Ñuble' },
                { src: new URL('../../assets/entorno/termas-de-chillan.jpg', import.meta.url).href, description:'Termas de Chillán' },
                
            ]}
        />
    )
}
export default Entorno