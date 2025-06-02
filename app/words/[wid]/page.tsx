import WordHeader from "@/components/WordHeader";

export type PageProps = {
    params: Promise<{ wid: string }>;
};

const WordPage = async ({ params }: PageProps) => {
    const { wid } = await params;

    console.log('word id', wid);


    return (
        <WordHeader />
    );
}

export default WordPage