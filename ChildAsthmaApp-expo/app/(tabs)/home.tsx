import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../../FirebaseConfig';

export default function TabOneScreen() {

  // getAuth().onAuthStateChanged((user) => {
  //   if (!user) router.replace('/');
  // });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Out</Text>
      <TouchableOpacity style={styles.button} onPress={() => auth.signOut()}>
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA', // remains a soft white
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#B71C1C', // deep red for a striking appearance
    marginBottom: 40,
  },
  separator: {
    marginVertical: 30,
    height: 2,
    width: '80%',
    backgroundColor: '#E8EAF6', // ...existing color...
  },
  button: {
    width: '90%',
    backgroundColor: '#EF5350', // vibrant red for button
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EF5350', // matching red shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 15,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  }
});
