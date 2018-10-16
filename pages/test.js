import React from 'react';
import Layout from '../components/Layout';


class Test extends React.Component {

    static async getInitialProps ({req}) {
        return req ? {from: 'server'}
        : {from: 'client'}
    }

    render(){
        return(
            <Layout>
                "{this.props.from}"에서 실행
            </Layout>
        )
    }
}

export default Test;

