import Link from 'next/link';

const index = () => (
    <div>
        <Link href="/header">
            <a>Header</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
    </div>
)
export default index; 