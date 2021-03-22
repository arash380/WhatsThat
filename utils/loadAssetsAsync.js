import { Image } from "react-native";
import { Asset } from "expo-asset";

const appImages = [require("../app/assets/logo.png")];

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const loadAssetsAsync = async () => {
  await cacheImages(appImages);
};

export default loadAssetsAsync;
