import React, {PropsWithChildren, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  resultado: number;
  setPrecoGasolina: Function;
  setPrecoAlcool: Function;
  calculate: Function;
}>;

const Process = ({
  resultado,
  setPrecoGasolina,
  setPrecoAlcool,
  calculate,
}: SectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alcool ou Gasolina</Text>

      <TextInput
      keyboardType='numeric'
        style={styles.inputs}
        placeholder="preço do alcool"
        onChangeText={val => setPrecoAlcool(parseInt(val))}
      />

      <TextInput
        keyboardType='numeric'
        style={styles.inputs}
        placeholder="preço da gasolina"
        onChangeText={val => setPrecoGasolina(parseInt(val))}
      />

      <TouchableHighlight
        style={styles.btnArea}
        onPress={() => calculate()}
        underlayColor="#FF9515">
        <View>
          <Text style={styles.btnText}>processar</Text>
        </View>
      </TouchableHighlight>

      <View>
        <Text style={styles.textResultado}>
          {resultado == 0
            ? ""
            : resultado > 0.7
            ? 'MAIS VANTAJOSO ABASTECER COM GASOLINA'
            : 'MAIS VANTAJOSO ABASTECER COM ALCOOL'}
        </Text>
      </View>
    </View>
  );
};
const Explanation = () =>{

  return(
    <View style={{borderWidth: 2, padding: 8,borderColor: "#FFFFFF", height: 110, width:400, marginTop: 50}}>
      <Text style={{color:"white", fontSize: 15}}>O cálculo básico para se descobrir se o álcool é vantajoso ou não em relação à gasolina é simples.
         Basta dividir o preço do litro do álcool pelo da gasolina. 
        Se o resultado for inferior a 0,7, use álcool. Se for maior que 0,7,
         então abasteça com gasolina.</Text>
    </View>
  )
}
function App(): JSX.Element {
  const [precoAlcool, setPrecoAlcool] = useState(0);
  const [precoGasolina, setPrecoGasolina] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calculate = () => {
    const resultado = precoAlcool / precoGasolina;
    setResultado(resultado);
  };
  return (
    <View style={styles.body}>
      <Process
        resultado={resultado}
        setPrecoGasolina={setPrecoGasolina}
        setPrecoAlcool={setPrecoAlcool}
        calculate={calculate}
      />
      <Explanation />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9CC96',
    height: 350,
    width: 350,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 2,

  },
  inputs: {
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#F9CC96',
    padding: 8,
    color: 'white',
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 25
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    marginTop: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    textShadowColor:'gray',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:10,
  },
  body: {
    backgroundColor: '#F9CC96',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    
  },
  btnArea: {
    borderRadius: 50,
    marginTop: 30,
    width: 150,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    padding: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  btnText: {
    color: '#F9CC96',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  textResultado: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default App;
