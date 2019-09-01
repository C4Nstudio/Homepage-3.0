import React, { useState } from 'react';
import styled from 'styled-components';

import device from '../utils/device';
import useScrollPosition from '../utils/useScrollPosition';

// 导航栏默认高度
const DEFAULT_NAV_HEIGHT = 100;
// 导航栏收缩高度
const FOLDED_NAV_HEIGHT = 60;

const Nav = styled.nav`
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    color: #fff;
    background-color: ${props => props.isPageScrolled ? 'rgba(12, 12, 12, .8)' : 'transparent'};
    box-shadow: ${props => props.isPageScrolled ? '0 3px 5px rgba(12, 12, 12, .7)' : 'none'};
    transition: .5s;
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: ${props => (props.isPageScrolled ? FOLDED_NAV_HEIGHT : DEFAULT_NAV_HEIGHT) + 'px'};
    align-items: center;
    transition: height .5s;
`;

const Logo = styled.span`
    margin-left: 30px;
    font-size: 1.2rem;
`;

const Menu = styled.ul`
    list-style: none;
    margin-right: 30px;
    display: none;

    @media (min-width: 960px) {
        display: block;
    }
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

const Toggle = styled.div`
    margin-right: 30px;
    position: relative;
    display: block;
    width: 35px;
    height: 35px;
    cursor: pointer;

    @media (min-width: 960px) {
        display: none;
    }
`;

const Bar = styled.div`
    width: 35px;
    height: 4px;
    position: absolute;
    background: ${props => props.menuDown ? 'transparent' : '#fff'};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: ${props => props.menuDown ? 'none' : '0 1px 2px rgba(0, 0, 0, .5)'};
    transition: .3s;

    &:before, &:after {
        content: '';
        position: absolute;
        width: 35px;
        height: 4px;
        background: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .5);
        transition: .5s;
    }

    &:before {
        top: ${props => props.menuDown ? '0' : '-10px'};
        transform: ${props => props.menuDown ? 'rotate(45deg)' : 'none'};
    }

    &:after {
        top: ${props => props.menuDown ? '0' : '10px'};
        transform: ${props => props.menuDown ? 'rotate(-45deg)' : 'none'};
    }
`;

const DropdownMenu = styled.ul`
    margin: 0;
    padding: 0;
    height: ${props => `calc(100vh - ${(props.isPageScrolled ? FOLDED_NAV_HEIGHT : DEFAULT_NAV_HEIGHT) + 'px'})`};
    background: rgba(0, 0, 0, .9);
    list-style: none;
    display: ${props => props.menuDown ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-basis: 1;
    
    /* opacity: ${props => props.menuDown ? '1' : '0'};
    transition: opacity .5s; */
`;

const DropdownMenuItem = styled.li`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
`;

export default function Navigator() {
    // 菜单是否展开
    const [menuDown, setMenuDown] = useState(false);

    // 页面是否发生滚动
    const [isPageScrolled, setIsPageScrolled] = useState(false);

    // 监听滚动事件
    useScrollPosition(({ prevPos, currPos }) => {
        // 超过阈值时改变state以调整导航栏样式
        setIsPageScrolled(Math.abs(currPos.y) > 100);
    });

    // 切换菜单展开状态
    function toggleMenuDown() {
        setMenuDown(prev => !prev);
    }

    return (
        <Nav
            isPageScrolled={isPageScrolled}
        >
            <Wrapper
                isPageScrolled={isPageScrolled}
            >
                {/* logo */}
                <Logo>
                    C4Nstudio
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

                {/* 展开菜单 */}
                <Toggle
                    onClick={e => toggleMenuDown()}
                >
                    <Bar
                        menuDown={menuDown}
                    />
                </Toggle>
            </Wrapper>

            {/* 移动端菜单 */}
            <DropdownMenu
                menuDown={menuDown}
                isPageScrolled={isPageScrolled}
                // onClick={e => console.log(e)}
            >
                <DropdownMenuItem>
                    <a>
                        前端 / Front End
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a>
                        滑板 / Skating
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a>
                        骑行 / Cycling
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a>
                        烘焙 / Baking
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a>
                        视频 / VFX
                    </a>
                </DropdownMenuItem>
            </DropdownMenu>
        </Nav>
    );
}