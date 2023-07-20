import { Link } from "react-router-dom";
const navArr = [
  { loc: "/", title: "Home" },
  { loc: "/addcomment", title: "Add Comments" },
  { loc: "/format-beautify", title: "Format & Beautify" },
  { loc: "/refactor", title: "Refactor" },
];
export default function Navbar({ showIdx, showBan }) {
  return (
    <div className="Navbar flex items-center justify-between">
      <div className="h-20 flex items-center p-2">
        <Link to="/" className="h-full">
          <img src="/logo2.png" alt="codebrain_logo" className="h-full" />
        </Link>
        <div className="navs mx-10 text-white space-x-5 font-semibold flex items-center justify-start">
          {navArr.map((val, i, x) => {
            if (i == showIdx) {
              return (
                <Link to={val.loc} className="border-b-2" key={i}>
                  {val.title}
                </Link>
              );
            } else {
              return (
                <Link to={val.loc} className="py-1" key={i}>
                  {val.title}
                </Link>
              );
            }
          })}
        </div>
      </div>

      <Link
        to="/codex-online-compiler-and-ide"
        className="mx-10"
        title="go to CodeX-Online Compiler & IDE"
      >
        <div
          className={`bg-[#fa7328] p-1 text-white rounded-sm font-semibold "+ ${
            showBan ? "border" : ""
          }`}
        >
          CodeX-Online Compiler & IDE
        </div>
      </Link>
    </div>
  );
}
