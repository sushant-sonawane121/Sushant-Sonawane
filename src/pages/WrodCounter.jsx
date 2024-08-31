import React, { useEffect, useState } from "react";

function WrodCounter() {
  const [textData, setTextData] = useState({
    words: 0,
    characters: 0,
    whitespaces: 0,
  });
  const [rowcols, setRowcols] = useState({
    row: "1",
    col: "1",
  });
  const [textareaValue, setTextareaValue] = useState("");

  const calculateRowCol = (e) => {
    let content = e.target.value;
    let createPos = e.target.selectionStart;

    setTextareaValue(e.target.value);

    let lineNumber =
      (content.substring(0, createPos).match(/\n/g) || []).length + 1;
    let columnNumber = createPos - content.lastIndexOf("\n", createPos - 1);

    setRowcols((prev) => ({
      ...prev,
      row: `${lineNumber}`,
      col: `${columnNumber}`,
    }));
  };

  useEffect(() => {
    const wordCount = textareaValue.trim().split(/\s+/).filter(Boolean).length;

    const characterCount = textareaValue.replace(/\s/g, "").length;

    const whitespaceCount = (textareaValue.match(/\s/g) || []).length;

    setTextData((prev) => ({
      ...prev,
      words: wordCount,
      characters: characterCount,
      whitespaces: whitespaceCount,
    }));
  }, [textareaValue]);
  return (
    <>
      <div className="h-screen bg-white dark:bg-slate-800 dark:text-white">
        <div className="h-full pt-8">
          <div className="text-3xl flex justify-center ">
            <h1>Text Analysis</h1>
          </div>
          <section className="h-96 flex justify-center items-center mt-2 flex flex-col">
            <div className="w-10/12 mb-4">
              <div className="flex gap-5 flex-wrap">
                <p>Words: {textData.words}</p>
                <p>Characters: {textData.characters}</p>
                <p>White Spaces: {textData.whitespaces}</p>
              </div>
            </div>
            <textarea
              name="text"
              id="text"
              className="w-10/12 h-full rounded bg-slate-700 text-gray-300 outline-none resize-none p-2"
              placeholder="Enter of Paste Your text here"
              onInput={calculateRowCol}
              value={textareaValue}
            ></textarea>

            <div className="w-10/12 mt-2">
              <div className="flex gap-2">
                <p>Row: {rowcols.row}</p>
                <p>Col: {rowcols.col}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default WrodCounter;
