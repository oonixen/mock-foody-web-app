import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import RoutePath from "../../../../classes/navigation/RoutePath";

const CodeInput = () => {
    const navigation = useNavigate();
    const blockRef = useRef();
    const [codeObj, setCodeObj] = useState({ 1: "", 2: "", 3: "", 4: "" });
    const setNumber = (numberCount, value) => {
        const obj = { ...codeObj };
        obj[`${numberCount}`] = value;
        setCodeObj(obj);

        if (numberCount === 4 || !value) return;
        //@ts-ignore
        blockRef.current.children[numberCount].focus();
    };

    useEffect(() => {
        //@ts-ignore
        blockRef.current.children[0].focus();
    }, []);

    return (
        <div ref={blockRef} className={styles.CodeVerifyScreen_CodeInput__block}>
            <input
                required={true}
                className={styles.CodeVerifyScreen_CodeInput__input}
                maxLength={1}
                value={codeObj["1"]}
                onInput={(e) => setNumber(1, e.currentTarget.value)}
            />
            <input
                required={true}
                className={styles.CodeVerifyScreen_CodeInput__input}
                maxLength={1}
                value={codeObj["2"]}
                onInput={(e) => setNumber(2, e.currentTarget.value)}
            />
            <input
                required={true}
                className={styles.CodeVerifyScreen_CodeInput__input}
                maxLength={1}
                value={codeObj["3"]}
                onInput={(e) => setNumber(3, e.currentTarget.value)}
            />
            <input
                required={true}
                className={styles.CodeVerifyScreen_CodeInput__input}
                maxLength={1}
                value={codeObj["4"]}
                onInput={(e) => {
                    setNumber(4, e.currentTarget.value);
                    navigation(RoutePath.getDeliveryMapPath(true));
                }}
            />
        </div>
    );
};

export default CodeInput;
