import React, { useRef } from "react";
import styles from "./style.module.scss";

import ScrollContainer from "react-indiana-drag-scroll";
import { onScrollRecommendations } from "./module";
import symbols from "../../../../constants/symbols";
import Button from "../../../generics/Button";
import buttonColors from "../../../../constants/buttonColors";

const Recommendations = () => {
    const dishes = Array(6).fill({});
    const refScrollBlock = useRef();
    const refLeftStub = useRef();
    const refRightStub = useRef();

    return (
        <div>
            <h2 className={styles.BasketScreen_Recommendation__title}>Рекомендуем</h2>
            <div className={styles.BasketScreen_Recommendation__scrollBlock}>
                <div
                    ref={refLeftStub}
                    className={
                        styles.BasketScreen_Recommendation__stubLeft +
                        " " +
                        styles.BasketScreen_Recommendation__stub_inactive
                    }
                />
                <ScrollContainer
                    className={styles.BasketScreen_Recommendation__scrollContainer}
                    vertical={false}
                    innerRef={refScrollBlock}
                    onScroll={() => {
                        onScrollRecommendations(
                            refScrollBlock.current,
                            refLeftStub.current,
                            refRightStub.current,
                            styles.BasketScreen_Recommendation__stub_active,
                            styles.BasketScreen_Recommendation__stub_inactive
                        );
                    }}
                >
                    {dishes.map((v, i) => {
                        return <Dish key={i} />;
                    })}
                </ScrollContainer>
                <div
                    ref={refRightStub}
                    className={
                        styles.BasketScreen_Recommendation__stubRight +
                        " " +
                        styles.BasketScreen_Recommendation__stub_active
                    }
                />
            </div>
        </div>
    );
};

const Dish = () => {
    return (
        <div className={styles.BasketScreen_Recommendation__dishBlock}>
            <div className={styles.BasketScreen_Recommendation__img} />
            <div className={styles.BasketScreen_Recommendation__dishInfoBlock}>
                <span className={styles.BasketScreen_Recommendation__name}>
                    Кола 0,9 л
                </span>
                <Button
                    isShowIncreaseAnimation={true}
                    className={styles.BasketScreen_Recommendation__button}
                    color={buttonColors.inherit}
                >
                    120
                    {` ${symbols.ruble}`}
                </Button>
            </div>
        </div>
    );
};

export default Recommendations;
