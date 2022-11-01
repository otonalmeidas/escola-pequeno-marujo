import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { Teaching } from '../components/Teaching/Teaching'

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <Grid>
        <Teaching />
      </Grid>
    </>
  )
}
