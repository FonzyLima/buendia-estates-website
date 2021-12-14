import React from 'react'
import styles from '../styles/Home.module.css'
export default function Testimonies({tests}) {
    return (
        <div>
            <div className="col">
                    <div className={"card "+styles['client-text-card']}>
                      <div className="card-body">
                        <div className={styles['client-test-text']}>
                          “{tests.fields.clientMessage}”
                        </div>
                        <div className={styles['client-info']}>
                          <div className={styles['client-name']}>
                            {tests.fields.clientName}
                          </div>
                          <div className={styles['client-position']}>
                            Client
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            
        </div>
    )
}
