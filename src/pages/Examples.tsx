import React, { useState } from 'react';
import { FiCheck, FiX, FiAlertTriangle, FiEye } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface ExampleImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tamperingType: string;
  confidence: number;
  tampered: boolean;
  details: {
    pixelAnalysis: number;
    metadataAnalysis: number;
    compressionAnalysis: number;
    edgeAnalysis: number;
  };
}

export const Examples: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<ExampleImage | null>(null);

  const exampleImages: ExampleImage[] = [
    {
      id: '1',
      title: 'Original Landscape',
      description: 'Unmodified landscape photograph with natural lighting and consistent metadata',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      tamperingType: 'None',
      confidence: 98.7,
      tampered: false,
      details: {
        pixelAnalysis: 96.2,
        metadataAnalysis: 99.1,
        compressionAnalysis: 97.8,
        edgeAnalysis: 95.4
      }
    },
    {
      id: '2',
      title: 'Object Removal',
      description: 'Image with digitally removed object showing inconsistent background filling',
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      tamperingType: 'Content-Aware Fill',
      confidence: 87.3,
      tampered: true,
      details: {
        pixelAnalysis: 72.1,
        metadataAnalysis: 85.6,
        compressionAnalysis: 89.2,
        edgeAnalysis: 76.8
      }
    },
    {
      id: '3',
      title: 'Face Swap',
      description: 'Portrait with replaced facial features showing edge inconsistencies',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      tamperingType: 'Facial Manipulation',
      confidence: 92.5,
      tampered: true,
      details: {
        pixelAnalysis: 78.9,
        metadataAnalysis: 91.2,
        compressionAnalysis: 83.4,
        edgeAnalysis: 69.8
      }
    },
    {
      id: '4',
      title: 'Color Enhancement',
      description: 'Heavily color-corrected image with unnatural saturation levels',
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
      tamperingType: 'Color Manipulation',
      confidence: 76.2,
      tampered: true,
      details: {
        pixelAnalysis: 88.1,
        metadataAnalysis: 79.3,
        compressionAnalysis: 75.6,
        edgeAnalysis: 91.2
      }
    },
    {
      id: '5',
      title: 'Copy-Paste Forgery',
      description: 'Image with duplicated regions showing repeated patterns',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
      tamperingType: 'Copy-Move',
      confidence: 94.1,
      tampered: true,
      details: {
        pixelAnalysis: 71.4,
        metadataAnalysis: 88.7,
        compressionAnalysis: 92.3,
        edgeAnalysis: 85.6
      }
    },
    {
      id: '6',
      title: 'Authentic Portrait',
      description: 'Original studio photograph with consistent lighting and natural skin texture',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop',
      tamperingType: 'None',
      confidence: 97.8,
      tampered: false,
      details: {
        pixelAnalysis: 95.7,
        metadataAnalysis: 98.2,
        compressionAnalysis: 96.9,
        edgeAnalysis: 97.1
      }
    }
  ];

  return (
    <div className="gradient-bg min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Example Analyses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how ImageGuard detects different types of image tampering and manipulation
          </p>
        </div>

        {/* Example Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {exampleImages.map((example) => (
            <motion.div
              key={example.id}
              className="card p-0 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedExample(example)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img
                  src={example.imageUrl}
                  alt={example.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <div className={`
                    px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1
                    ${example.tampered 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-green-100 text-green-700'
                    }
                  `}>
                    {example.tampered ? (
                      <FiAlertTriangle className="h-3 w-3" />
                    ) : (
                      <FiCheck className="h-3 w-3" />
                    )}
                    <span>{example.tampered ? 'Tampered' : 'Authentic'}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{example.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{example.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{example.tamperingType}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">
                      {example.confidence.toFixed(1)}%
                    </span>
                    <div className={`
                      w-3 h-3 rounded-full
                      ${example.confidence > 90 ? 'bg-green-500' :
                        example.confidence > 75 ? 'bg-yellow-500' : 'bg-red-500'
                      }
                    `}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed View Modal */}
        {selectedExample && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedExample(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      ${selectedExample.tampered ? 'bg-red-100' : 'bg-green-100'}
                    `}>
                      {selectedExample.tampered ? (
                        <FiAlertTriangle className="h-5 w-5 text-red-600" />
                      ) : (
                        <FiCheck className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedExample.title}</h2>
                      <p className="text-gray-600">{selectedExample.tamperingType}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedExample(null)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                      <img
                        src={selectedExample.imageUrl}
                        alt={selectedExample.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-600 text-sm">{selectedExample.description}</p>
                  </div>

                  {/* Analysis Results */}
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Overall Confidence</span>
                        <span className="text-sm font-semibold text-gray-900">
                          {selectedExample.confidence.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-1000 ${
                            selectedExample.confidence > 80 ? 'bg-green-500' :
                            selectedExample.confidence > 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${selectedExample.confidence}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">Detailed Analysis</h4>
                      {Object.entries(selectedExample.details).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full bg-blue-500 transition-all duration-1000"
                                style={{ width: `${value}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-500 w-12 text-right">
                              {(value as number).toFixed(0)}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {selectedExample.tampered && (
                      <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="text-sm font-medium text-red-800 mb-2 flex items-center">
                          <FiAlertTriangle className="h-4 w-4 mr-2" />
                          Tampering Detected
                        </h4>
                        <p className="text-sm text-red-700">
                          This image shows signs of {selectedExample.tamperingType.toLowerCase()} manipulation. 
                          The analysis detected inconsistencies in pixel patterns and compression artifacts.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Information Card */}
        <div className="card p-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FiEye className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Understanding the Examples</h3>
              <p className="text-gray-600 text-sm mb-4">
                These examples demonstrate various types of image manipulation that ImageGuard can detect. 
                Each analysis shows confidence scores for different detection methods, helping you understand 
                how the AI arrives at its conclusions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Tampering Types Detected:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Object removal/insertion</li>
                    <li>• Face and feature swapping</li>
                    <li>• Copy-move forgeries</li>
                    <li>• Color and lighting manipulation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Analysis Methods:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Pixel-level inconsistency detection</li>
                    <li>• Metadata integrity verification</li>
                    <li>• Compression artifact analysis</li>
                    <li>• Edge pattern examination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};