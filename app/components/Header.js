import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 1.5rem 0;
    color: ${props => props.fontColor || '#000'};

    @supports not ((clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%)) or (-webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%))) {
        padding-top: 2.5rem;
    }
`;

const Title = styled.h2`
    font-size: 2rem;
    text-align: center;
    position: relative;
    margin-top: .8rem;
`;

const SubTitle = styled.div`
    text-align: center;

    span {
        position: relative;

        &:before, &:after {
            content: '';
            width: 1.5rem;
            height: 2px;
            background: ${props => props.fontColor || '#000'};
            position: absolute;
            top: .5rem;
        }
        
        &:before {
            left: -2rem;
        }

        &:after {
            right: -2rem;
        }
    }
    
`;

export default function Header(props) {
    return (
        <Container
            fontColor={props.fontColor}
        >
            <SubTitle
                fontColor={props.fontColor}
            >
                <span>{props.subTitle}</span>
            </SubTitle>
            <Title>
                {props.title}
            </Title>
        </Container>
    );
}