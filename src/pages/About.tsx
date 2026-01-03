import React from 'react';
import { FiShield, FiCpu, FiEye, FiLayers, FiTrendingUp, FiUsers } from 'react-icons/fi';

export const About: React.FC = () => {
  return (
    <div className="gradient-bg min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About ImageGuard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced AI technology for detecting image tampering and ensuring digital authenticity
          </p>
        </div>

        {/* Technology Overview */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Our Technology Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FiCpu className="h-5 w-5 text-blue-600 mr-2" />
                Deep Learning Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                Our AI models are trained on millions of images to detect subtle patterns that indicate digital manipulation. 
                Using convolutional neural networks (CNNs), we analyze pixel-level inconsistencies that are invisible to the human eye.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FiLayers className="h-5 w-5 text-green-600 mr-2" />
                Multi-Layer Detection
              </h3>
              <p className="text-gray-600 mb-4">
                We employ multiple detection techniques including compression artifact analysis, edge inconsistency detection, 
                metadata examination, and noise pattern analysis to provide comprehensive results.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Detection Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <FiEye className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Pixel Analysis</h4>
                <p className="text-sm text-gray-600">Detecting inconsistent pixel patterns</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <FiLayers className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Compression</h4>
                <p className="text-sm text-gray-600">Analyzing compression artifacts</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <FiTrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Edge Detection</h4>
                <p className="text-sm text-gray-600">Identifying unnatural edge patterns</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <FiShield className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">Metadata</h4>
                <p className="text-sm text-gray-600">Examining file metadata for inconsistencies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accuracy Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.2%</div>
            <div className="text-sm text-gray-600 mb-1">Accuracy Rate</div>
            <div className="text-xs text-gray-500">Based on 1M+ test images</div>
          </div>

          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">&lt;2s</div>
            <div className="text-sm text-gray-600 mb-1">Processing Time</div>
            <div className="text-xs text-gray-500">Average analysis duration</div>
          </div>

          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-sm text-gray-600 mb-1">Detection Types</div>
            <div className="text-xs text-gray-500">Different tampering methods</div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Use Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiShield className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Journalism & Media</h3>
                <p className="text-gray-600 text-sm">Verify the authenticity of news images and prevent the spread of manipulated media.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiUsers className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Legal & Forensics</h3>
                <p className="text-gray-600 text-sm">Analyze evidence images in legal proceedings and forensic investigations.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiTrendingUp className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Social Media</h3>
                <p className="text-gray-600 text-sm">Platform content moderation and detecting manipulated viral images.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiEye className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Security & Surveillance</h3>
                <p className="text-gray-600 text-sm">Verify security footage and surveillance images for tampering.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy & Security</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">All images are processed locally and deleted immediately after analysis</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">No image data is stored or transmitted to external servers</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">End-to-end encryption for all data processing</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">GDPR and CCPA compliant data handling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};