import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'; //icones que vao vem com o expo, igual o react-icons/fi (feather icons)
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList} from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

;

export default function Incidents(){
    
    const navigation = useNavigation(); // similiar ao useHistory() do ReactJS
    const [incidents, setIncidents] = useState([]);

    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false); //armazenar info, para nao buscar os mesmo dados novamente; carregar uma pagina por vez
    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident }); //sera enviado para a pag detail o incident, entao preciso receber via useRoute do react-navegation/native
    }


    async function loadIncidents(){
        if(loading){
            return;
        } //evitar que o usuario dê um reloading enquanto um acontece

        if(total > 0 && incidents.length === total){
            return;
        } //se ja carregou os incidents (>0) e o numero incidents for igual ao total de casos
        
        setLoading(true);
        const response = await api.get('incidents', {
            params: { page }
        }); // ou `incidents?page=${page}`
        
        setIncidents([... incidents, ... response.data]); //criar objeto para nao carregar todos os casos ao atualizar a pagina para buscar mais dados
        setTotal(response.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);
    }
    useEffect(()=> {loadIncidents()}, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>


            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

           <FlatList
                style={styles.incidentsList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                //showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={( { item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>
                        
                        <Text style={styles.incidentProperty}>Caso:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>
                        
                        <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: "currency", currency: 'BRL'}).format(incident.value)}</Text>
                        
                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={ ()=>{navigateToDetail(incident)}}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041"/>
                    </TouchableOpacity>
                </View>
                )}
           /> 

        </View>

    );
}