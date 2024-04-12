import { TouchableOpacity, TouchableOpacityProps, Text, ActivityIndicator } from "react-native";

type props = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest } : props) {
    return (
        <TouchableOpacity 
        disabled={isLoading} 
        activeOpacity={0.7}
        className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"
        {...rest}>
            {
                isLoading ? (<ActivityIndicator className="text-green-500" />) : (<Text className="text-white text-base font-bold uppercase">{title}</Text>)
            }
        </TouchableOpacity>
    )
}