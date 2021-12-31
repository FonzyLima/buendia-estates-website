import PropertiesCard from '../../components/PropertiesCard';
import styles from '../../styles/properties.module.css';
import {createClient } from "contentful";
import filterSearch from '../utils/filterSearch';

const filter = () => {

    return (
        <div className={styles['properties-box']}>
        <div className="row row-cols-1 row-cols-md-3 g-4">

            {props.properties.map(propers => (
                <PropertiesCard key={propers.sys.id} propers={propers}/>
            ))}
            
        </div>
        </div>
    )
}

export default filter;