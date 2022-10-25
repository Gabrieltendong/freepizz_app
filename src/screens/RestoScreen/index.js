import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Header from '../../components/common/Header';
import { BLACK, PRIMARY } from '../../styles/colors';
import ListScreen from './ListScreen';
import MapScreen from './MapScreen';
import styles from './styles';




const renderScene = SceneMap({
    first: MapScreen,
    second: ListScreen,
});

export default function Restos({ navigation, route }) {
    const layout = useWindowDimensions();

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: PRIMARY }}
            style={{ backgroundColor: BLACK }}
            activeColor={PRIMARY}
        />
    );

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Carte' },
        { key: 'second', title: 'Liste' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
        />
    );
}