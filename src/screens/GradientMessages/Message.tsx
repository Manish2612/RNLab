import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { MessageType } from './helper';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

type MessageThreadType = {
    item: MessageType,
    scrollY: Animated.Value,
    index: number,
    containerHeight: number,
}

const Message: React.FC<MessageThreadType> = (props: MessageThreadType) => {
    const { item, index, scrollY, containerHeight } = props;
    const rootView = React.useRef();
    let gradPositionAnim = useRef(new Animated.Value(0)).current;
    const setCurrentOffset = () => {
        rootView && rootView.current && rootView.current.measure((_, offsetY) => {
            //set initial/updated value of gradient background to y offset of current message
            gradPositionAnim.setValue(-offsetY);
        })
    }
    let listenerId = null;
    React.useEffect(() => {
        listenerId = scrollY.addListener(v => {
            // when scroll offset changes updated offset of gradient background
            setCurrentOffset();
        })
        return () => {
            scrollY.removeListener(listenerId);
        }
    }, [scrollY])
    return (<Styled.MessageWrapper status={item.status} ref={rootView}
        onLayout={() => {
            setCurrentOffset();
        }}
        key={`message-wrapper-${index}`}>
        <Styled.Message status={item.status}>
            {item.status === "sent" && <Styled.SvgContainer
                height={containerHeight + 32}
                style={{
                    transform: [{
                        // translate Y position according to current scroll offset
                        translateY: Animated.add(gradPositionAnim, scrollY)
                    }]
                }}
            >
                <Svg height="100%" width="100%">
                    <Defs>
                        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                            <Stop offset="0" stopColor={'#f83f4b'} stopOpacity="1" />
                            <Stop offset="1" stopColor={'#2b4fff'} stopOpacity="1" />
                        </LinearGradient>
                    </Defs>
                    <Rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#grad)"
                    />
                </Svg>
            </Styled.SvgContainer>}
            <Styled.MessageText>
                {item.message}
            </Styled.MessageText>
        </Styled.Message>
    </Styled.MessageWrapper>)
}

const Styled = {
    MessageWrapper: styled.View`
        padding-vertical:0;
        align-items: ${props => props.status === 'sent' ? "flex-end" : 'flex-start'};
    `,
    Message: styled.View`
        border-radius: 20;
        background-color: ${props => props.status === 'sent' ? "#0e63eb" : '#444'};
        margin-bottom:8;
        max-width: 75%;        
        overflow:hidden;
    `,
    MessageText: styled.Text`
        color: #fff;
        padding-horizontal: 16;
        padding-vertical: 12;
        background-color: rgba(0,0,0,0.1)
    `,
    SvgContainer: styled(Animated.View)`
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        height:${props => props.height}
    `,
}

export default Message;
