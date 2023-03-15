import { Word } from '../../@types';

const retreiveCharIfExist = (searchString: string[], arrToSearch: Word[]) => {
  let foundObj: Word | undefined;

  const mostChars: string =
    searchString[0].length >= searchString[1].length
      ? searchString[0]
      : searchString[1];

  const leastChars: string =
    searchString[0].length < searchString[1].length
      ? searchString[0]
      : searchString[1];

  foundObj =
    arrToSearch.find(
      (obj: Word) => obj.character.toLowerCase() === mostChars.toLowerCase()
    ) ||
    arrToSearch.find(
      (obj: Word) => obj.character.toLowerCase() === leastChars.toLowerCase()
    );

  if (foundObj) {
    console.log(
      `The string "${searchString}" is present in the name property of this object:`,
      foundObj
    );
    return foundObj.id;
  } else {
    console.log(
      `The string "${searchString}" is not present in the name property of any of the objects in the array.`
    );
    return null;
  }
};

export default retreiveCharIfExist;
