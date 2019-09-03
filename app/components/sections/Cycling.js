import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../Header';

const sections = [
    {
        destination: '珠海',
        distance: '125',
        location: '淇澳大桥',
        remark: '第一次短途骑行'
    }, {
        destination: '清远',
        distance: '80',
        location: '国道G107辅路',
        remark: '地图上没有标注的路线，\n自己开拓'
    }, {
        destination: '连州',
        distance: '260',
        location: '省道S114',
        remark: '30km爬坡，\n请让我下来推:p'
    }, {
        destination: '英德',
        distance: '150',
        location: '国道G105旁',
        remark: '上回我补的胎，\n这次轮到队友了'
    }, {
        destination: '韶关',
        distance: '230',
        location: '国道G240',
        remark: '34℃'
    }, {
        destination: '肇庆',
        distance: '105',
        location: '七星岩景区',
        remark: '路上忘了拍照，\n景区补上'
    }, {
        destination: '阳江',
        distance: '240',
        location: '国道G235',
        remark: '海陵岛，我们来了'
    }, {
        destination: '河源',
        distance: '190',
        location: '国道205',
        remark: '11PM  火龙果田'
    }, 
];

const Container = styled.div`
    position: relative;
    padding-bottom: 50px;
`;

const Banner = styled.div`
    width: 100%;
    height: 400px;
    position: absolute;
    top: 0;
    background: url(/static/images/cycling/cyclingMapBlurred.jpg);
    background-size: cover;
    background-position: center center;

    @supports (clip-path: polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)) or (-webkit-clip-path: polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)) {
        clip-path: polygon(0 15%, 100% 0%, 100% 85%, 0% 100%);
    }
`;

const Wrapper = styled.div`
    padding-top: 150px;
`;

const SubTitle = styled.p`
    position: relative;
    top: -15px;
    margin: 0;
    text-align: center;
    color: #fff;
    font-size: .8rem;

    span {
        position: relative;
        height: 2rem;
        line-height: 2rem;
        padding: 0 .5rem;
        background: rgba(0, 0, 0, .5);
        display: inline-block;
        vertical-align: middle;

        /* 梯形效果 */
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: -1rem;
            width: 0;
            height: 0;
            border-width: 2rem 0 0 1rem;
            border-style: solid;
            border-color: rgba(0, 0, 0, .5) transparent transparent transparent;
        }

        &:after {
            content: '';
            position: absolute;
            top: 0;
            right: -1rem;
            width: 0;
            height: 0;
            border-width: 0 1rem 2rem 0;
            border-style: solid;
            border-color: transparent transparent rgba(0, 0, 0, .5) transparent;
        }
    }
`;

const Carousel = styled.div`
    min-height: 400px;
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1080px;
    overflow: hidden;
`;

const Section = styled.div`
    position: absolute;
    top: 0;
    left: ${props => `${props.index * 100}%`};
    width: 100%;
    display: flex;
    align-items: center;   
    justify-content: center;
    transform: ${props => `translateX(-${props.current * 100}%)`};
    transition: all .8s ease-in-out;

    @media (max-width: 960px) {
        position: relative;
        top: 0;
        left: 0;
        margin-bottom: 15px;
        transform: none;

        &:nth-child(2n + 1) {
            flex-direction: row-reverse;
        }
    }
`;

const Picture = styled.div`
    position: relative;

    img {
        border: 15px solid #fff;
        box-shadow: 5px 5px 5px rgba(12, 12, 12, .2);
        width: 350px;
        height: 100%;
    }

    p {
        position: absolute;
        font-size: 1.5rem;
        background: #fff;
        padding: 15px 20px;
        margin: 0;
        bottom: .5rem;
        right: 0;
        transform: translateX(50%);
        box-shadow: 5px 5px 5px rgba(12, 12, 12, .1);
        background: #fffee6;

        @media (max-width: 960px) {
            transform: none;
            right: 5px;
            bottom: 5px;
        }
    }
`;

const Description = styled.div`
    padding-left: 100px;
    width: 400px;

    @media (max-width: 780px) {
        display: none;

    }

    div {
        position: relative;

        h2 {
            display: inline-block;
            font-weight: normal;
            font-size: 2rem;
            padding: 1.5rem 2rem;
            box-shadow: 5px 5px 5px rgba(12, 12, 12, .1);
            background: #fffee6;

            span {
                padding-bottom: 3px;
                border-bottom: 2px solid rgba(12, 12, 12, .9);
            }

            @media (max-width: 960px) {
                padding: 0;
                box-shadow: none;
                background: none;
            }
        }

        p {
            position: absolute;
            padding: 1rem 1.5rem;
            background: #fffee6;
            box-shadow: 5px 0 15px rgba(12, 12, 12, .1);
            white-space: pre;
            line-height: 1.5rem;
            
            &:nth-of-type(1) {
                top: 5.5rem;
                left: -1.5rem;
            }

            &:nth-of-type(2) {
                top: 8rem;
                left: 10rem;
            }

            @media (max-width: 960px) {
                position: static;
                padding: 0%;
                background: none;
                box-shadow: none;
                white-space: nowrap;
            }
        }

        @media (max-width: 960px) {
            background: #fffee6;
            padding: 0 35px 15px;
            box-shadow: 5px 5px 5px rgba(12, 12, 12, .1);
        }
    }
`;

const Next = styled.div`
    position: absolute;
    bottom: 10px;
    right: 100px;

    @media (max-width: 960px) {
        display: none;
    }

    a {
        cursor: pointer;
        padding: 30px;

        &:hover {
            color: rgba(12, 12, 12, .6);
        }
    }
`;

export default function Cycling() {
    // 当前显示的序数
    const [current, setCurrent] = useState(0);

    function nextSection() {
        setCurrent(prev => prev === (sections.length - 1) ? 0 : (prev + 1));
    }

    return (
        <Container id='cycling'>
            <Banner />
            <Wrapper>
                <Header
                    title='骑行'
                    subTitle='endurance'
                />
                <SubTitle>
                    <span>
                        广东15市，里程超2000KM
                    </span>
                </SubTitle>
                <Carousel
                    current={current}
                >
                    {
                        sections.map((item, index) => (
                            <Section
                                key={index}
                                index={index}
                                current={current}
                            >
                                <Picture>
                                    <img src={`/static/images/cycling/${index + 1}.jpg`} />
                                    <p>{item.location}</p>
                                </Picture>
                                <Description>
                                    <div>
                                        <h2>
                                            目的地：<span>{item.destination}</span>
                                        </h2>
                                        <p>
                                            距离广州：{item.distance}km
                                        </p>
                                        <p>
                                            {item.remark}
                                        </p>
                                    </div>
                                </Description>
                                <Next>
                                    <a onClick={nextSection}>
                                        下一站 →
                                    </a>
                                </Next>
                            </Section>
                        ))
                    }
                </Carousel>
            </Wrapper>
        </Container>
    );
}