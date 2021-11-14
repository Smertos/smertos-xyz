import React, { Component, createRef, RefObject } from 'react';
import {
    LandingProfileNamePhantom,
    LandingProfileInfoWrapper,
    LandingProfileName,
    LandingProfileNameDivider,
    LandingProfileQuickDescription,
    LandingProfileUserName
} from './landing-profile-info.styled';

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

type TLandingProfileInfoProps = {
    description: string;
    name: string;
    userName: string;
}

export class LandingProfileInfo extends Component<TLandingProfileInfoProps> {

    offsetMultiplier: number = 5;
    primaryNameRef: RefObject<HTMLElement> = createRef();
    secondaryNameRef: RefObject<HTMLElement> = createRef();

    componentDidMount(): void {
        document.body.addEventListener('mousemove', this.mouseMove);
    }

    mouseMove = (event: MouseEvent): void => {
        const { clientX, clientY } = event;
        const { bottom, height, width, left, right, top, x, y } = this.primaryNameRef.current.getBoundingClientRect() as DOMRect;
        const [halfWidth, halfHeight] = [width / 2, height / 2];

        const isLeft = clientX < (x + halfWidth);
        const isTop = clientY < (y + halfHeight);

        const positionX = x + halfWidth;
        const positionY = y + halfHeight;

        const diffX = clientX - positionX;
        const diffY = clientY - positionY;

        const offsetX = -this.offsetMultiplier * diffX / ((isLeft ? left : right) + halfWidth);
        const offsetY = -this.offsetMultiplier * diffY / ((isTop ? top : bottom) + halfHeight);

        this.primaryNameRef.current.style.textShadow = `
            ${clamp(offsetX, -4, 4)}px ${clamp(offsetY, -4, 4)}px 5px red
        `;

        this.secondaryNameRef.current.style.textShadow = `
            ${clamp(offsetX, -3, 3)}px ${clamp(offsetY, -3, 3)}px 3px blue
        `;
    };

    render(): JSX.Element {
        const { description, name, userName } = this.props;

        return (
            <LandingProfileInfoWrapper>
                <div>
                    <LandingProfileName ref={this.primaryNameRef}>
                        {name}

                        <LandingProfileNamePhantom ref={this.secondaryNameRef}>{name}</LandingProfileNamePhantom>
                    </LandingProfileName>

                    <LandingProfileNameDivider />

                    <LandingProfileUserName>@{userName}</LandingProfileUserName>
                </div>

                <LandingProfileQuickDescription>{description}</LandingProfileQuickDescription>
            </LandingProfileInfoWrapper>
        );
    }
}
