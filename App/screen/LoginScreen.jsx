import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import login from "../../assets/Images/login.jpg";
import google from "../../assets/Images/google.png";
import Color from "../utils/Color";

export default function LoginScreen() {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Image
        source={login}
        style={{ width: 250, height: 500, objectFit: "contain", marginTop: 70 }}
      />
      <View
        style={{
          height: 400,
          width: "100%",
          backgroundColor: Color.PRIMARY,
          marginTop: -80,
          padding: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,
            fontFamily: "OutfitBold",
            color: Color.WHITE,
            marginTop: 30,
          }}
        >
          Hello World
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: Color.LIGHT_PRIMARY,
            fontFamily: "OutfitRegular",
          }}
        >
          Your ultimate programming learning street
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: Color.WHITE,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: 10,
            borderRadius: 99,
            marginTop: 25,
          }}
        >
          <Image style={{ width: 40, height: 40 }} source={google} />
          <Text
            style={{
              fontSize: 20,
              fontFamily: "OutfitRegular",
              color: Color.PRIMARY,
            }}
          >
            Sign in with google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
