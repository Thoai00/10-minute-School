interface HeaderProps {
  lang: string;
  changeLanguage: (newLang: string) => void;
}

export default function Header({ lang, changeLanguage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-30 h-10 rounded-md flex items-center justify-center mr-3" 
               style={{ backgroundImage: 'url(/logo.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex bg-gray-800 rounded-full overflow-hidden">
            <button 
              onClick={() => changeLanguage('en')}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                lang === 'en' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('bn')}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                lang === 'bn' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              BN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}