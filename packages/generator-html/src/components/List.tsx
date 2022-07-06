import * as React from 'react';

const List: React.FC<{
  className?: string;
  separator?: string | React.JSXElementConstructor<unknown>;
  children: JSX.Element[];
  container?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>;
}> = ({ className, children, separator: Separator = ', ', container: Container = 'span' }) => {
  const WrappedSeparator = () => (typeof Separator === 'function' ? <Separator /> : <span>{Separator}</span>);

  if (children) {
    return (
      <Container className={className}>
        {children
          .map((p, i, a) => {
            switch (i) {
              case a.length - 1:
                return [p];
              case 0:
              default:
                return [p, <WrappedSeparator key={`separator-${i}`} />];
            }
          })
          .reduce((p, n) => {
            p.push(...n);

            return p;
          }, [] as JSX.Element[])}
      </Container>
    );
  } else {
    return <span className={className}>...</span>;
  }
};
export default List;
