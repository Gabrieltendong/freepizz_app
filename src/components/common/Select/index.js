import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import SelectDropdown from 'react-native-select-dropdown'
import { Ionicons } from '@expo/vector-icons';
import { WHITE } from '../../../styles/colors';



const SelectDate = ({ label }) => {

    const countries = ["Francais"]
    const [focus, setFocus] = React.useState(false)
    return (
        <View style={styles.selectWrapper} >
            <SelectDropdown
                data={countries}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onSelect={(selectedItem, index) => {
                    // console.log(selectedItem, index)
                }}
                defaultValue={'Sel'}
                buttonStyle={styles.btnStyle}
                renderCustomizedButtonChild={(selectedItem, index) => (
                    <View style={styles.selectItem} >
                        <View>
                            <Text style={styles.label} >{label}</Text>
                            <Text style={styles.valueStyle} >{selectedItem}</Text>
                        </View>
                        <View>
                            {
                                !focus ? <Ionicons name='ios-caret-down-outline' size={22} color={WHITE} /> : <Ionicons name='ios-caret-up-outline' size={22} color={WHITE} />
                            }
                        </View>
                    </View>
                )}
                defaultButtonText={'Select date'}
                rowStyle={{}}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return <Text>{selectedItem} {index}</Text>
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return <Text>{item}</Text>
                }}
            />
        </View>
    )
}

export default SelectDate;