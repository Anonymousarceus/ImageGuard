import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiUpload, 
  FiClock, 
  FiDatabase, 
  FiSettings,
  FiX,
  FiBarChart,
  FiShield,
  FiHome,
  FiInfo,
  FiCode
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('upload');
  const location = useLocation();

  const navigationItems = [
    { id: 'home', label: 'Home', icon: FiHome, color: 'text-blue-600', path: '/' },
    { id: 'about', label: 'About', icon: FiInfo, color: 'text-green-600', path: '/about' },
    { id: 'examples', label: 'Examples', icon: FiBarChart, color: 'text-purple-600', path: '/examples' },
    { id: 'api', label: 'API Docs', icon: FiCode, color: 'text-orange-600', path: '/api' },
  ];

  const menuItems = [
    { id: 'upload', label: 'Upload Image', icon: FiUpload, color: 'text-blue-600' },
    { id: 'analysis', label: 'Analysis Options', icon: FiBarChart, color: 'text-green-600' },
    { id: 'history', label: 'Recent Analysis', icon: FiClock, color: 'text-purple-600' },
    { id: 'batch', label: 'Batch Processing', icon: FiDatabase, color: 'text-orange-600' },
    { id: 'settings', label: 'Settings', icon: FiSettings, color: 'text-gray-600' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-xl z-50 lg:relative lg:translate-x-0"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
                <button
                  onClick={onClose}
                  className="lg:hidden p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Pages</h3>
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.id}
                        to={item.path}
                        onClick={onClose}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : item.color}`} />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Tools Section - Only show on home page */}
              {location.pathname === '/' && (
                <div className="p-4 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Tools</h3>
                  <nav className="space-y-2">
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveTab(item.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                            activeTab === item.id
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          <Icon className={`h-5 w-5 ${activeTab === item.id ? 'text-blue-600' : item.color}`} />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              )}

              {/* Quick Stats */}
              <div className="p-4 border-t border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <FiShield className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900">Quick Stats</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Images Analyzed</div>
                      <div className="font-semibold text-gray-900">247</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Accuracy Rate</div>
                      <div className="font-semibold text-green-600">99.2%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};