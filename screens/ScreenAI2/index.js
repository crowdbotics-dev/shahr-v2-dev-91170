import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const LoginScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image style={styles.socialIcon} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.socialLoginText}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image style={styles.socialIcon} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.socialLoginText}>Login with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image style={styles.socialIcon} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.socialLoginText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20
  },
  loginButton: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 20
  },
  loginButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  orText: {
    textAlign: "center",
    marginBottom: 20
  },
  socialLoginContainer: {
    marginBottom: 20
  },
  socialLoginButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  socialLoginText: {
    fontWeight: "bold"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  footerLink: {
    color: "#007AFF"
  }
});
export default LoginScreen;