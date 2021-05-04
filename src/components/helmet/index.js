import React from 'react'
import { Helmet } from 'react-helmet'

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="confeitaria bigasdeiro" />
          <meta property="og:type" content="website" />
          <meta
            name="google-site-verification"
            content="IFOAHxkia6X2AuVX98eq1ne2Bb1sVwSB16ErDq3h1fI"
          />
          <title>Confeitaria BigasDeiro</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
    )
  }
}

export default Application
