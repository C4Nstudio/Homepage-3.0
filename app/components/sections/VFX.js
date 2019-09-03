import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../Header';

const Container = styled.div`
    min-height: 500px;
    position: relative;
`;

export default function VFX() {
    return (
        <Container id='vfx'>
            <Header
                title='视频制作'
                subTitle='sideline'
            />
        </Container>
    );
}