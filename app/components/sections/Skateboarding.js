import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Header from '../Header';

const Container = styled.div`
    min-height: 500px;
    position: relative;
`;

const Wrap = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto 75px;
    display: flex;
    justify-content: center;
    transform: rotate(-2.5deg);
`;

const HoverText = styled.h2`
    margin: 75px 0 0;
    padding: 0;
    font-size: 6rem;
    transition: .5s;
    line-height: .8em;
    z-index: 100;

    &>div {
        position: relative;
        transition: .5s;
        line-height: .8em;

        span {
            transition: .5s;
            transition-delay: 1s;
        }
    }

    &>div:nth-child(1):before, &>div:nth-child(2):before {
        content: '';
        position: absolute;
        top: calc(50% - 5px);
        width: 50%;
        height: 10px;
        background: #f00;
        z-index: 1;
        transform: scale(0);
        transition: .5s;
    }

    &>div:nth-child(1):before {
        right: 0;
        transform-origin: right;
    }

    &>div:nth-child(2):before {
        left: 0;
        transform-origin: left;
    }

    &:hover {
        &>div {
            span {
                transition-delay: 1s;
                color: #f00;
                opacity: 0;
            }

            /* span:nth-child(1) {
                padding-right: 30px;
            }

            span:nth-child(2) {
                padding-left: 30px;
            } */
        }

        &>div:nth-child(1):before, &>div:nth-child(2):before {
            transform: scale(1);
        }
    }
`;

const Picture = styled.img`
    position: relative;
    top: .5rem;
    left: -3rem;
    width: 300px;
    height: 100%;
    border: 15px solid #fefefe;
    box-shadow: 5px 5px 8px rgba(12, 12, 12, .5);
    z-index: 10;

    &:nth-of-type(2) {
        left: -5rem;
        z-index: 5;
        transform: rotate(5deg);
    }

    &:nth-of-type(3) {
        left: -6rem;
        z-index: 1;
        transform: rotate(-3deg);
    }
`;

export default function Skateboarding() {
    return (
        <Container id='skateboarding'>
            <Header
                title='滑板'
                subTitle='addiction'
            />

            <Wrap>
                <HoverText>
                    <div>DO<span>N'T</span></div>
                    <div><span>QU</span>IT</div>
                </HoverText>
                <Picture
                    src='/static/images/skateboarding/watch.jpg'
                />
                <Picture
                    src='/static/images/skateboarding/team.jpg'
                />
                <Picture
                    src='/static/images/skateboarding/band.jpg'
                />
            </Wrap>
        </Container>
    );
}