import React, { ReactNode, InputHTMLAttributes } from 'react';
import styles from './index.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    icon: ReactNode;
}

export default function TextField({ icon, ...props }: Props) {
    return (
        <div className={styles.root}>
            <span className={styles.icon_container}>{icon}</span>
            <input className={styles.input} {...props} />
        </div>
    );
}
