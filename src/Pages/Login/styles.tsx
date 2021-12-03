import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#395185",
    alignItems: "center",
    height: "100%",
  },
  
  header: {
    height: 100,
    marginTop: 180,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  
  fundo: {
    backgroundColor: "#395185",
  },

  img: {
    height: 40,
    padding: 30,
    width: 60,
  },

  textoImg: {
    color: "#fff",
    fontSize: 50,
    fontFamily: "Arial",
    marginLeft: 10,
  },

  Input: {
    backgroundColor: "#fff",
    marginVertical: 20,
    width: "70%",
    height: 40,
    borderRadius: 20,
    paddingLeft: 15,
  },

  formulario: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

  botao: {
    backgroundColor: "#213873",
    width: "70%",
    height: 48,
    borderRadius: 20,
    cusor: 'pointer',
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    color: "#fff",
    fontSize: 25,
  },

  criar: {
    color: "#c9c9c9",
    fontSize: 16,
    marginTop: 70,
    cursor: 'pointer'
  },
});
