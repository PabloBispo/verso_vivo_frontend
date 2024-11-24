import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  background: #0d47a1;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #e3f2fd;
`;

const ArtistPhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  margin: 5px 0;
  color: #bbdefb;
`;

const DetailsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  background: #e3f2fd;
  border-radius: 10px;
  margin-top: 20px;
`;

const DetailItem = styled.div`
  font-size: 1rem;
  color: #0d47a1;
`;

const Label = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Value = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

const ClassificationSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
  background: #bbdefb;
  border-radius: 10px;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 15px;
  }
`;

const ClassificationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  padding: 10px;
  background: #ffffff;
  border-radius: 8px;
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap; /* Permite que as estrelas se ajustem se o espaço for pequeno */
  margin-top: 5px;

  /* Garantir que as estrelas não saiam da tela em dispositivos menores */
  @media (max-width: 480px) {
    justify-content: space-evenly;
  }
`;

const Star = styled.span`
  color: #ffb400;
  font-size: 1.2rem;
  /* Ajustar o tamanho das estrelas em dispositivos menores */
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;



const ExegesisSection = styled.div`
  padding: 20px;
  margin-top: 20px;
  background: #f1f8e9;
  border-radius: 10px;
`;

const ExegesisItem = styled.div`
  margin-bottom: 15px;
`;

const ExegesisTitle = styled.h3`
  font-size: 1.2rem;
  color: #0d47a1;
  margin-bottom: 10px;
`;

const ExegesisText = styled.p`
  color: #555;
`;

const ReferencesSection = styled.div`
  padding: 20px;
  margin-top: 20px;
  background: #e1f5fe;
  border-radius: 10px;
`;

const ReferenceItem = styled.div`
  margin-bottom: 10px;
`;

const ReferenceTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #0d47a1;
`;

const ReferenceText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const TheologicalExplanationSection = styled.div`
  padding: 20px;
  margin-top: 20px;
  background: #fff3e0;
  border-radius: 10px;
`;

const TheologicalText = styled.p`
  color: #555;
`;

const CorrectionSection = styled.div`
  padding: 20px;
  margin-top: 20px;
  background: #ffebee;
  border-radius: 10px;
`;

const CorrectionTitle = styled.h4`
  font-size: 1.2rem;
  color: #d32f2f;
  margin-bottom: 10px;
`;

const CorrectionText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const CulturalSensitivitySection = styled.div`
  padding: 20px;
  margin-top: 20px;
  background: #fff3e0;
  border-radius: 10px;
`;

const CulturalSensitivityItem = styled.div`
  margin-bottom: 15px;
`;

const CulturalSensitivityTitle = styled.h4`
  font-size: 1.1rem;
  color: #0d47a1;
  margin-bottom: 5px;
`;

const CulturalSensitivityText = styled.p`
  font-size: 1rem;
  color: #333;
`;

// Adicionando regras de responsividade "mobile-first"
const breakpoints = {
  small: '480px',
  medium: '768px',
  large: '1024px',
};

const MobileFirst = () => (
  <>
    <style>
      {`
        @media (max-width: ${breakpoints.medium}) {
          .container {
            max-width: 100%;
            margin: 10px;
            padding: 15px;
          }

          .header {
            padding: 20px 10px;
          }

          .artist-photo {
            width: 100px;
            height: 100px;
          }

          .title {
            font-size: 1.5rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .details-section {
            grid-template-columns: 1fr;
            padding: 15px;
          }

          .classification-section {
            grid-template-columns: 1fr;
            padding: 15px;
          }

          .exegesis-section,
          .references-section,
          .theological-explanation-section,
          .correction-section,
          .cultural-sensitivity-section {
            padding: 15px;
          }

          .classification-item,
          .exegesis-item,
          .reference-item,
          .cultural-sensitivity-item {
            flex-direction: column;
            text-align: center;
          }

          .star-rating {
            font-size: 1rem;
          }

          .reference-title {
            font-size: 1rem;
          }

          .theological-text,
          .correction-text,
          .cultural-sensitivity-text {
            font-size: 0.9rem;
          }
        }

        @media (min-width: ${breakpoints.medium}) {
          .details-section {
            grid-template-columns: 1fr 1fr;
            padding: 20px;
          }

          .classification-section {
            grid-template-columns: repeat(2, 1fr);
            padding: 20px;
          }

          .exegesis-section,
          .references-section,
          .theological-explanation-section,
          .correction-section,
          .cultural-sensitivity-section {
            padding: 20px;
          }

          .star-rating {
            font-size: 1.2rem;
          }

          .reference-title {
            font-size: 1.1rem;
          }

          .theological-text,
          .correction-text,
          .cultural-sensitivity-text {
            font-size: 1rem;
          }
        }
      `}
    </style>
  </>
);

const MusicAnalysis = ({ music }) => {
  return (
    <Container>
        <MobileFirst />
      <Header>
        <ArtistPhoto src={music.foto_artista || "https://via.placeholder.com/120"} alt="Artist Photo" />
        <Title>{music.titulo}</Title>
        <Subtitle>{music.autor}</Subtitle>
      </Header>

      <DetailsSection>
        <DetailItem>
          <Label>Resumo</Label>
          <Value>{music.resumo}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Comentário Adicional</Label>
          <Value>{music.comentarios_adicionais}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Ano</Label>
          <Value>{music.ano || "Não informado"}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Álbum</Label>
          <Value>{music.album || "Não informado"}</Value>
        </DetailItem>
      </DetailsSection>

      <ClassificationSection>
        {Object.entries(music.classificacoes).map(([key, value]) => (
          <ClassificationItem key={key}>
            <span>{key.replace(/_/g, " ")}</span>
            <StarRating>
              {[...Array(5)].map((_, i) => (
                <Star key={i}>{i < value ? "★" : "☆"}</Star>
              ))}
            </StarRating>
          </ClassificationItem>
        ))}
      </ClassificationSection>

      <ExegesisSection>
        <ExegesisTitle>Exegese Detalhada</ExegesisTitle>
        {music.exegese_detalhada.map((item, index) => (
          <ExegesisItem key={index}>
            <ExegesisText>{item.analise}</ExegesisText>
          </ExegesisItem>
        ))}
      </ExegesisSection>

      <ReferencesSection>
        <ReferenceTitle>Referências Bíblicas</ReferenceTitle>
        {music.referencias_biblicas.map((ref, index) => (
          <ReferenceItem key={index}>
            <ReferenceTitle>{ref?.versiculo}</ReferenceTitle>
            <ReferenceText>{ref?.contexto}</ReferenceText>
          </ReferenceItem>
        ))}
      </ReferencesSection>

      {/* Explicação Teológica Section */}
      <TheologicalExplanationSection>
        <h4>Explicação Teológica</h4>
        <TheologicalText>{music.explicacao_teologica}</TheologicalText>
      </TheologicalExplanationSection>

      {/* Correções Teológicas Section */}
      <CorrectionSection>
        <CorrectionTitle>Correções Teológicas</CorrectionTitle>
        <CorrectionText>{music.correcoes_teologicas.observacoes}</CorrectionText>
      </CorrectionSection>


      <CulturalSensitivitySection>
        <CulturalSensitivityItem>
          <CulturalSensitivityTitle>Relevância</CulturalSensitivityTitle>
          <CulturalSensitivityText>{music.sensibilidade_cultural.relevancia}</CulturalSensitivityText>
        </CulturalSensitivityItem>

        <CulturalSensitivityItem>
          <CulturalSensitivityTitle>Contexto</CulturalSensitivityTitle>
          <CulturalSensitivityText>{music.sensibilidade_cultural.contexto}</CulturalSensitivityText>
        </CulturalSensitivityItem>
      </CulturalSensitivitySection>

    </Container>
  );
};

export default MusicAnalysis;
