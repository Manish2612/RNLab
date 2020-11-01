import React from 'react';
import styled from 'styled-components/native';
import _ from 'lodash';
import { data, WIDTH, HEIGHT, PARTS, HeaderFooterProps } from './helper';
import Animated, { useSharedValue, useAnimatedStyle, delay, withSpring } from 'react-native-reanimated';
import { FlingGestureHandler, Directions, State } from 'react-native-gesture-handler';
import Slide from './Slide';
import Indicators from './Indicators';

const StripedCarousel: React.FC<{}> = props => {
    const activeSlide = useSharedValue(0);
    const swipe = (isNext: boolean) => {
        // Set Next/Previous slide according to swipe gesture
        if (isNext) {
            if (activeSlide.value < data.length - 1) {
                activeSlide.value = activeSlide.value + 1;
            }
        } else {
            if (activeSlide.value > 0) {
                activeSlide.value = activeSlide.value - 1;
            }
        }
    }
    const onLeftSwipe = ({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
            swipe(true)
        }
    }
    const onRightSwipe = ({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
            swipe(false)
        }
    }

    return (
        <FlingGestureHandler
            direction={Directions.LEFT}
            onHandlerStateChange={onLeftSwipe}>
            <FlingGestureHandler
                direction={Directions.RIGHT}
                onHandlerStateChange={onRightSwipe}>
                <Styled.wrapper>
                    <MovieTitle data={data} activeSlide={activeSlide} />
                    <Styled.MovieContainerWrapper style={slideShadow}>
                        {data.map((movie, index) => (<Slide movie={movie} index={index} activeSlide={activeSlide} />))}
                    </Styled.MovieContainerWrapper>
                    <Indicators data={data} activeSlide={activeSlide} />
                </Styled.wrapper>
            </FlingGestureHandler>
        </FlingGestureHandler>);
}

const MovieTitle: React.FC<HeaderFooterProps> = props => {
    const { data, activeSlide } = props;
    return (<Styled.titleContainer width={data.length * 40}>
        {
            data.map((item, index) => {
                return (<Styled.title style={[useAnimatedStyle(() => {
                    let translateY = activeSlide.value !== index ? -100 : 0;
                    return {
                        transform: [{
                            translateY: delay(PARTS * 100, withSpring(translateY, { velocity: 10 }))
                        }],
                    };
                })]}>
                    {item.movieName}
                </Styled.title>)
            })
        }
    </Styled.titleContainer>)
}


const Styled = {
    wrapper: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
    `,
    MovieContainerWrapper: styled.View`
        width: ${WIDTH};
        height: ${HEIGHT};
        background-color: #ccc;
        border-radius: 10;        
    `,
    titleContainer: styled.View`
        margin-bottom: 20;
        height:70;
        overflow:hidden;
        width: 100%;
        justify-content: center;
        align-items: center;
    `,
    title: styled(Animated.Text)`
        flex: 1;
        text-align: center;
        color: #000;
        font-size: 45;
        position: absolute;
        top:10;
        left:0;
        width:100%;
        background-color:#f0f0f0;
    `,
}
const slideShadow = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
}

export default StripedCarousel;
