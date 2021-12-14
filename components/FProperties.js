import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function FProperties({propers}) {
    return (
        <div>
            <div className="col">
                <Link href={'/properties/'+propers.fields.slug}>
                <a>
                    <div className="property-card">
                        <img className={styles.featpic}src={'https:'+propers.fields.featuredThumbnail.fields.file.url} alt="pic"  />
                        <div className="property-text-container">
                          <h4><b>₱ {propers.fields.featuredPrice.toLocaleString(undefined, {maximumFractionDigits:2})}</b></h4>
                          <p>{propers.fields.featuredTitle}</p>
                        </div>
                        <div className="property-card-divider1"></div>
                        <div className="property-card-bottom">
                          <div className="property-card-br /"> <i className="fas fa-bed"></i> {propers.fields.featuredBedroom}</div>
                          <div className="property-card-divider2"></div>
                          <div className="property-card-cr"> <i className="fas fa-bath"></i> {propers.fields.featuredBathroom}</div>
                        </div>
                    </div>
                </a>
                </Link>
            </div>
            
        </div>
    )
}
