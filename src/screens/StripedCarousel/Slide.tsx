import React from 'react';
import styled from 'styled-components/native';
import MaskedView from '@react-native-community/masked-view';
import Svg, { Rect } from 'react-native-svg';
import _ from 'lodash';
import { data, Movie, WIDTH, HEIGHT, PARTS, RANGE } from './helper';
import Animated, { useAnimatedStyle, withTiming, delay } from 'react-native-reanimated';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

type SlideProp = {
    movie: Movie,
    index: number,
    activeSlide: Animated.SharedValue,
}
const Slide: React.FC<SlideProp> = ({ movie, index, activeSlide }) => {
    return (<Styled.MovieContainer
        style={{ zIndex: data.length - index }}
        key={`movie-slide-${index + 1}`}
        height={HEIGHT}
        width={WIDTH}
        maskElement={
            <>
                {
                    // Generate SVG Stripes to Mask image
                    RANGE.map((item, barIndex) => {
                        return (
                            <AnimatedSvg
                                height={HEIGHT / PARTS} width={"100%"} viewBox={`0 0 ${WIDTH} ${HEIGHT / PARTS}`}
                                style={[useAnimatedStyle(() => {
                                    let W = 0; //For current slide index translate Svg to 0
                                    let delayMs = 0;
                                    if (activeSlide.value < index) {
                                        W = WIDTH; //For previous slide index translate Svg bar to Left
                                    } else if (activeSlide.value > index) {
                                        W = -WIDTH; //For Nrevious slide index translate Svg bar to Right
                                    }
                                    delayMs = barIndex * 100;
                                    // using delay stagger strips in/out
                                    return {
                                        transform: [{
                                            translateX: delay(delayMs, withTiming(W, { duration: 600 }))
                                        }],
                                    };
                                })]}>
                                <Rect
                                    x={0}
                                    y={0}
                                    width="100%"
                                    height={HEIGHT / PARTS}
                                    fill={"red"} />
                            </AnimatedSvg>
                        )
                    })
                }
            </>
        }
    >
        {/* Above svg will mask image below */}
        <Styled.Image source={movie.image}
            resizeMethod="resize"
            resizeMode={"cover"} />
    </Styled.MovieContainer>);
}

const Styled = {
    MovieContainer: styled(MaskedView)`
        justify-content: center;
        align-items: center;
        height: ${props => props.height};
        width: ${props => props.width};
        position: absolute;
        top: 0;
        left: 0;
    `,
    Image: styled.Image`
        width: 100%;
        height: 100%;
        border-radius: 10;
    `,
};

export default Slide;
