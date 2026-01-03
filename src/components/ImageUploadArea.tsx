import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiX, FiCheck, FiAlertTriangle, FiEye, FiLayers, FiTarget } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface UploadedFile {
  file: File;
  preview: string;
  id: string;
}

interface AnalysisStep {
  name: string;
  description: string;
  icon: React.ReactNode;
  duration: number;
  progress: number;
}

export const ImageUploadArea: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisCounter, setAnalysisCounter] = useState(0); // Track number of analyses

  const analysisSteps: AnalysisStep[] = [
    {
      name: "Preprocessing",
      description: "Preparing image for analysis and extracting metadata",
      icon: <FiLayers className="h-5 w-5" />,
      duration: 1500,
      progress: 0
    },
    {
      name: "Pixel Analysis",
      description: "Scanning for pixel-level inconsistencies and anomalies",
      icon: <FiTarget className="h-5 w-5" />,
      duration: 2500,
      progress: 0
    },
    {
      name: "Compression Analysis",
      description: "Analyzing compression artifacts and quality markers",
      icon: <FiEye className="h-5 w-5" />,
      duration: 2000,
      progress: 0
    },
    {
      name: "Edge Detection",
      description: "Detecting suspicious edge patterns and discontinuities",
      icon: <FiTarget className="h-5 w-5" />,
      duration: 1800,
      progress: 0
    },
    {
      name: "Final Analysis",
      description: "Compiling results and generating confidence scores",
      icon: <FiCheck className="h-5 w-5" />,
      duration: 1200,
      progress: 0
    }
  ];

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9)
    }));
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
    setAnalysisResult(null);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.bmp', '.webp']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: true
  });

  const removeFile = (id: string) => {
    setUploadedFiles(files => {
      const fileToRemove = files.find(f => f.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return files.filter(f => f.id !== id);
    });
  };

  const analyzeImages = async () => {
    if (uploadedFiles.length === 0) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);
    setCurrentStep(0);
    setAnalysisProgress(0);
    
    // Increment counter for alternating results
    const currentCount = analysisCounter;
    setAnalysisCounter(prev => prev + 1);
    
    // Simulate realistic step-by-step analysis
    for (let i = 0; i < analysisSteps.length; i++) {
      setCurrentStep(i);
      
      // Animate progress for current step
      const stepDuration = analysisSteps[i].duration;
      const progressInterval = stepDuration / 100;
      
      for (let progress = 0; progress <= 100; progress += 2) {
        await new Promise(resolve => setTimeout(resolve, progressInterval));
        setAnalysisProgress(progress);
        
        // Add some random variations to make it look more realistic
        if (Math.random() > 0.7) {
          await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 100));
        }
      }
      
      // Brief pause between steps
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    // Alternate between tampered (even count) and untampered (odd count)
    const isTampered = currentCount % 2 === 0;
    
    // Generate mock result after analysis is complete
    const mockResult = {
      overallConfidence: isTampered 
        ? Math.random() * 25 + 75   // 75-100% for tampered
        : Math.random() * 20 + 80,  // 80-100% for untampered
      tamperingDetected: isTampered,
      analysisDetails: {
        pixelAnalysis: isTampered 
          ? Math.random() * 30 + 60   // Lower scores for tampered
          : Math.random() * 15 + 85,  // Higher scores for untampered
        metadataAnalysis: isTampered 
          ? Math.random() * 25 + 70 
          : Math.random() * 10 + 90,
        compressionAnalysis: isTampered 
          ? Math.random() * 35 + 65 
          : Math.random() * 15 + 85,
        noiseAnalysis: isTampered 
          ? Math.random() * 40 + 60 
          : Math.random() * 20 + 80,
        edgeAnalysis: isTampered 
          ? Math.random() * 30 + 70 
          : Math.random() * 10 + 90
      },
      riskyAreas: isTampered ? Math.floor(Math.random() * 3) + 1 : 0,
      processingTime: (analysisSteps.reduce((sum, step) => sum + step.duration, 0) / 1000).toFixed(1)
    };
    
    setAnalysisResult(mockResult);
    setIsAnalyzing(false);
    setCurrentStep(0);
    setAnalysisProgress(0);
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 hover:scale-105
          ${isDragActive 
            ? 'border-blue-400 bg-blue-50' 
            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }
        `}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center space-y-4">
          <div className={`
            w-16 h-16 rounded-full flex items-center justify-center transition-colors
            ${isDragActive ? 'bg-blue-100' : 'bg-gray-100'}
          `}>
            <FiUpload className={`
              h-8 w-8 transition-colors
              ${isDragActive ? 'text-blue-600' : 'text-gray-400'}
            `} />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {isDragActive ? 'Drop your images here' : 'Upload Images for Analysis'}
            </h3>
            <p className="text-gray-500 mb-4">
              Drag and drop your images here, or click to browse
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>• Supports: JPG, PNG, GIF, WebP</span>
              <span>• Max size: 10MB per file</span>
              <span>• Multiple files allowed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Uploaded Files Preview */}
      <AnimatePresence>
        {uploadedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Uploaded Images ({uploadedFiles.length})
              </h3>
              <button
                onClick={analyzeImages}
                disabled={isAnalyzing}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <span className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Analyzing...</span>
                  </span>
                ) : (
                  'Analyze for Tampering'
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {uploadedFiles.map((uploadedFile) => (
                <motion.div
                  key={uploadedFile.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative group"
                >
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={uploadedFile.preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <button
                    onClick={() => removeFile(uploadedFile.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FiX className="h-4 w-4" />
                  </button>
                  
                  <div className="mt-2 text-xs text-gray-500 truncate">
                    {uploadedFile.file.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Analysis Progress */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="card p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-600 border-t-transparent"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  AI Analysis in Progress
                </h3>
                <p className="text-sm text-gray-600">
                  Scanning your image(s) for tampering indicators...
                </p>
              </div>
            </div>

            {/* Current Step Indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {analysisSteps[currentStep]?.name}
                </span>
                <span className="text-sm text-gray-500">
                  Step {currentStep + 1} of {analysisSteps.length}
                </span>
              </div>
              
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-blue-600">
                  {analysisSteps[currentStep]?.icon}
                </div>
                <p className="text-sm text-gray-600">
                  {analysisSteps[currentStep]?.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
                  style={{ width: `${analysisProgress}%` }}
                ></div>
              </div>

              {/* Steps Overview */}
              <div className="grid grid-cols-5 gap-2">
                {analysisSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`text-center p-2 rounded-lg transition-all duration-300 ${
                      index < currentStep
                        ? 'bg-green-100 text-green-700'
                        : index === currentStep
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <div className={`w-6 h-6 mx-auto mb-1 rounded-full flex items-center justify-center ${
                      index < currentStep
                        ? 'bg-green-200'
                        : index === currentStep
                        ? 'bg-blue-200'
                        : 'bg-gray-200'
                    }`}>
                      {index < currentStep ? (
                        <FiCheck className="h-3 w-3" />
                      ) : (
                        <span className="text-xs font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="text-xs font-medium truncate">
                      {step.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scanning Animation */}
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                animate={{
                  x: [-80, window.innerWidth || 400]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Analysis Results */}
      <AnimatePresence>
        {analysisResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="card p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${analysisResult.tamperingDetected ? 'bg-red-100' : 'bg-green-100'}
              `}>
                {analysisResult.tamperingDetected ? (
                  <FiAlertTriangle className="h-5 w-5 text-red-600" />
                ) : (
                  <FiCheck className="h-5 w-5 text-green-600" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Analysis Complete
                </h3>
                <p className={`text-sm flex items-center space-x-2 ${
                  analysisResult.tamperingDetected ? 'text-red-600' : 'text-green-600'
                }`}>
                  <span>
                    {analysisResult.tamperingDetected 
                      ? 'Potential tampering detected' 
                      : 'No tampering detected'
                    }
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">
                    Processed in {analysisResult.processingTime}s
                  </span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Overall Confidence */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Confidence</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {analysisResult.overallConfidence.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      analysisResult.overallConfidence > 80 ? 'bg-green-500' :
                      analysisResult.overallConfidence > 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${analysisResult.overallConfidence}%` }}
                  ></div>
                </div>
              </div>

              {/* Detailed Analysis */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-900">Detailed Analysis</h4>
                {Object.entries(analysisResult.analysisDetails).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-blue-500 transition-all duration-1000"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 w-10 text-right">
                        {(value as number).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {analysisResult.tamperingDetected && (
              <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="text-sm font-medium text-red-800 mb-2">
                  ⚠️ Tampering Indicators Found
                </h4>
                <p className="text-sm text-red-700">
                  {analysisResult.riskyAreas} suspicious area(s) detected. 
                  The image may have been digitally manipulated or edited.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};