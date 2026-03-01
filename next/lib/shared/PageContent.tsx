import { AmbientColor } from '@/components/decorations/ambient-color';
import DynamicZoneManager from '@/components/dynamic-zone/manager';
import { DynamicZone } from '@/types/types';

interface PageData {
  dynamic_zone?: DynamicZone[];
  locale?: string;
  [key: string]: unknown;
}

export default function PageContent({ pageData }: { pageData: PageData }) {
  const dynamicZone = pageData?.dynamic_zone;
  return (
    <div className="relative overflow-hidden w-full">
      <AmbientColor />
      {dynamicZone && (
        <DynamicZoneManager
          dynamicZone={dynamicZone}
          locale={pageData.locale || ''}
        />
      )}
    </div>
  );
}
