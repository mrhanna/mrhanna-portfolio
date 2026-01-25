import { forwardRef } from 'react';
import Image from 'next/image';

type CardOwnProps = {
  imageSrc?: string;
  imageAlt?: string;
  imageOverlay?: React.ReactNode;
  bodyClassName?: string;
  className?: string;
  children?: React.ReactNode;
};

type CardProps<E extends React.ElementType> = CardOwnProps &
  Omit<React.ComponentPropsWithRef<E>, keyof CardOwnProps> & {
    as?: E;
  };

const Card = forwardRef(
  <E extends React.ElementType = 'div'>(
    props: CardProps<E>,
    ref: React.Ref<any>,
  ) => {
    const {
      as,
      imageSrc,
      imageAlt = '',
      imageOverlay,
      bodyClassName = 'p-4 sm:p-6',
      className = 'bg-ui-blue-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow',
      children,
      ...rest
    } = props;

    const Component: React.ElementType = as ?? 'div';

    return (
      <Component
        ref={ref}
        className={className}
        {...(rest as React.ComponentPropsWithoutRef<E>)}
      >
        {imageSrc && (
          <div className="aspect-video bg-ui-blue-800 relative p-4 text-right">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
            {imageOverlay}
          </div>
        )}

        <div className={bodyClassName}>{children}</div>
      </Component>
    );
  },
);

export default Card;
