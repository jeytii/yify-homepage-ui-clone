import React, { ReactNode, SelectHTMLAttributes } from 'react';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  containerClassName?: string;
  titleClass: string;
  titleLabel: string;
  children: ReactNode;
}

function Select({
  containerClassName,
  titleClass,
  titleLabel,
  children,
  ...props
}: Props) {
  return (
    <div className={containerClassName}>
      <h5 className={titleClass}>{titleLabel}</h5>
      <select {...props}>{children}</select>
    </div>
  );
}

Select.defaultProps = {
  containerClassName: null,
};

export default Select;
