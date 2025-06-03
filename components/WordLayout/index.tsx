import Navigation from "./Navigation";

const WordsLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <div className="">
            <Navigation />
            {children}
        </div>
    );
}

export default WordsLayout