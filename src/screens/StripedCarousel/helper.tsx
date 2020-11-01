import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import _ from 'lodash';

export type Movie = {
    movieName: string,
    image: string,
}
export const WIDTH = Dimensions.get('window').width * 0.7;
export const HEIGHT = 500;
export const PARTS = 10;
export const RANGE = _.range(0, HEIGHT, HEIGHT / PARTS);

export type HeaderFooterProps = {
    data: Array<Movie>,
    activeSlide: Animated.SharedValue,
}
export const data: Array<Movie> = [
    {
        movieName: "WW84",
        image: require('../../../assets/WW84.png'),
    },
    {
        movieName: "Croods 2",
        image: require('../../../assets/Croods2.jpg'),
    },
    {
        movieName: "Black Widow",
        image: require('../../../assets/BlackWidow.jpg'),
    },
    {
        movieName: "Batman",
        image: require('../../../assets/Batman.jpg'),
    },
];
