import markdownStyles from "./markdown-styles.module.css";
import ReactMarkdown from "react-markdown";
type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-4xl mx-auto text-justify">
      <ReactMarkdown className={markdownStyles["markdown"]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
