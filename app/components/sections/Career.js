import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../Header';

const Container = styled.div`
    min-height: 500px;
    position: relative;
    margin-bottom: 65px;
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const Card = styled.div`
    position: relative;
    width: 280px;
    height: 400px;
    background: #111111;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 33.3%;

    @media (max-width: 800px) {
        flex: 1 1 60%;
    }

    @media (max-width: 600px) {
        flex: 1 1 80%;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: rgba(255, 255, 255, .1);
        z-index: 10;
        pointer-events: none;
    }

    &:nth-child(1), &:nth-child(1)>div:nth-of-type(2) {
        background: linear-gradient(45deg, #3503ad, #f7308c);
    }

    &:nth-child(2), &:nth-child(2)>div:nth-of-type(2) {
        background: linear-gradient(45deg, #ccff00, #09afff);
    }

    &:nth-child(3), &:nth-child(3)>div:nth-of-type(2) {
        background: linear-gradient(45deg, #e91e63 , #ffeb3b);
    }
`;

const Front = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
        width: 100px;
        height: 100px;
    }

    p {
        color: #fff;
        font-size: 1.2rem;
    }
`;

const Hover = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
    cursor: pointer;
    border-radius: 50%;
    transition: .6s;

    &::before {
        content: '+';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: #fff;
        font-size: 28px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-delay: .5s;
    }

    &:hover {
        bottom: 0;
        right: 0%;
        width: 100%;
        height: 100%;
        box-shadow: none;
        opacity: .9;
        border-radius: 0;

        &::before {
            display: none;
            transition-delay: .5s;
        }
    }    

    @media (max-width: 800px) {
        display: none;
    }
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 20px;
    pointer-events: none;
    opacity: ${props => props.expandedCardId === props.cardId ? 1 : 0};
    visibility: ${props => props.expandedCardId === props.cardId ? 'visible' : 'hidden'};
    transition: .2s;
    transition-delay: ${props => props.expandedCardId === props.cardId ? '.5s' : '0s'};
    color: #fff;
    z-index: 10;
    text-align: left;

    h3 {
        margin: 50px 0;
    }

    p {
        
    }

    @media (max-width: 800px) {
        opacity: 1;
        visibility: visible;
    }
`;

export default function Career() {
    // 展开状态
    const [expandedCardId, setExpandedCardId] = useState();

    return (
        <Container id='career'>
            <Header
                title='职业'
                subTitle='career'
            />
            <Wrapper>
                <Card>
                    <Front>
                        <div>
                            <img src='/static/images/career/react.svg' />
                            <p>经验</p>
                        </div>
                    </Front>
                    <Hover
                        onMouseOver={e => setExpandedCardId(1)}
                        onMouseLeave={e => setExpandedCardId(null)}
                    />
                    <Content
                        expandedCardId={expandedCardId}
                        cardId={1}
                    >
                        <h3>
                            技术栈
                        </h3>
                        <p>
                            最常围绕的几个词：<br />
                            React、Antd、ECharts、<br />
                            ES6、ES7、Styled-Components<br /><br />
                            做这网站新用上了：<br />
                            Next.js<br /><br />
                            域名、服务器、云解析：<br />
                            腾讯云、腾讯云，还是腾讯云
                        </p>
                    </Content>
                </Card>
                <Card>
                    <Front>
                        <div>
                            <img src='/static/images/career/labtop.svg' />
                            <p>工作</p>
                        </div>
                    </Front>
                    <Hover
                        onMouseOver={e => setExpandedCardId(2)}
                        onMouseLeave={e => setExpandedCardId(null)}
                    />
                    <Content
                        expandedCardId={expandedCardId}
                        cardId={2}
                    >
                        <h3>
                            前端开发
                        </h3>
                        <p>
                            自7102年开始翻工的前端程序猿<br /><br />
                            习惯日常救火、<br />
                            做Demo、<br />
                            和后台吵页面设计:p<br /><br />
                            当前正在找工作
                        </p>
                    </Content>
                </Card>
                <Card>
                    <Front>
                        <div>
                            <img src='/static/images/career/web.svg' />
                            <p>关于</p>
                        </div>
                    </Front>
                    <Hover
                        onMouseOver={e => setExpandedCardId(3)}
                        onMouseLeave={e => setExpandedCardId(null)}
                    />
                    <Content
                        expandedCardId={expandedCardId}
                        cardId={3}
                    >
                        <h3>
                            关于本网站
                        </h3>
                        <p>
                            不经常写文章（这有个<a href="https://c4nstudio.github.io/">博客</a>）<br /><br />
                            但是爱（wán）好（yì）不少<br /><br />
                            借此把一些好玩的东西po上来<br /><br />
                            视频制作板块也即将加入
                        </p>
                    </Content>
                </Card>
            </Wrapper>
        </Container>
    );
}