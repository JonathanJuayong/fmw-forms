import {Document, Page, StyleSheet, Text, View} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: "black",
    borderBottom: "1px black solid",
    marginBottom: 30,
    textAlign: "center"
  },
  body: {
    padding: 30
  },
  header: {
    marginBottom: 10
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  lineItem: {
    marginRight: 10,
    marginBottom: 10
  },
  indent: {
    marginLeft: 25
  },
  group: {
    marginBottom: 20
  }
})

interface MyDocumentsProps {
  formState: any
}

export default function MyDocument({formState}: MyDocumentsProps) {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.h1}>Form summary:</Text>
        {Object.entries(formState).map(([key, value]) => (
          <View key={key} style={styles.group}>
            <Text style={styles.header}>{key}</Text>
            <View style={styles.indent}>
              {Object.entries(value as { k: string, v: any }).map(([k, v]) => (
                <View key={k} style={styles.flex}>
                  <Text style={styles.lineItem}>{k}: </Text>
                  <Text>{v.toString()}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </Page>
    </Document>
  )
}
