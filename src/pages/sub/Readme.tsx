import AppFrame from "@/components/frame/AppFrame"
import { useEffect, useState } from "react";
import Markdown from "react-markdown";


export default function Readme() {
  const url = "https://raw.githubusercontent.com/gaku913/hikers-pack-root/master/README.md";

  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      }
    };

    fetchMarkdownContent();
  }, []);

  return (
    <AppFrame>
      <Markdown>{markdownContent}</Markdown>
    </AppFrame>
  );
}