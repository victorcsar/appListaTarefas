import styled from 'styled-components/native'; 


export const Container = styled.TouchableOpacity`
    width: 80%;
    height: 120px;
    background-color: #0000CD;
    flex-direction: column;
    overflow: hidden;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const ContainerWithDate = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    overflow: hidden;
    justify-content: space-between;
    font-family: Montserrat;
`;

export const TextTitle = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin-left: 20px;
`;

export const TextDetail = styled.Text`
    color: white;
    font-size: 14px;
    font-weight: semibold;
    margin-left: 20px;
`;

export const TextDate = styled.Text`
    color: white;
    font-size: 11px;
    font-weight: regular;
    margin-left: 20px;
`;