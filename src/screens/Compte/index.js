import { View, Text, Switch } from 'react-native'
import React from 'react'
import Container from '../../components/common/Container'
import { Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { PRIMARY, WHITE } from '../../styles/colors';
import styles from './styles';
import SelectDate from '../../components/common/Select';
import { useState } from 'react';

const Compte = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Container>
            <View style={styles.wrapper} >
                <View style={[styles.rowFlex, styles.flexStart]} >
                    <Feather name="user" size={32} color={PRIMARY} />
                    <Text style={styles.itemTitle} >Compte</Text>
                </View>
                <View style={styles.borderBox} >
                    <View style={[styles.rowFlex, styles.paddingXY]} >
                        <Text style={styles.flexTxt} >
                            infos personnelles
                        </Text>
                        <Feather name='chevron-right' size={28} />
                    </View>
                    <View style={styles.divider} />
                    <View style={[styles.rowFlex, styles.paddingXY]} >
                        <Text style={styles.flexTxt} >
                            infos personnelles
                        </Text>
                        <Feather name='chevron-right' size={28} />
                    </View>
                </View>
            </View>
            <View style={styles.wrapper} >
                <View style={[styles.rowFlex, styles.flexStart]} >
                    <SimpleLineIcons name="screen-smartphone" size={32} color={PRIMARY} />
                    <Text style={styles.itemTitle} >Application</Text>
                </View>
                <View style={styles.borderBox} >
                    <View style={[styles.rowFlex, styles.paddingXY]} >
                        <Text style={styles.flexTxt} >
                            Langue
                        </Text>
                        <SelectDate />

                    </View>
                    <View style={styles.divider} />
                    <View style={[styles.rowFlex, styles.paddingXY]} >
                        <Text style={styles.flexTxt} >
                            Mode
                        </Text>
                        <SelectDate />
                    </View>
                </View>
            </View>
            <View style={styles.wrapper} >
                <View style={[styles.rowFlex, styles.flexStart]} >
                    <Ionicons name="finger-print" size={32} color={PRIMARY} />
                    <Text style={styles.itemTitle} >Securite</Text>
                </View>
                <View style={styles.borderBox} >
                    <View style={[styles.rowFlex, styles.paddingXY]} >
                        <Text style={styles.flexTxt} >
                            Utiliser ma carte
                        </Text>
                        <SelectDate />

                    </View>
                    <View style={styles.divider} />
                    <View style={[styles.rowFlex, styles.paddingXY]} >
                        <Text style={styles.flexTxt} >
                            Autoriser prochain paiement
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: PRIMARY }}
                            thumbColor={isEnabled ? WHITE : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.wrapper} >
                <View style={[styles.rowFlex, styles.flexStart]} >
                    <Ionicons name="ios-notifications-outline" size={32} color={PRIMARY} />
                    <Text style={styles.itemTitle} >Notifications</Text>
                </View>
                <View style={styles.borderBox} >
                    <View style={[styles.rowFlex, styles.paddingXY]} >
                        <Text style={styles.flexTxt} >
                            Nouvelles offres par push
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: PRIMARY }}
                            thumbColor={isEnabled ? WHITE : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />

                    </View>
                    <View style={styles.divider} />
                    <View style={[styles.rowFlex, styles.paddingXY]} >
                        <Text style={styles.flexTxt} >
                            Nouvelle offres par courriel
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: PRIMARY }}
                            thumbColor={isEnabled ? WHITE : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.divider} />
                    <View style={[styles.rowFlex, styles.paddingXY]} >
                        <Text style={styles.flexTxt} >
                            Nouvelles promotions Merci
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: PRIMARY }}
                            thumbColor={isEnabled ? WHITE : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.divider} />
                    <View style={[styles.rowFlex, styles.paddingXY]} >
                        <Text style={styles.flexTxt} >
                            M'aviser lorsque des soldes de mn compte sont utilises pour effectuer uun paiement
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: PRIMARY }}
                            thumbColor={isEnabled ? WHITE : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
            <View style={[styles.rowFlex, styles.bottomIcon]} >
                <View style={[styles.pizzIcon]} >
                    <Ionicons name="md-pizza-outline" size={44} color={PRIMARY} />
                </View>
                <View>
                    <Text style={[styles.yelTxt, { marginLeft: 5 }]} >Gift and Loyalty</Text>
                    <Text style={styles.yelTxt} >V1 Bundle V15</Text>
                    <Text style={styles.yelTxt} >Freepizz @2022</Text>
                </View>
            </View>
        </Container>
    )
}

export default Compte