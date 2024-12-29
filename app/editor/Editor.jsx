"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useContext, useEffect, useState } from "react";
import ProjectContext from "./ProjectContext";
import LoadingContext from "./LoadingContext";

export default function BlockNote() {
  // Creates a new editor instance.
  const { activeProjectId } = useContext(ProjectContext);
  const { startLoad, endLoad } = useContext(LoadingContext);
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const getContent = () => {
    if (activeProjectId !== "") {
      startLoad();
      fetch(`/api/getRequestById/${activeProjectId}`, { method: "GET" })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setImgUrl(res.result.imgUrl || "");
          setDescription(res.result.description || "");
          setStatus(res.result.status || "");
          setCategory(res.result.category || "");
          editor.tryParseMarkdownToBlocks(res.result.body).then((blocks) => {
            editor.replaceBlocks(editor.document, blocks);
          });
        })
        .finally((res) => {
          endLoad();
        });
    }
  };

  useEffect(() => {
    getContent();
  }, [activeProjectId]);

  let editor = null;
  if (typeof document !== 'undefined') {
    editor = useCreateBlockNote();
  }
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 20);
  }, []);

  const handleSave = async () => {
    startLoad();
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    const res = await fetch(`/api/updateRequestById/${activeProjectId}`, {
      method: "PATCH",
      body: JSON.stringify({
        description: description,
        imgUrl: imgUrl,
        body: markdown,
        status: status,
        category: category,
      }),
    });
    endLoad();
  };

  return (
    <>
      <div className="text-xl p-4 flex justify-between">
        <div className="div">Description</div>
        <button
          onClick={handleSave}
          className="block border border-black rounded-md px-2"
        >
          Save
        </button>
      </div>
      <input
        type="text"
        className="border border-black w-full"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <div className="text-xl p-4">Image URL</div>
      <input
        type="text"
        className="border border-black w-full"
        value={imgUrl}
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />
      <div className="text-xl p-4">Category</div>
      <input
        type="text"
        className="border border-black w-full"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <div className="flex">
        <div className="text-xl p-4">Status</div>
        <select
          name="status"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          value={status}
        >
          <option value="Completed" key={1}>
            Completed
          </option>
          <option value="Ongoing" key={2}>
            Ongoing
          </option>
          <option value="Upcoming" key={3}>
            Upcoming
          </option>
        </select>
      </div>
      <div className="text-xl p-4">Body</div>
      {!loading && (
        <BlockNoteView
          editor={editor}
          theme="light"
          style={{ height: "100%", border: "1px solid black" }}
        />
      )}
    </>
  );
}
