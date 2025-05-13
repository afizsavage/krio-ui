import DefaultLayout from "@/components/Layout";

const WordsLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <DefaultLayout>
            {children}
        </DefaultLayout>
    );
}

export default WordsLayout