import { Card } from '../components/Cards/Card'
import { Cards } from '../components/Cards/Cards'
import { Depositions } from '../components/Depositions/Depositions'
import { Footer } from '../components/Footer/Footer'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { HeroMedium } from '../components/HeroMedium/HeroMedium'
import { PhotosSlider } from '../components/Photos/PhotosSlider'

export default function EnsinoFundamentalAnosFinais() {
  return (
    <>
      <Header />
      <HeroMedium
        image="final"
        subtitle="Ensino fundamental anos finais"
        headline="O aluno no centro de suas ações, se desenvolvendo academicamente e progredindo suas habilidades sociais, cognitivas e afetivas."
        description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed nunc metus, malesuada et quam non, aliquam dignissim nibh.
          Integer tempus dolor velit, quis molestie tortor feugiat a.
          Maecenas tincidunt rhoncus justo quis posuere.
          Maecenas id lacinia neque. Donec id ante sollicitudin, sagittis risus ac, euismod purus.
          Maecenas a varius diam. Suspendisse imperdiet.
        "
      />
      <Grid>
        <Cards>
          <Card
            title="Progressão e consolidação dos conhecimentos"
            description="
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque lacinia sem quis sollicitudin euismod.
              Praesent a nibh at libero ultricies lacinia.
              Praesent sem felis, pretium vel gravida id, consequat mollis enim.
              Donec vitae condimentum metus.
              Cras sit amet pretium massa, vel tincidunt eros.
              Nulla vel diam fringilla, sollicitudin quam vitae, tempor justo
            "
          />
          <Card
            title="Desenvolvimento da autonomia intelectual"
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
            title="Compreensão de normas e aprimoramento das relações"
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
