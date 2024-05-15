import { GlobeAltIcon, EyeIcon, CircleStackIcon} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <CircleStackIcon className="h-50 w-50 rotate-[15deg]" />
      <p className="text-[44px]">Debth</p>
      <EyeIcon className="h-10 w-10 rotate-[15deg]" />
    </div>
  );
}