import { MotionProps } from 'framer-motion';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const headingVariants = cva(
  'max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white',
  {
    variants: {
      size: {
        sm: 'text-xl md:text-2xl md:leading-snug',
        md: 'text-3xl md:text-4xl md:leading-tight',
        xl: 'text-4xl md:text-6xl md:leading-none',
        '2xl': 'text-5xl md:text-7xl md:leading-none',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
  as?: React.ElementType;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps & MotionProps>(
  ({ className, size, asChild = false, as: Tag = 'h2', children, ...props }, ref) => {
    const Comp = asChild ? Slot : Tag as any;
    return (
      <Comp
        className={cn(headingVariants({ size, className }))}
        ref={ref as any}
        {...(props as any)}
      >
        <Balancer>{children || ' '}</Balancer>
      </Comp>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };
