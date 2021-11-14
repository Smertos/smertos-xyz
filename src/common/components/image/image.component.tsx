import React from 'react';
import styled from 'styled-components';

type TImageProps = {
    loading?: 'lazy';
    src: string;
};

export const Image = styled.img<TImageProps>``;
