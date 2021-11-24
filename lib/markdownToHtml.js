import remark from 'remark';
import html from 'remark-html';

// sanitize HTML but allow class, className and id properties
const merge = require('deepmerge');
const github = require('hast-util-sanitize/lib/github');

const schema = merge(github, {
  attributes: { '*': ['class', 'id', 'className'] },
});

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: schema })
    .process(markdown);
  return result.toString();
}
