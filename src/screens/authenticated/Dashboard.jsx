import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet' // <-- Import BottomSheet

export default function Dashboard() {
    const navigation = useNavigation()

    // ref
    const bottomSheetRef = useRef(null)

    // variables
    const snapPoints = useMemo(() => ['25%', '70%'], [])

    // callbacks
    const handleOpenPress = () => {
        bottomSheetRef.current?.expand()
    }

    const handleClosePress = () => {
        bottomSheetRef.current?.close()
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "blue", fontSize: responsiveFontSize(2) }}>Dashboard by Hira Soft Ltd</Text>
                <Text>Founder: Lutfor Rahman Hira</Text>

                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{
                        backgroundColor: "blue",
                        paddingHorizontal: responsiveWidth(2),
                        paddingVertical: responsiveHeight(0.5),
                        borderRadius: responsiveWidth(1),
                        marginTop: responsiveHeight(2)
                    }}
                >
                    <Text style={{ color: "white" }}>Open Drawer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleOpenPress}
                    style={{
                        backgroundColor: "green",
                        paddingHorizontal: responsiveWidth(2),
                        paddingVertical: responsiveHeight(0.5),
                        borderRadius: responsiveWidth(1),
                        marginTop: responsiveHeight(2)
                    }}
                >
                    <Text style={{ color: "white" }}>Open Bottom Sheet</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Sheet */}
            <BottomSheet
                ref={bottomSheetRef}
                index={-1} // Start closed
                snapPoints={snapPoints}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Text style={{ fontSize: responsiveFontSize(2) }}>Hello from Bottom Sheet!</Text>

                    <TouchableOpacity
                        onPress={handleClosePress}
                        style={{
                            backgroundColor: "red",
                            paddingHorizontal: responsiveWidth(2),
                            paddingVertical: responsiveHeight(0.5),
                            borderRadius: responsiveWidth(1),
                            marginTop: responsiveHeight(2)
                        }}
                    >
                        <Text style={{ color: "white" }}>Close Bottom Sheet</Text>
                    </TouchableOpacity>
                </BottomSheetView>
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'purple'
    }
})
