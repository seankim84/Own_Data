import Link from 'next/link';

const LinkStyle = {
    marginRight: "1rem"
};

const Header = () => {
    return (
        <div>
            <Link href="/"><a style={LinkStyle}>홈</a></Link>
            <Link href="about"><a style={LinkStyle}>소개</a></Link>
        </div>
    );
};

export default Header;