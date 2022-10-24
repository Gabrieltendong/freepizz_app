import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../components/common/Container'
import Input from '../../components/common/Input'
import Feather from '@expo/vector-icons/Feather';
import RestoListItem from '../../components/common/RestoListItem';

const ListScreen = () => {
    return (
        <Container>
            <Text>Commander</Text>
            <Input placeholder={"Chercher un rest"} rigthIcon={<Feather name='x' size={24} />} />
            <RestoListItem />
            <RestoListItem />
            <RestoListItem />
            <RestoListItem />
        </Container>
    )
}

export default ListScreen