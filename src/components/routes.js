import React from 'react'
import { Route } from 'react-router-dom'

const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) =>  (
    <Route {...rest} render={matchProps => (
        <Layout>
            <Component {...matchProps} />
        </Layout>
    )}/>
)

export default LayoutRoute