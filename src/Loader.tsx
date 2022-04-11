import React, {useEffect, useState} from "react";
import loaderStyles from "./styles/modules/Loader.module.scss"

const Loader = ({children}) => {

    const [isLoaded, setIsLoaded] = useState(true)

    useEffect(() => {
        // setTimeout(() => setIsLoaded(true), 5000)
    }, [])

    if (!isLoaded) {
         return (
            <div
                className={loaderStyles.Loader}
                style={{position: "fixed", top: 0, bottom: 0, left: 0, right: 0, margin: "auto"}}
            >
                Loading...
            </div>
         )
    }

    return (
        <>
            {children}
        </>
    )
}

export default Loader