import { Alert, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Text, IconButton, TextInput, FAB } from "react-native-paper";
import Header from "../component/Header";
import * as SMS from "expo-sms";
import { sendEmail } from "./exmail";
const UpdateNotes = ({ navigation }) => {
  const [noteTitle, setNoteTitle] = useState(
    navigation.state.params.item.note.noteTitle
  );
  const [noteDescription, setNoteDescription] = useState(
    navigation.state.params.item.note.noteDescription
  );

  function onSaveNote() {
    navigation.state.params.addNote({ noteTitle, noteDescription });
    Alert.alert("Note Saved", "Your Note has been saved/updated!");
    navigation.goBack();
  }

  const sendSMS = async () => {
    const status = await SMS.sendSMSAsync(
      "8079089",
      noteTitle + "\n" + noteDescription
    );
    console.log(status);
  };
  return (
    <>
      <Header titleText="Update Note" />

      <View style={styles.container}>
        <FAB
          style={styles.btn}
          small
          icon="mail"
          disabled={noteTitle == "" ? true : false}
          onPress={() =>
            sendEmail(
              "demo@gmail.com",
              "Notes Details",
              `Notes Title: ${noteTitle}, Description: ${noteDescription},`
            )
          }
        />
        <FAB
          style={styles.btn1}
          small
          icon="message"
          disabled={noteTitle == "" ? true : false}
          onPress={() => sendSMS()}
        />
        <TextInput
          label="Add Note Title here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Add Note Description"
          value={noteDescription}
          onChangeText={setNoteDescription}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={noteTitle == "" ? true : false}
          onPress={() => onSaveNote()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 70,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: "#219653",
    position: "absolute",
    right: 0,
    top: 40,
    margin: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: "#219653",
  },
  btn: {
    position: "absolute",
    margin: 20,
    right: 50,
    top: 0,
    backgroundColor: "#219653",
  },
  btn1: {
    position: "absolute",
    margin: 20,
    right: 0,
    top: 0,
    backgroundColor: "#219653",
  },
});

export default UpdateNotes;
