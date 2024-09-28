import styled from 'styled-components/native';

// Container principal, botão para as tarefas
export const Container = styled.TouchableOpacity`
    width: 80%;
    height: 120px;
    background-color: #0000CD;
    flex-direction: column;
    overflow: hidden;
    border-radius: 12px;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 10px;
`;

// Container com título e data lado a lado
export const ContainerWithDate = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

// Estilização do título do texto
export const TextTitle = styled.Text`
    color: white;  
    font-size: 16px;
    font-weight: SemiBold;
    font-family: 'Montserrat';
`;

// Estilização do detalhe do texto
export const TextDetail = styled.Text`
    color: white;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Montserrat';
    padding: 0% 5%;
`;

// Estilização da data
export const TextDate = styled.Text`
    color: white;
    font-size: 11px;
    font-weight: normal;
    padding: 0% 5%;
    font-family: 'Montserrat';
`;

// Estilização do ícone (provavelmente você vai usar uma imagem ou um componente de ícone de biblioteca)
export const Icon = styled.Image`
    width: 50px;
    height: 50px;
`;

// Container que organiza o título e o ícone
export const ContainerTitulo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    padding: 0% 5%;
`;
