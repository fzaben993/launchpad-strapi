import { MotionProps } from 'framer-motion';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const subheadingVariants = cva(
  'text-sm md:text-base max-w-4xl text-left my-4 mx-auto text-muted text-center font-normal',
  {
    variants: {},
    defaultVariants: {},
  }
);

export interface SubheadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof subheadingVariants> {
  asChild?: boolean;
  as?: React.ElementType;
}

const Subheading = React.forwardRef<HTMLHeadingElement, SubheadingProps & MotionProps>(
  ({ className, asChild = false, as: Tag = 'h2', children, ...props }, ref) => {
    const Comp = asChild ? Slot : Tag as any;
    return (
      <Comp
        className={cn(subheadingVariants({ className }))}
        ref={ref as any}
        {...(props as any)}
      >
        <Balancer>{children || ' '}</Balancer>
      </Comp>
    );
  }
);

Subheading.displayName = 'Subheading';

export { Subheading, subheadingVariants };
