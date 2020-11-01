import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Styled = {
    Root: styled.View`
        padding-top: 60;
        padding-horizontal: 16;
    `,
    title: styled.Text`
        font-size:22;
        color: #323232;
        font-weight: bold;
    `,
    link: styled.Text`
        font-size:18;
        color: #323232;
    `,
    row: styled.View`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-vertical: 16;
        border-bottom-width: 0.7;
        border-bottom-color: #d0d0d0;
    `,
}

const HomeScreen = props => {
    const goTo = (screen: string) => {
        props.navigation.navigate(screen);
    }
    return (
        <Styled.Root>
            <Styled.row>
                <Styled.title>
                    Screens
                </Styled.title>
            </Styled.row>
            <TouchableOpacity onPress={() => goTo('GradientMessages')} activeOpacity={0.5}>
                <Styled.row>
                    <Styled.link>
                        Gradient Chat
                </Styled.link>
                    <Styled.link>
                        {'>'}
                    </Styled.link>
                </Styled.row>
            </TouchableOpacity>
        </Styled.Root>
    );
}

export default HomeScreen;