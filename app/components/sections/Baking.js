import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../Header';

const IMAGE_DESCRIPTIONS = [
    {
        name: '香蕉巧克力玛芬'
    }, {
        name: '紫薯糯米糍'
    }, {
        name: '戚风蛋糕'
    }, {
        name: '鸡蛋布丁'
    }, {
        name: '驴打滚'
    }, {
        name: '华夫饼'
    }, {
        name: '葡式蛋挞'
    }, {
        name: '蛋黄酥'
    }, {
        name: '芒果披萨简餐'
    }, {
        name: '蔓越莓曲奇'
    }, {
        name: '红豆酥'
    }, {
        name: '煎堆'
    }, {
        name: '玫瑰曲奇'
    }, {
        name: '火腿香葱吐司'
    }, {
        name: '紫薯麻薯软欧'
    }
]

const Container = styled.div`
    position: relative;
    background: linear-gradient(135deg, rgba(238, 122, 00, .9), rgba(238, 122, 00, .3));
    padding: 80px 0;
    @supports (clip-path: polygon(0 7.5%, 100% 0, 100% 92.5%, 0% 100%)) or (-webkit-clip-path: polygon(0 7.5%, 100% 0, 100% 92.5%, 0% 100%)) {
        clip-path: polygon(0 7.5%, 100% 0, 100% 92.5%, 0% 100%);
    }
`;

const Gallery = styled.div`
    width: 100%;
    padding: 0 0 50px;
    background-image: url(/static/images/baking/bgBread.png), url(/static/images/baking/bgCoffee.png);
    background-position: -5% 0, 102% 80%;
    background-repeat: no-repeat, no-repeat;
    background-size: 350px 350px, 300px 300px;
`;

const Text = styled.p`
    color: #fff;
    text-align: center;
    font-size: 1.2rem;
    margin-top: -15px;
`;

const Wrap = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;

const Block = styled.div`
    flex: 20%;
    overflow: hidden;
    position: relative;

    @media (max-width: 960px) {
        flex: 33.33%;
    }

    /* @media (max-width: 960px) {
        flex: 33.33%;
    } */

    img {
        width: 100%;
        height: 100%;
        transition: all .6s;
    }

    p {
        display: flex;
        position: absolute;
        margin: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        color: #fff;
        font-size: 1.5rem;
        background: rgba(12, 12, 12, .5);
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity .8s;
    }

    &:hover {
        img {
            transform: scale(1.2) rotate(-15deg);
            filter: blur(2px);
        }

        p {
            opacity: 1;
        }
    }
`;

export default function Baking() {
    return (
        <Container id='baking'>
            <Header
                title='烘焙'
                subTitle='hobby'
                fontColor='#fff'
            />

            <Gallery>
                <Text>今天做点什么？</Text>
                <Wrap>
                    {
                        IMAGE_DESCRIPTIONS.map((item, index) => (
                            <Block key={index}>
                                <img src={`/static/images/baking/${item.srcNo || (index + 1)}.jpg`} />
                                <p>{item.name}</p>
                            </Block>
                        ))
                    }
                </Wrap>
            </Gallery>
        </Container>
    );
}