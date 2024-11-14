import React from 'react'
import styles from './index.module.scss'
import RightContainer from './RightContainer';
import LeftContainer from './LeftContainer';

export default function TopPresentation() {

    return (
        <div className={styles["top-presentation-outer-container"]}>
            <RightContainer />
            <LeftContainer />
        </div>
    )
}
