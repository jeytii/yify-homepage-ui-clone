import React from 'react';

interface Props {
    width?: string;
    height?: string;
    fill?: string;
}

export default function Requests({
    width = '20',
    height = '20',
    fill = '#EEE',
}: Props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            version='1.1'
            id='Capa_1'
            x='0'
            y='0'
            width={width}
            height={height}
            fill={fill}
            viewBox='0 0 438.529 438.529'
            xmlSpace='preserve'
        >
            <g>
                <path d='M421.833,285.36c-2.573-9.801-8.233-17.179-16.991-22.128l-75.944-43.966l75.944-43.968   c8.758-4.949,14.421-12.322,16.991-22.126c2.566-9.803,1.379-19.082-3.572-27.836L399.99,93.932   c-4.948-8.757-12.319-14.419-22.127-16.989c-9.802-2.565-19.072-1.376-27.833,3.576l-75.944,43.677v-87.65   c0-9.899-3.621-18.464-10.855-25.697C256,3.616,247.433,0,237.537,0h-36.54c-9.9,0-18.464,3.619-25.697,10.849   c-7.232,7.232-10.85,15.798-10.85,25.697v87.65l-75.945-43.68c-8.757-4.952-18.036-6.145-27.837-3.576   c-9.803,2.573-17.179,8.232-22.128,16.989l-18.271,31.405c-4.952,8.754-6.14,18.033-3.571,27.836   c2.574,9.801,8.232,17.178,16.989,22.126l75.945,43.972l-75.945,43.966c-8.757,4.949-14.419,12.323-16.989,22.128   c-2.568,9.801-1.377,19.075,3.571,27.829l18.272,31.408c4.947,8.761,12.32,14.421,22.126,16.995   c9.805,2.562,19.08,1.375,27.837-3.58l75.945-43.681v87.655c0,9.891,3.617,18.466,10.85,25.694   c7.233,7.234,15.8,10.848,25.697,10.848h36.54c9.896,0,18.466-3.613,25.693-10.848c7.238-7.229,10.855-15.804,10.855-25.694   v-87.648l75.944,43.681c8.761,4.948,18.031,6.143,27.833,3.573c9.804-2.574,17.179-8.23,22.127-16.991l18.271-31.405   C423.212,304.438,424.4,295.161,421.833,285.36z' />
            </g>
        </svg>
    );
}
