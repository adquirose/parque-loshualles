import { useEffect, useState } from "react"
import { db } from "../firebase/firebaseConfig"
import { collection, getDocs, query, orderBy } from "firebase/firestore"

const useObtenerLotes = () => {
    const [lotes, setLotes] = useState([])

    const fetchData = async() => {
        const querySnapshot = await getDocs(query(collection(db, "proyectos","parque-los-hualles", "lotes"), orderBy("orderByHtml")))
        querySnapshot.forEach((doc) => {
            const newLote = {
                id:doc.id,
                ...doc.data()
            }
            setLotes( oldArray => [...oldArray, newLote]  )
        });
    }
    useEffect(()=> {
        fetchData()
    },[])
    

    // useEffect(() => {
    //     const consulta = query(
    //         collection(db, 'lotes')
    //     )
    //     const unsuscribe = onSnapshot(consulta,(snapshot) => {
    //         setLotes(snapshot.docs.map((lote) => {
    //             console.log('peticion lotes!')
    //             return { ...lote.data(), id: lote.id }
    //         }))
    //     })
    //     return unsuscribe
    // },[])
    return lotes
}
export default useObtenerLotes