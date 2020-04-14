import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>Email me at joey@swri.org</p>
            <p>Twitter:<a href="https://www.twitter.com/joeymu" rel="noopener noreferrer" target="_blank">@joeymu</a></p>
        </Layout>
    )
}

export default ContactPage