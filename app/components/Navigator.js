import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    color: #fff;
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    /* line-height: 100px;
    vertical-align: middle; */

    &.folded {
        
    }
`;

const Logo = styled.span`
    margin-left: 30px;
`;

const Menu = styled.ul`
    list-style: none;
    margin-right: 30px;
`;

const Item = styled.li`
    color: #fff;
    display: inline-block;

    a {
        padding: 15px 10px;
        margin: 0 10px;
        cursor: pointer;
        position: relative;

        /* 边框效果 */
        span {
            position: absolute;
            transition: transform .5s;
            width: 100%;
            height: 1px; 
            background-color: #fff;
            transform: scaleX(0);

            &:nth-child(1) {
                top: 0;
                left: 0;
                transform-origin: right;
            }

            &:nth-child(2) {
                bottom: 0;
                right: 0;
                transform-origin: left;
            }
        }

        &:hover {
            span {
                transform: scaleX(1);
            }
        }
    }
`;

const Contact = styled.a`
    display: inline-block;
    cursor: pointer;
    background-color: #47b8e0;
    margin-left: 28px;
    padding: 8px 15px;
    border-radius: 12px;
    transition: all .5s;

    &:hover {
        background-color: rgba(79, 184, 224, .7);
    }
`;

export default function Navigator() {
    return (
        <Nav>
            <Wrapper>
                {/* logo */}
                <Logo>
                    Logo
                </Logo>

                {/* 菜单 */}
                <Menu>
                    <Item>
                        <a>
                            前端
                            <span />
                            <span />
                        </a>
                    </Item>
                    <Item>
                        <a>
                            滑板
                            <span />
                            <span />
                        </a>
                    </Item>
                    <Item>
                        <a>
                            骑行
                            <span />
                            <span />
                        </a>
                    </Item>
                    <Item>
                        <a>
                            烘焙
                            <span />
                            <span />
                        </a>
                    </Item>
                    <Item>
                        <a>
                            视频
                            <span />
                            <span />
                        </a>
                    </Item>

                    <Contact>
                        联系我
                    </Contact>
                </Menu>
            </Wrapper>

            {/* body样式 */}
            <style jsx>
                {`
                    :global(body) {
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
                        Helvetica, sans-serif;
                    }
                `}
            </style>
        </Nav>
    );
}