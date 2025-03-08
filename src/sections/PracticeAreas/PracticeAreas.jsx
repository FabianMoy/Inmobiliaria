import styles from './PracticeAreas.module.css'
import { ServiceCard } from './ServiceCard/ServiceCard'
import {legalPractices} from './Helpers/legalPractices'

export const PracticeAreas = () => {
  return (
    <section id='practica' className={styles.PracticeAreasSection}>
        
        {legalPractices.map((practice, index)=>(
            <div key={index} className={styles.cardsContainer}>
                <ServiceCard practice={practice}/>
            </div>
        ))}

    </section>
  )
}
