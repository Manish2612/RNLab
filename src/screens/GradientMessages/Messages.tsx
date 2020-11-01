import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { Animated, Dimensions, ScrollView } from 'react-native';
import { conversation } from './helper';
import Message from './Message';

const Styled = {
    Root: styled.View`
        background-color:#000;
        padding-vertical: 8;
    `,
}
const containerHeight = Dimensions.get('window').height;
const Messages = () => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const HEIGHT = containerHeight * 0.77;
    return (<Styled.Root style={{ height: HEIGHT }}>
        <ScrollView
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false },
            )}
            style={{ paddingHorizontal: 16 }}
            indicatorStyle={"white"}
            scrollEventThrottle={16}
            keyExtractor={(item, index) => `message-${index + 1}`}
            removeClippedSubviews={true}>
            {
                conversation.map((item, index) => (
                    <Message scrollY={scrollY}
                        index={index}
                        item={item}
                        containerHeight={HEIGHT} />))
            }
        </ScrollView>
    </Styled.Root>)
}

export default Messages;
