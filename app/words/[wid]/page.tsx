import WordHeader from "@/components/WordHeader";

export type PageProps = {
    params: Promise<{ wid: string }>;
};

const WordPage = async ({ params }: PageProps) => {
    const { wid } = await params;

    return (
        <WordHeader />
    );
}

export default WordPage