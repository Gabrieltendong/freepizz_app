import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import SelectDropdown from 'react-native-select-dropdown'
import { Feather } from '@expo/vector-icons';



const SelectDate = ({ label }) => {

    const countries = ["Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland"]
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
                                !focus ? <Feather name='chevron-down' size={22} color='lightgray' /> : <Feather name='chevron-up' size={22} color='lightgray' />
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