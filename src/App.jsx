import { Layout, Header, Hero, ContactForm, Footer } from "./components"
import { PracticeAreas, About } from "./sections"


export const App = () => {

  return (
    <>
      <Layout>
        <Header />
          <main>  
            <Hero/>
            <About />
            <PracticeAreas />
            <ContactForm />
            <Footer />
          </main> 
      </Layout>
    </>
  )
}

