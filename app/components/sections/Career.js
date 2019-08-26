import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../Header';

const Container = styled.div`
    min-height: 500px;
    position: relative;
`;

export default function Career() {
    return (
        <Container>
            <Header
                title='前端开发'
                subTitle='career'
            />
        </Container>
    );
}