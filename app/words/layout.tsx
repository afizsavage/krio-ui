import WordsLayout from '@/components/WordLayout';

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <WordsLayout>
            {children}
        </WordsLayout>
    );
}

export default Layout