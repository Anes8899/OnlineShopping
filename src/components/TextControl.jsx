const TextControl = ({ text, maxLength }) => {
  const truncated =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return <p>{truncated}</p>;
};
