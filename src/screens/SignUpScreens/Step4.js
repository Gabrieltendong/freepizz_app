import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Input from '../../components/common/Input'
import DropInput from '../../components/common/DropInput'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { useState } from 'react'
import { PRIMARY } from '../../styles/colors'

const Step4 = () => {
    const [active, setActive] = useState(false)
    return (
        <View>
            <Text style={styles.txtHeader} >Etape 4</Text>
            <Text style={styles.txtSub} >Pour obtenir mes cadeaux</Text>

            <Input label={"Code Postal"} />
            <Text style={styles.txtOu} >OU</Text>
            <Input label={"Address Complete"} />
            <Input placeholder={"Appartement/Unite/Suite"} />
            <Input placeholder={"Ville"} />
            <Input placeholder={"Code Postal"} />
            <Input placeholder={"Pays"} />
            <DropInput placeholder={"Province/Etat"} />
            <BouncyCheckbox
                size={20}
                fillColor={PRIMARY}
                isChecked={active}
                text="Custom Checkbox"
                disableBuiltInState
                textComponent={<Text style={[{ fontSize: 17, marginLeft: 30 }, active ? { fontSize: 17.5, color: PRIMARY } : null]} >Jai lu et j'accepte les termes et condition</Text>}
                style={{ flexDirection: 'row', justifyContent: 'flex-start', height: 56, marginBottom: 30 }}
                iconStyle={{ borderColor: "#225EA8" }}
                iconInnerStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: "JosefinSans-Regular", }}
                onPress={() => { setActive(!active) }}
            />
        </View>
    )
}

export default Step4