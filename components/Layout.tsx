import Header from "./Header";

const DefaultLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className=" font-[family-name:var(--font-geist-sans)]">
            <Header />
            {children}
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

            </footer>
        </div>

    )
}

export default DefaultLayout