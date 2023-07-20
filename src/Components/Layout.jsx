import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy } from "react-icons/fa";
import { Button } from "antd";
export default function Layout({
  isLoading,
  inpElem,
  getCode,
  getLanguage,
  handleRequest,
}) {
  return (
    <>
      <div className=" flex-auto w-full overflow-hidden grid grid-cols-2 code-main px-2">
        <div className="w-full h-full pl-1 pr-3 pt-2">
          <textarea
            ref={inpElem}
            placeholder="Paste your code here"
            className="rounded-sm code-editor h-full w-full resize-none bg-[#0D111760] border outline-none p-4 overflow-y-scroll font-mono "
          ></textarea>
        </div>
        {getCode && (
          <div
            onClick={() => navigator.clipboard.writeText(getCode)}
            className="absolute mt-4 right-4 rounded-2xl hover:bg-[#ffffff2f] active:bg-[#ffffff4f] p-[6px] cursor-pointer"
          >
            <FaRegCopy className="text-l" />
          </div>
        )}
        <SyntaxHighlighter
          language={getLanguage}
          showLineNumbers={getCode.length}
          style={coldarkDark}
          children={getCode}
          className="rounded-sm flex-auto"
        ></SyntaxHighlighter>
      </div>
    </>
  );
}
