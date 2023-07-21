import { Container, ContainerTitle, ContentImg, ContentSection, Section, Title } from './HomeStyled'
import calidad from '../assets/calidad.png'
import esfuerzo from '../assets/esfuerzo.png'
import liderazgo from '../assets/liderazgo.png'
import precision from '../assets/precision.png'
import rapidez from '../assets/rapidez.png'
import seguridad from '../assets/seguridad.png'

const Home = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title>Bienvenido a <span>Wipay</span></Title>
      </ContainerTitle>
      <div>

        <ContentImg>
          <ContentSection>
            <Section>
              <img src={liderazgo} alt='icon' style={{ width: '80' + 'px' }} />
              <h2>Liderazgo</h2>
              <p>Creemos en nuestro proyecto, sacando lo mejor de cada uno de nosostros.</p>
            </Section>
            <Section>
              <img src={rapidez} alt='rocket' style={{ width: '80' + 'px' }} />
              <h2>Rapidez</h2>
              <p>Mantenemos una velocidad constante y fluida para lograr los objetivos propuestos.</p>
            </Section>
            <Section>
              <img src={precision} alt='target' style={{ width: '80' + 'px' }} />
              <h2>Precision </h2>
              <p>Organizamos cada uno de los servicios para dar respuesta a cualquier problema.</p>
            </Section>
          </ContentSection>
          <ContentSection>
            <Section>
              <img src={seguridad} alt='shield' style={{ width: '80' + 'px' }} />
              <h2>Seguridad </h2>
              <p>Protección en todas las vías de negocio para reducir riesgos en cada cliente.</p>
            </Section>
            <Section>
              <img src={calidad} alt='quality' style={{ width: '80' + 'px' }} />
              <h2>Calidad </h2>
              <p>Nuestra misión diaria es tener presente las expectativas de nuestros clientes.</p>
            </Section>
            <Section>
              <img src={esfuerzo} alt='effort' style={{ width: '80' + 'px' }} />
              <h2>Esfuerzo </h2>
              <p>Trabajamos para lograr nuevos retos como la expansión empresarial de negocio.</p>
            </Section>
          </ContentSection>
        </ContentImg>
      </div>

    </Container>
  )
}

export default Home
