import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="Uh-oh!"/>
            <h1>Page not found!</h1>
            <p><Link to="/">Go Home!</Link></p>
        </Layout>
    )
}
export default NotFound