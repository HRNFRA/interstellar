import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// View = <div>
// Text = <p>
// Les textes sont forcément dans des balises <Text>

// SafeAreaView : gérer l'encoche sur iOS

// Style
// Pas de className ni de class CSS
// Pas d'héritage comme en React
// Pour modifier la couleur d'un Text, je dois mettre le style dans la balise Text directement

// Dans React Native, tout est déjà en `display: flex` et en `flex-direction: column`

// Image
// Toujours donner des dimensions
// resizeMode (cover, contain...)
// require : pas de concaténation possible

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require("./assets/logo.png")} resizeMode="contain" style={styles.logo}/>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Interstellar</Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>2014</Text>
            <Text style={styles.tag}>PG-13</Text>
            <Text style={styles.tag}>2h 49min</Text>
            <Text style={styles.tag}>Adventure, Drama, Sci-Fi</Text>
          </View>
          <View style={styles.picAndDesc}>
            <View>
              <Image source={require("./assets/film.png")} resizeMode="contain" style={styles.filmPic} />
            </View>
            <View style={styles.descriptionAndButton}>
              <Text style={styles.description}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rates}>
            <View style={styles.allRates}>
              <FontAwesome name="star" size={28} color="yellow" />
              <View style={styles.goldRate}>
                <Text style={styles.goldRateText}>8.6</Text>
                <Text style={styles.text}>/10</Text>
              </View>
              <Text style={styles.text}>1.1M</Text>
            </View>
            <View style={styles.allRates}>
              <FontAwesome name="star-o" size={28} color="white" />
              <Text style={[styles.text, { marginTop: 10, fontWeight: "bold" }]}>Rate This</Text>
            </View>
            <View style={styles.allRates}>
              <View style={styles.greenRate}>
                <Text style={styles.text}>74</Text>
              </View>
              <Text style={[styles.text, { marginVertical: 10 }]}>Metascore</Text>
              <Text style={styles.text}>46 critic reviews</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Top Billed Cast</Text>
          <ScrollView horizontal={true}>
            <View style={styles.actor}>
              <Image
                resizeMode="contain"
                style={styles.img}
                source={require("./assets/matthew.jpg")}
              />
              <View style={styles.actorText}>
                <Text style={[styles.text, { fontSize: 16 }]}>
                  Matthew McCon...
                </Text>
                <Text style={[styles.text, { color: "#808080" }]}>Cooper</Text>
              </View>
            </View>
            <View style={styles.actor}>
              <Image
                resizeMode="contain"
                style={styles.img}
                source={require("./assets/jessica.jpg")}
              />
              <View style={styles.actorText}>
                <Text style={[styles.text, { fontSize: 16 }]}>
                  Jessica Chastain
                </Text>
                <Text style={[styles.text, { color: "#808080" }]}>Murph</Text>
              </View>
            </View>
            <View style={styles.actor}>
              <Image
                resizeMode="contain"
                style={styles.img}
                source={require("./assets/hathaway.jpg")}
              />
              <View style={styles.actorText}>
                <Text style={[styles.text, { fontSize: 16 }]}>
                  Mackenzie Foy
                </Text>
                <Text style={[styles.text, { color: "#808080" }]}>
                  Murph jeune
                </Text>
              </View>
            </View>
            <View style={styles.actor}>
              <Image
                resizeMode="contain"
                style={styles.img}
                source={require("./assets/michael.jpg")}
              />
              <View style={styles.actorText}>
                <Text style={[styles.text, { fontSize: 16 }]}>Farid Safi</Text>
                <Text style={[styles.text, { color: "#808080" }]}>
                  Professeur Brand
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.credits}>
            <Text style={[styles.text, { fontSize: 16 }]}>Director</Text>
            <Text style={[styles.text, { color: "#808080", marginBottom: 20 }]}>
              Christopher Nolan
            </Text>
            <Text style={[styles.text, { fontSize: 16 }]}>Writers</Text>
            <Text style={[styles.text, { color: "#808080" }]}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },
  header: {
    height: 60,
    backgroundColor: "#393939",
    padding: 15,
  },
  logo: {
    height: 30,
    width: 60,
  },
  section: {
    padding: 10,
    backgroundColor: "#212121",
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    color: "#D0D0D0",
    marginBottom: 15,
  },
  tagContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  tag: {
    color: "#919191",
  },

  filmPic: {
    height: 200,
    width: 150,
  },
  button: {
    height: 40,
    width: "100%",
    backgroundColor: "#0177BD",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  picAndDesc: {
    flexDirection: "row",
  },
  descriptionAndButton: {
    flex: 1,
    padding: 10,
  },
  description: {
    color: "white",
    lineHeight: 20,
  },
  rates: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 30,
  },
  allRates: { alignItems: "center" },
  goldRate: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  goldRateText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    color: "white",
  },
  greenRate: {
    height: 25,
    width: 25,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 250,
    width: 170,
  },
  actor: {
    backgroundColor: "#2A2A2A",
    margin: 10,
  },
  actorText: {
    padding: 10,
  },
  credits: {
    marginVertical: 20,
  },
});
