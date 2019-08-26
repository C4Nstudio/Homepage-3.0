import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background: rgb(38, 42, 48);
    padding: 50px;

    p {
        color: #fff;
        font-size: .8rem;
        line-height: .8rem;
    }
`;

export default function Footer(props) {
    return (
        <FooterContainer>
            <p>Copyright @ 2019</p>
            <p>HuangXican All Rights Reserved.</p>
            <p>黄夕粲 版权所有</p>
            <p>粤ICP备17003834号-1</p>
        </FooterContainer>        
    );
}