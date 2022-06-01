import styled from '@emotion/styled';

type TImageProps = {
    loading?: 'lazy';
    src: string;
};

export const Image = styled.img<TImageProps>``;
