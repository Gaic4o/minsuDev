import Link from 'next/link';
import { cn } from '@/utils/tailwind';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 pt-4">
      <div>
        <Link
          href={'/'}
          className="text-2xl font-bold text-thinGray500 no-underline"
        >
          minsuDev
        </Link>
      </div>

      <div>
        <Link
          href="https://github.com/Gaic4o"
          target="_blank"
          rel="noopener noreferrer"
          className={cn('cursor-pointer text-thinGray100 no-underline', 'mr-4')}
        >
          About
        </Link>
        <Link
          href="https://github.com/Gaic4o"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-thinGray100 no-underline"
        >
          Github
        </Link>
      </div>
    </header>
  );
};
export default Header;
