import { useRouter } from 'next/navigation';

interface BackButtonProps {
  videoTitle?: string;
  className?: string;
}

export const BackButton = ({ videoTitle, className = '' }: BackButtonProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (videoTitle) {
      router.push(`/search?q=${encodeURIComponent(videoTitle)}`);
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 ${className}`}
      title={videoTitle ? `返回 ${videoTitle} 的搜索结果` : '返回上一页'}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className="flex-shrink-0"
      >
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      
      {videoTitle && (
        <div className="flex items-center gap-1 text-sm">
          <span className="text-gray-400">&gt;</span>
          <span className="max-w-[200px] truncate" title={videoTitle}>
            {videoTitle}
          </span>
        </div>
      )}
    </button>
  );
};
