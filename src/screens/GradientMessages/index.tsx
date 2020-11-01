import React from 'react';
import styled from 'styled-components/native';
import Messages from './Messages';
import _ from 'lodash';

const GradientMessages: React.FC<{}> = props => {
    return (<Styled.Safe>
        <Styled.header>
            <Styled.userName onPress={() => { props.navigation.goBack() }}
                style={{ paddingHorizontal: 10 }}>
                {'<'}
            </Styled.userName>
            <Styled.userIcon />
            <Styled.userName>Lionel</Styled.userName>
        </Styled.header>
        <Messages />
        <Styled.footer>
            <Styled.input placeholder="Message" placeholderTextColor="#ffffff" />
        </Styled.footer>
    </Styled.Safe>);
}

const Styled = {
    Safe: styled.SafeAreaView`
        background-color: #000000;
        flex:1;
    `,
    Root: styled.View`
        background-color: #000000;
        flex:1;
    `,
    header: styled.View`
        padding-horizontal: 16;
        padding-vertical: 16;
        border-bottom-width:0.6;
        border-bottom-color: #444;
        flex-direction: row;
        align-items:center;
    `,
    userIcon: styled.View`
        height:35;
        width:35;
        background: #ccc;
        border-radius: 50;
        margin-right: 8;
    `,
    userName: styled.Text`
        color: #ffffff;
    `,
    footer: styled.View`
        padding-horizontal: 16;
        padding-vertical: 12;
    `,
    input: styled.TextInput`
        border-width:0.6;
        border-color: #ffffff;
        border-radius:30;
        padding-horizontal: 16;
        padding-vertical: 16;
        color:#fff
    `,
};

export default GradientMessages;
