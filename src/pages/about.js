import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
      <p>Niet alle soorten Belgische trappistenbieren zijn opgesomd op deze site, 
        indien u <b>meer informatie</b> wenst over de overige bieren kunt u <b>contact met mij opnemen</b>  door onderstaand formulier in te vullen</p>
         <form method="post" action="#">
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Message
              <textarea name="message" id="message" />
            </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </form>
    </Layout>
  )
}

export default AboutPage