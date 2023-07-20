import React from "react";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar showIdx={0} />
      <div className="Home bg-slate-900">
        <div className="Home-Main p-5 w-5/6 m-auto">
          <div className=" text-white">
            <div className="my-5">
              Welcome to <h2 className=" headline inline font-bold text-[#FFA9FF]"> CodeBrainAI </h2> -
              Your Ultimate Coding Assistant!
            </div>
            <p className="my-5">
              Are you tired of spending hours on code documentation,
              refactoring, and formatting? Look no further! CodeBrainAI is here
              to revolutionize the way you code. This platform leverages the
              power of cutting-edge AI tools to simplify and enhance your coding
              experience.
            </p>
            <p className="mt-10">Key Features :</p>
            <div className=" grid grid-cols-1 sm:grid-cols-2 my-5">
              <div className="card-det">
                <strong className="text-green-500">
                  AI-Powered Code Commenting
                </strong>{" "}
                Say goodbye to manually writing comments for your code.
                CodeBrainAI analyzes your code's structure and functionality,
                automatically generating descriptive and informative comments
                that will make your code easier to understand for you and your
                team.
              </div>
              <div className="card-det">
                <strong className="text-[#D95E90]">
                  Code Formatting Magic
                </strong>{" "}
                Consistent code formatting is vital for seamless collaboration
                and maintainability. CodeBrainAI tidies up your code, adhering
                to your preferred coding style, so you can focus on what matters
                most – writing brilliant code.
              </div>
              <div className="card-det">
                <strong className="text-cyan-400">
                  Intelligent Code Refactoring
                </strong>{" "}
                Code maintenance made simple! Our AI-powered refactoring tool
                identifies potential code optimizations, suggests alternative
                implementations, and assists in restructuring your code for
                improved readability and performance.
              </div>
              <div className="card-det">
                <strong className="text-orange-400">
                  {" "}
                  Multi-Language Support{" "}
                </strong>{" "}
                Whether you're coding in Python, Java, JavaScript, C++, or any
                other popular programming language, CodeBrainAI - CodeX has got
                you covered. Our Online IDE tools support a wide range of
                programming languages, making it a universal coding companion.
              </div>
            </div>
            Save time, eliminate code clutter, and enhance the quality of your
            projects with CodeBrainAI. Embrace the power of AI to become a more
            efficient and productive coder today.
          </div>
        </div>
      </div>
    </>
  );
}
