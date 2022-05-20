import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Portfolio from './Portfolio'
import Error404 from './Error404'
import Dropdown from './Dropdown'

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Banner page="main" title="Chez vous, partout et ailleurs" />
        <Portfolio />

        <div style={{height: '10px', background: '#000', margin: "20px 0"}}></div>

        <Header />
        <Error404 />

        <div style={{height: '10px', background: '#000', margin: "20px 0"}}></div>

        <Header />
        <Banner page="about" />
        <main>
          <Dropdown type="large" title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
          <Dropdown type="large" title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
          <Dropdown type="large" title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
          <Dropdown type="large" title="Responsabilité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </main>

        <div style={{height: '10px', background: '#000', margin: "20px 0"}}></div>

        <Header />
      </div>

      <Footer />
    </>
  )
}

export default App
