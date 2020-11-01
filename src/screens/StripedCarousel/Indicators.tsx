import React from 'react';
import styled from 'styled-components/native';
import _ from 'lodash';
import { HeaderFooterProps, PARTS } from './helper';
import Animated, { useAnimatedStyle, delay, withSpring } from 'react-native-reanimated';

const Indicators: React.FC<HeaderFooterProps> = props => {

    const { data, activeSlide } = props;

    return (
        <Styled.footer width={data.length * 40}>
            {
                data.map((item, index) => <Styled.indicator>
                    <Styled.indicator style={[{
                        backgroundColor: '#14a83c',
                    }, useAnimatedStyle(() => {
                        let translateY = activeSlide.value !== index ? 16 : 0;
                        return {
                            transform: [{
                                translateY: delay(PARTS * 100, withSpring(translateY, { velocity: 10 }))
                            }],
                        };
                    })]} />
                </Styled.indicator>)
            }
        </Styled.footer>);
}

const Styled = {
    footer: styled.View`
        margin-top: 50;
        flex-direction: row;
        width: ${props => props.width};
        justify-content: space-between;
        align-items: center;
    `,
    indicator: styled(Animated.View)`
        width: 16;
        height: 16;
        overflow:hidden;
        border-radius: 20;
        border-width:0;
        border-color:green;
        background-color: #cccccc;
    `,
}

export default Indicators;
