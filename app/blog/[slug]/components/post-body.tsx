import markdownStyles from "./markdown-styles.module.css";
import ReactMarkdown from "react-markdown";
type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <ReactMarkdown className={markdownStyles["markdown"]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
