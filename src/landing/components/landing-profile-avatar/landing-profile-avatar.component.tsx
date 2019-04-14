import { Image } from 'common/components/image';
import React, { Component } from 'react';
import styled from 'styled-components';

export const LandingProfileAvatar = styled(Image)`
    height: 8em;
    width: 8em;
    margin: 0.5em;
    border-radius: 50%;
    box-shadow: -1px -1px 100px -23px #000;

    @media (max-width: 720px) {
        align-self: center;
    }
`;
 
