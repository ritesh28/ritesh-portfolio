import { Link, Node } from 'mdast';
import { visit } from 'unist-util-visit';

interface Tree extends Node {}

interface Options {
  absolutePath?: string;
}

export function aLinks(options?: Options) {
  function visitor(node: Link) {
    // Sanitize URL by removing leading `/`
    const relativeUrl = node.url.replace(/^\//, '');

    node.url = new URL(relativeUrl, options.absolutePath).href;
    node.data = { ...node.data, hProperties: { target: '_blank' } };
  }

  return function transform(tree: Tree) {
    if (options && options.absolutePath) {
      visit(tree, 'link', visitor);
    } else {
      throw Error('Missing required `absolutePath` option.');
    }
  };
}
