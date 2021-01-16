import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>What is Covid-19</h4>
                            <p>Influenza (Flu) and COVID-19 are both contagious respiratory illnesses, but they are caused by different viruses. COVID-19 is caused by infection with a new coronavirus (called SARS-CoV-2), and flu is caused by infection with influenza viruses.</p>
                            <p><a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>How to prevent Covid-19?</h4>
                            <p>Wear a mask to protect yourself and others and stop the spread of COVID-19. Stay at least 6 feet (about 2 arm lengths) from others who don’t live with you. Avoid crowds. The more people you are in contact with, the more likely you are to be exposed to COVID-19.</p>
                            <p><a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-content">
                        <div className="content">
                            <h4>How to get Covid-19 Vaccine in Orange County?</h4>
                            <p>Phased Approach to Vaccine Distribution - Given the limited initial supply of COVID-19 vaccines, distribution will be limited at first and increase over time. Determinations will be based on reaching critical populations to reduce morbidity and mortality rates due to the transmission of COVID-19.</p>
                            <p><a href="https://occovid19.ochealthinfo.com/covid-19-vaccination-distribution">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
