import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Styled = {
    Root: styled.View`
        padding-top: 60;
        padding-horizontal: 16;
    `,
}

function HomeScreen() {
    return (
        <Styled.Root>
            <Text>Home Screen</Text>
        </Styled.Root>
    );
}

export default HomeScreen;