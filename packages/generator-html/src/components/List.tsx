import * as React from "react";

const List: React.FC<{ separator: string; children: JSX.Element[] }> = ({ children, separator = ", " }) => {
  if (children) {
    return (
      <span>
        {children
          .map((p, i, a) => {
            switch (i) {
              case a.length - 1:
                return [p];
              case 0:
              default:
                return [p, <span>{`${separator}`}</span>];
            }
          })
          .reduce((p, n) => {
            p.push(...n);

            return p;
          }, [] as JSX.Element[])
          .map((p, i) => {
            return <span key={i}>{p}</span>;
          })}
      </span>
    );
  } else {
    return <span>...</span>;
  }
};
export default List;
