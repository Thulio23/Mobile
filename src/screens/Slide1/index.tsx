import { ImageBackground } from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import { styles } from "./styles"

export function Slide1() {
    const slide = require('../../assets/zico.png') //background image
    return(
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style=(styles.fundo)>

            </View>
        </ImageBackground>
    )
}
