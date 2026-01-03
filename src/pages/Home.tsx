import React from 'react';
import { ImageUploadArea } from '../components/ImageUploadArea';

export const Home: React.FC = () => {
  return (
    <div className="h-full gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Detect Image Tampering with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Precision
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Upload your images and let our advanced AI analyze them for any signs of manipulation, 
            editing, or tampering with industry-leading accuracy.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              ✓ 99.2% Accuracy Rate
            </span>
            <span className="flex items-center">
              ✓ Real-time Analysis
            </span>
            <span className="flex items-center">
              ✓ Detailed Reports
            </span>
            <span className="flex items-center">
              ✓ Secure Processing
            </span>
          </div>
        </div>

        {/* Main Upload Area */}
        <ImageUploadArea />

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Analysis</h3>
            <p className="text-gray-600">
              Advanced AI algorithms analyze pixel-level inconsistencies and digital forensics markers.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Results</h3>
            <p className="text-gray-600">
              Get comprehensive analysis results in seconds with detailed confidence scores.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy First</h3>
            <p className="text-gray-600">
              Your images are processed securely and deleted immediately after analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};