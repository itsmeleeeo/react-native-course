import { StatusBar, Text, View, ScrollView, TouchableOpacity, Alert, Modal } from "react-native";
import { Header } from "@/components/header"
import { Credentials } from "@/components/credentials";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker"
import { QRCode } from "@/components/qrcode";
export default function Ticket() {

    const [image, setImage] = useState(""); 
    const [expandQRCode, setExpandQRCode] = useState(false);

    async function handleSelecteImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4,4]
            })

            if(result.assets) {
                setImage(result.assets[0].uri)
            }
        } catch(err) {
            console.log(err);
            Alert.alert("Photo", "It was not possible to select a photo")
        }
    }

    return(
        <View className="flex-1 bg-green-500">
            <StatusBar barStyle="light-content" />
            <Header title="Credentials"/>
            <ScrollView className="-mt-28 -z-10" contentContainerClassName="px-8 pb-8" showsVerticalScrollIndicator={false}>
                <Credentials image={image} onChangeAvatar={handleSelecteImage} onExpandQrCode={() => setExpandQRCode(true)}/>
                <FontAwesome name="angle-double-down" size={24} color={colors.gray[300]} className="self-center my-6"/>
                <Text className="text-white font-bold text-2xl mt-4">Share Credentials</Text>
                <Text className="text-white font-regular text-base mt-1 mb-6">Show the world that you are enrolled on Unite Summit</Text>
                <Button title="Share" />
                <TouchableOpacity activeOpacity={0.7}>
                    <Text className="text-base text-white font-bold text-center mt-10">Remove Ticket</Text>
                </TouchableOpacity>
            </ScrollView>
            <Modal visible={expandQRCode} statusBarTranslucent animationType="fade">
                <View className="flex-1 bg-green-500 items-center justify-center">
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setExpandQRCode(false)}>
                        <QRCode value="teste" size={300}/>
                        <Text className="font-body text-orange-500 text-sm mt-10 text-center">
                            Close
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>    
        </View>
    ) 
}