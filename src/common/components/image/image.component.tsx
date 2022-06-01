import styled from '@emotion/styled';

type TImageProps = {
    loading?: 'eager' | 'lazy';
    src: string;
};

export const Image = styled.img<TImageProps>``;
