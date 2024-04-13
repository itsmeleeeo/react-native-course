import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator,
    StyleSheet
  } from "react-native"
  
  type Props = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
  }
  
  export function Button({ title, isLoading = false, ...rest }: Props) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={isLoading}
        className="w-full h-14 items-center justify-center rounded-lg"
        style={style.button}
        {...rest}
      >
        {isLoading ? (
          <ActivityIndicator className="text-green-500" />
        ) : (
          <Text className="text-white text-base font-bold uppercase">
            {title}
          </Text>
        )}
      </TouchableOpacity>
    )
  }

  const style = StyleSheet.create({
    button: {
        backgroundColor: "#F48F56",
        padding: 10,
        borderRadius: 5,
        alignItems: "center"
    }
})