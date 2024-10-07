const TextControl = ({ text, maxLength, className }) => {
  const truncated =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return <p className={className}>{truncated}</p>;
};
export default TextControl;
