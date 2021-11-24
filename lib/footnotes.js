// Utility to enable using GH markdown style footnotes with remark.

const handleFootnotes = (htmlString, ref) => {
  // parses markdown looking for footnotes, turns them into links and styles them
  // ref should be some sort of unique identifier, like a blog-slug or an ID
  const footnoteRegex = /\[\^([0-9])\]/g;
  const footnotes = new Set();

  htmlString = htmlString.replace(footnoteRegex, (match, $1) => {
    if (!footnotes.has($1)) {
      footnotes.add($1);
      return `<a id="${ref}-backlink-${$1}" href="#${ref}-footnote-${$1}"><sup>(${$1})</sup></a>`;
    }
    return `<a id="${ref}-footnote-${$1}" href="#${ref}-backlink-${$1}">(${$1})</a>`;
  });
  return htmlString;
};

export default handleFootnotes;
