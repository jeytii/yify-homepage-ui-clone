import React from 'react';
import styles from './index.module.css';

interface Props {
    title: string;
    linkText: string;
}

export default function SectionHeader({ title, linkText }: Props) {
    return (
        <div className={styles.root}>
            <h4 className={styles.title}>{title}</h4>
            <a className={styles.link} href='/'>
                {linkText}
            </a>
        </div>
    );
}
