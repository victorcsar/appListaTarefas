import React from 'react';
import {Container, TextTitle, TextDetail, TextDate, ContainerTitulo} from './styles';
import {Image} from 'react-native';


// Definindo a interface das props (se você precisar de props no futuro)
type TaskProps = {
  title: string,
  detail: string,
  date: string
}

// Componente Task tipado
export default function Task (props: TaskProps){
    return (
        <Container>
            <ContainerTitulo> 
                <TextTitle>{props.title}</TextTitle>
                <Image source={require('../../../assets/icons/clock.png')} />
            </ContainerTitulo>
            <TextDetail>{props.detail}</TextDetail>
            <TextDate>{props.date}</TextDate>
        </Container>
    );
};
