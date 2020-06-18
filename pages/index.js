import Layout from '../components/layout'
import AboutSection from '../components/about-section';
import AcessoMovelSection from '../components/acesso-movel';

export default function Home() {
  return (
    <Layout home>
      <AboutSection></AboutSection>
      <AcessoMovelSection></AcessoMovelSection>
    </Layout>
  )
}