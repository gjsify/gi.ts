import visit from 'unist-util-visit';

export default function () {
  return (tree: any) => {
    visit(tree, node => {
      // @ts-expect-error Missing types for heading
      const depth = node.depth;
      if (node.type === 'heading' && typeof depth === 'number') {
        if (depth < 3) {
          // @ts-expect-error Missing types for heading
          node.depth = 3;
        } else {
          // @ts-expect-error Missing types for heading
          node.depth = depth;
        }
      }

      return (node as unknown) as void;
    });
  };
}
