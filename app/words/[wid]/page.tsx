import WordHeading from "@/components/WordHeading";

export type PageProps = {
    params: Promise<{ wid: string }>;
};

const WordPage = async ({ params }: PageProps) => {
    const { wid } = await params;

    return (
        <WordHeading />
    );
}

export default WordPage