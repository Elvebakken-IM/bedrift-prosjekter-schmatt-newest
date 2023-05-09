import Navbar from "../navbar/navbar";
import Selectforum from "./components/SelectForum";
import Posts from "./components/Posts";
import { useState } from "react";

export default function forums() {
  const [selectedForum, setSelectedForum] = useState(null)
  return (
    <>
      <Navbar />
      <main className=" w-screen h-screen bg-[#0F151A] flex items-center">
        <div className="flex flex-row items-center w-screen h-4/5 gap-6">
          <section id="forumview" className="flex flex-col h-full ">
            <Selectforum selectedForum={selectedForum} setSelectedForum={setSelectedForum} />
          </section>
          <section className="flex flex-row h-full w-full  ">
            <Posts selectedForum={selectedForum} setSelectedForum={setSelectedForum} />
          </section>
        </div>
      </main>
    </>
  );
}
