import visit from 'unist-util-visit';

export default function () {
  return (tree: any) => {
    visit(tree, node => {
      const depth = node.depth;
      if (node.type === 'heading' && typeof depth === 'number') {
        if (depth < 3) {
          node.depth = 3;
        } else {
          node.depth = depth;
        }
      }

      return (node as unknown) as void;
    });
  };
}
