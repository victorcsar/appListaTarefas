import React from 'react';
import { Container, TextTitle, TextDetail, TextDate } from './styles';

export function Task() {
    return (
        <Container>
            <TextTitle>Tarefa 1</TextTitle>
            <TextDetail>Descrição da tarefa 1</TextDetail>
            <TextDate>10/06/2021</TextDate>
        </Container>
    );
}