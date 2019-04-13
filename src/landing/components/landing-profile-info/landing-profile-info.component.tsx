import React, { Component, createRef, RefObject } from 'react';
import {
    LandingProfileNamePhantom,
    LandingProfileInfoWrapper,
    LandingProfileName,
    LandingProfileNameDivider,
    LandingProfileQuickDescription,
    LandingProfileUserName
} from './landing-profile-info.styled';

interface LandingProfileInfoProps {
    description: string;
    name: string;
    userName: string;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export class LandingProfileInfo extends Component {

    nameRef: RefObject<HTMLElement> = createRef();
    name2Ref: RefObject<HTMLElement> = createRef();
    offsetMult: number = 5;
    props: LandingProfileInfoProps;

    componentDidMount() {
        document.body.addEventListener('mousemove', this.mouseMove);
    }

    mouseMove = (event: MouseEvent & { target: HTMLBodyElement }): void => {
        const { clientX, clientY, target } = event;
        const { clientHeight, clientWidth } = document.body;
        const { bottom, height, width, left, right, top, x, y } = this.nameRef.current.getBoundingClientRect() as DOMRect;
        const [halfWidth, halfHeight] = [width / 2, height / 2];

        const isLeft = clientX < (x + halfWidth);
        const isTop = clientY < (y + halfHeight);

        const positionX = x + halfWidth;
        const positionY = y + halfHeight;

        const diffX = clientX - positionX;
        const diffY = clientY - positionY;

        const offsetX = -this.offsetMult * diffX / ((isLeft ? left : right) + halfWidth);
        const offsetY = -this.offsetMult * diffY / ((isTop ? top : bottom) + halfHeight);

        this.nameRef.current.style.textShadow = `${clamp(offsetX, -4, 4)}px ${clamp(offsetY, -4, 4)}px 5px red`;
        this.name2Ref.current.style.textShadow = `${clamp(offsetX, -3, 3)}px ${clamp(offsetY, -3, 3)}px 3px blue`;
    }

    render(): JSX.Element {
        const { description, name, userName } = this.props;

        return (
            <LandingProfileInfoWrapper>
                <LandingProfileName ref={this.nameRef}>
                    {name}
                    <LandingProfileNamePhantom ref={this.name2Ref}>{name}</LandingProfileNamePhantom>
                </LandingProfileName>

                <LandingProfileNameDivider></LandingProfileNameDivider>
                <LandingProfileUserName>@{userName}</LandingProfileUserName>

                <LandingProfileQuickDescription>{description}</LandingProfileQuickDescription>
            </LandingProfileInfoWrapper>
        );
    } 
}
