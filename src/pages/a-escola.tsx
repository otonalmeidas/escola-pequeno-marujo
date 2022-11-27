import { About } from '../components/About/About'
import { Footer } from '../components/Footer/Footer'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { HeroLow } from '../components/HeroLow/HeroLow'
import { Structure } from '../components/Structure/Structure'

export default function AEscola() {
  return (
    <>
      <Header />
      <HeroLow />
      <Grid>
        <About />
        <Structure />
      </Grid>
      <Footer />
    </>
  )
}
