import React from "react";
import { StatusBar } from "expo-status-bar";
import {View,Text,Image,TextInput} from "react-native";
import { stylesLink, stylesLinkImportantes, styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import { StackNavigatorParamList } from "../../../types";
import Post from "../Post";
const LinkItem = (props: any) => {
  return <Text style={stylesLink.text}>{props.name}</Text>;
};
const LinksImportantes=() => {
  return (
    <View style={stylesLinkImportantes.container}>
      <LinkItem name="home" />
      <LinkItem name="post" />
      <LinkItem name="videos" />
      <LinkItem name="photos" />
      <LinkItem name="community" />
    </View>
  )
}
type HomeProps = NativeStackNavigationProp<StackNavigatorParamList>;
const Home = () => {
  const navigation = useNavigation<HomeProps>();
  function irTelaLogin() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/arrow-left.png")}></Image>
        <View style={styles.inputView}>
          <Image source={require("../../assets/ei_search.png")}></Image>
          <TextInput placeholder="Search" placeholderTextColor="#F5FFFF" style={styles.texto}></TextInput>
        </View>
        <Image source={require("../../assets/share.png")}></Image>
      </View>
      <LinksImportantes />
      <StatusBar style="auto" />
      <Post />
    </View>
  );
};
export default Home;