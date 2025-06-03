import { DefinitionResponseData, WordResponseData } from "@/@types";
import WordHeader from "@/components/WordHeader";
import { getModel } from "@/lib/connector";

export type PageProps = {
    params: Promise<{ wid: string }>;
};

interface WordDetailsData extends WordResponseData {
    definitions: DefinitionResponseData
}

const WordPage = async ({ params }: PageProps) => {
    const { wid } = await params;

    const res = await getModel(`/words/${wid}`)

    const word: WordDetailsData = res.data

    const transformedData = {
        wordTitle: word.word
    }

    return (
        <WordHeader worditle={transformedData.wordTitle} />
    );
}

export default WordPage