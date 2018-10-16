import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
    <Layout>
        <h1>
            안녕~! NextJS
        </h1>
        <h2>
            <Link href="/about">
                <a style={{backgroundColor: 'black', color: 'white'}}>소개</a>
            </Link>
            <Link href="/search">
                <a style={{backgorundColor: 'balck', color: 'white'}}>검색</a>
            </Link>
        </h2>
    </Layout>
)

export default Index;