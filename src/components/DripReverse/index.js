import React from "react";
import cn from "classnames";
import styles from "./DripReverse.module.sass";

const DripReverse = () => {
    return (
        <div
            className={cn(styles.dripReverse, "dripReverse")}
            style={{
                backgroundSize: "cover",
            }}
        ></div>
    );
};

export default DripReverse;
