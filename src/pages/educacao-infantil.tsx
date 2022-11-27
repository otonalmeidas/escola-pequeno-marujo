import { Card } from '../components/Cards/Card'
import { Cards } from '../components/Cards/Cards'
import { Depositions } from '../components/Depositions/Depositions'
import { Footer } from '../components/Footer/Footer'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { HeroMedium } from '../components/HeroMedium/HeroMedium'
import { PhotosSlider } from '../components/Photos/PhotosSlider'

export default function EducacaoInfantil() {
  return (
    <>
      <Header />
      <HeroMedium
        image="childish"
        subtitle="Educação infantil"
        headline="A criança como protagonista do seu aprendizado, que observa, vivencia o mundo e constrói seu conhecimento."
        description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed nunc metus, malesuada et quam non, aliquam dignissim nibh.
          Integer tempus dolor velit, quis molestie tortor feugiat a.
          Maecenas tincidunt rhoncus justo quis posuere. Maecenas id lacinia neque.
          Donec id ante sollicitudin, sagittis risus ac, euismod purus.
          Maecenas a varius diam. Suspendisse imperdiet mauris lectus, id mattis diam mollis id.
          Praesent pharetra magna est, eu imperdiet massa.
        "
      />
      <Grid>
        <Cards>
          <Card
            title="Contextos de aprendizagem"
            description="
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque lacinia sem quis sollicitudin euismod.
              Praesent a nibh at libero ultricies lacinia. Praesent sem felis, pretium vel gravida id, consequat mollis enim.
              Donec vitae condimentum metus. Cras sit amet pretium massa, vel tincidunt eros.
              Nulla vel diam fringilla, sollicitudin quam vitae, tempor justo
            "
          />
          <Card
            title="Documentação pedagógica"
            description="
              Vivamus finibus at risus eget pulvinar.
              Phasellus accumsan lacus eu ultricies consequat.
              Proin eleifend, lorem quis sagittis pharetra, lacus elit rhoncus felis, et aliquam mauris mauris sit amet leo.
              Ut felis lectus, euismod vehicula mattis at, eleifend quis nunc.
              Integer bibendum tortor nec nibh iaculis, id lobortis nibh tristique.
              Donec euismod purus erat. Nulla sodales neque nibh.
            "
          />
          <Card
            title="O brincar como principal linguagem"
            description="
              In ullamcorper risus velit, a ultricies dui sodales eget.
              In id quam et metus ullamcorper scelerisque. Fusce at metus vitae purus hendrerit iaculis vitae eget ante.
              Suspendisse at diam feugiat, posuere justo eget, rutrum urna. Fusce vitae libero vulputate, eleifend eros id, cursus nisi.
            "
          />
        </Cards>
      </Grid>

      <PhotosSlider />

      <Grid>
        <Depositions />
      </Grid>
      <Footer />
    </>
  )
}
