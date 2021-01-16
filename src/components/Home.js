import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">New</span> Enter your Covid-19 test results and keep track!
        </p>
      </div>
      <HomeContent />
    </Fragment>
  )
}
