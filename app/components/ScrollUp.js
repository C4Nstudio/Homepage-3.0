import React from 'react';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(10px, 10px);
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: rotate(45deg) translate(-10px, -10px);
    }
`;

const Wrap = styled.div`
    position: fixed;
    right: 80px;
    bottom: 60px;
    cursor: pointer;

    &:hover {
        div {
            animation: ${animate} 1.8s infinite;
        }
    }

    div {
        width: 20px;
        height: 20px;
        border-top: 3px solid rgba(12, 12, 12, .8);
        border-left: 3px solid rgba(12, 12, 12, .8);
        box-shadow: -1px -1px 1px #fff;
        transform: rotate(45deg);
        margin: -12px;

        /* &:nth-of-type(2) {
            animation-delay: 0.2s;
        } */
        
        /* &:nth-of-type(3) {
            animation-delay: 0.4s;
        } */
    }

    div:nth-child(2) {
        animation-delay: 0.2s;
    }

    div:nth-child(3) {
        animation-delay: 0.4s;
    }
`;

export default function ScrollUp(props) {
    return (
        <Wrap
            {...props}
        >
            <div></div>
            <div></div>
            <div></div>
        </Wrap>
    );
}