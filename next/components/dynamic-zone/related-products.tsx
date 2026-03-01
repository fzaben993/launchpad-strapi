'use client';

import React from 'react';

import { ProductItems } from '@/components/products/product-items';

import type { Product } from '@/types/types';

export const RelatedProducts = ({
  heading,
  sub_heading,
  products,
  locale,
}: {
  heading: string;
  sub_heading: string;
  products: Product[];
  locale: string;
}) => {
  return (
    <div className="mt-10">
      <ProductItems
        heading={heading}
        sub_heading={sub_heading}
        products={products}
        locale={locale}
      />
    </div>
  );
};
