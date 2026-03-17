'use client';
import Link from 'next/link';
import { 
  FaHome, FaUserFriends, FaCompass, FaVideo, 
  FaPlus, FaUser, FaSignInAlt, FaUserPlus
} from 'react-icons/fa';

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-60 border-r fixed h-full overflow-y-auto bg-white">
        <div className="p-4">
          <Link href="/" className="text-xl font-bold flex items-center">
            <span className="text-red-500 mr-1">TikTok</span>
          </Link>
        </div>
        
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/" 
                className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2"
              >
                <FaHome className="text-xl mr-3" />
                <span>For You</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/following" 
                className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2"
              >
                <FaUserFriends className="text-xl mr-3" />
                <span>Following</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/explore" 
                className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2"
              >
                <FaCompass className="text-xl mr-3" />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/live" 
                className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2"
              >
                <FaVideo className="text-xl mr-3" />
                <span>LIVE</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/profile" 
                className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2"
              >
                <FaUser className="text-xl mr-3" />
                <span>Profile</span>
              </Link>
            </li>
            {/* Auth links in sidebar */}
            <li className="border-t pt-2 mt-2">
              <Link 
                href="/login" 
                className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2 text-blue-600"
              >
                <FaSignInAlt className="text-xl mr-3" />
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/signup" 
                className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2 text-green-600"
              >
                <FaUserPlus className="text-xl mr-3" />
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Suggested accounts */}
        <div className="border-t mt-4 pt-4 px-2">
          <p className="text-gray-500 text-sm px-3 mb-2">Suggested accounts</p>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <div className="h-8 w-8 rounded-full bg-gray-300 mr-2"></div>
              <div>
                <p className="text-sm font-semibold">user_{index + 1}</p>
                <p className="text-xs text-gray-500">User {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t px-3 py-4 text-xs text-gray-500">
          <p className="mb-2">© 2025 TikTok</p>
        </div>
      </div>
      
      {/* Main content */}
      <div className="ml-60 flex-1">
        {/* Header with auth buttons */}
        <header className="border-b p-4 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-semibold">TikTok Feed</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/upload">
              <button className="flex items-center space-x-2 px-4 py-2 border rounded-md hover:bg-gray-50 transition">
                <FaPlus className="text-sm" />
                <span>Upload</span>
              </button>
            </Link>
            
            {/* Auth buttons in header */}
            <Link href="/login">
              <button className="flex items-center space-x-2 px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition">
                <FaSignInAlt className="text-sm" />
                <span>Login</span>
              </button>
            </Link>
            
            <Link href="/signup">
              <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                <FaUserPlus className="text-sm" />
                <span>Sign Up</span>
              </button>
            </Link>
          </div>
        </header>
        
        {/* Page content */}
        <main className="p-4 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
 );
}