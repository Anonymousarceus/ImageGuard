import React, { useState } from 'react';
import { FiCode, FiCopy, FiCheck, FiZap, FiShield } from 'react-icons/fi';

export const ApiDocs: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string>('');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const codeExamples = {
    curl: `curl -X POST https://api.imageguard.ai/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "image=@path/to/image.jpg" \\
  -F "detailed=true"`,
    
    python: `import requests

# Initialize the client
api_key = "YOUR_API_KEY"
headers = {"Authorization": f"Bearer {api_key}"}

# Analyze an image
with open("image.jpg", "rb") as f:
    files = {"image": f}
    data = {"detailed": True}
    
    response = requests.post(
        "https://api.imageguard.ai/v1/analyze",
        headers=headers,
        files=files,
        data=data
    )
    
result = response.json()
print(f"Tampering detected: {result['tampered']}")
print(f"Confidence: {result['confidence']}%")`,

    javascript: `const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');

async function analyzeImage(imagePath) {
  const form = new FormData();
  form.append('image', fs.createReadStream(imagePath));
  form.append('detailed', 'true');

  try {
    const response = await axios.post(
      'https://api.imageguard.ai/v1/analyze',
      form,
      {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY',
          ...form.getHeaders()
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Analysis failed:', error.response.data);
  }
}`,

    response: `{
  "success": true,
  "tampered": true,
  "confidence": 87.3,
  "processing_time": 1.24,
  "details": {
    "pixel_analysis": 72.1,
    "metadata_analysis": 85.6,
    "compression_analysis": 89.2,
    "edge_analysis": 76.8,
    "noise_analysis": 81.4
  },
  "tampering_type": "object_removal",
  "risk_areas": 2,
  "file_info": {
    "format": "JPEG",
    "size": 2048576,
    "dimensions": {
      "width": 1920,
      "height": 1080
    },
    "created_at": "2023-11-16T10:30:00Z"
  }
}`
  };

  return (
    <div className="gradient-bg min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Integrate ImageGuard's tamper detection capabilities into your applications
          </p>
        </div>

        {/* Quick Start */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FiZap className="h-6 w-6 text-blue-600 mr-3" />
            Quick Start
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get API Key</h3>
              <p className="text-sm text-gray-600">Sign up and get your free API key from the dashboard</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Make Request</h3>
              <p className="text-sm text-gray-600">Send POST request with your image to the analyze endpoint</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Results</h3>
              <p className="text-sm text-gray-600">Receive detailed analysis results in JSON format</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Base URL</span>
              <button
                onClick={() => copyToClipboard('https://api.imageguard.ai/v1', 'base-url')}
                className="text-blue-600 hover:text-blue-700"
              >
                {copiedCode === 'base-url' ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
              </button>
            </div>
            <code className="text-blue-600 font-mono">https://api.imageguard.ai/v1</code>
          </div>
        </div>

        {/* Authentication */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FiShield className="h-6 w-6 text-green-600 mr-3" />
            Authentication
          </h2>
          <p className="text-gray-600 mb-4">
            All API requests require authentication using a Bearer token in the Authorization header.
          </p>
          <div className="bg-gray-900 rounded-lg p-4 relative">
            <button
              onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY', 'auth-header')}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              {copiedCode === 'auth-header' ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
            </button>
            <code className="text-green-400 font-mono text-sm">
              Authorization: Bearer YOUR_API_KEY
            </code>
          </div>
        </div>

        {/* Endpoints */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Endpoints</h2>
          
          <div className="space-y-8">
            {/* Analyze Endpoint */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm font-medium">POST</span>
                <code className="text-lg font-mono text-gray-900">/analyze</code>
              </div>
              
              <p className="text-gray-600 mb-4">Analyze an image for tampering and manipulation.</p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Parameters</h4>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Parameter</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Required</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono text-gray-900">image</td>
                      <td className="px-4 py-2 text-sm text-gray-600">file</td>
                      <td className="px-4 py-2 text-sm text-green-600">Yes</td>
                      <td className="px-4 py-2 text-sm text-gray-600">Image file to analyze (max 10MB)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm font-mono text-gray-900">detailed</td>
                      <td className="px-4 py-2 text-sm text-gray-600">boolean</td>
                      <td className="px-4 py-2 text-sm text-gray-400">No</td>
                      <td className="px-4 py-2 text-sm text-gray-600">Return detailed analysis breakdown</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FiCode className="h-6 w-6 text-purple-600 mr-3" />
            Code Examples
          </h2>
          
          <div className="space-y-8">
            {/* cURL */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">cURL</h3>
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <button
                  onClick={() => copyToClipboard(codeExamples.curl, 'curl')}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  {copiedCode === 'curl' ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
                </button>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{codeExamples.curl}</code>
                </pre>
              </div>
            </div>

            {/* Python */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Python</h3>
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <button
                  onClick={() => copyToClipboard(codeExamples.python, 'python')}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  {copiedCode === 'python' ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
                </button>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{codeExamples.python}</code>
                </pre>
              </div>
            </div>

            {/* JavaScript */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Node.js</h3>
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <button
                  onClick={() => copyToClipboard(codeExamples.javascript, 'javascript')}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  {copiedCode === 'javascript' ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
                </button>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{codeExamples.javascript}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Response Format */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Response Format</h2>
          <p className="text-gray-600 mb-4">
            The API returns a JSON object with the analysis results:
          </p>
          <div className="bg-gray-900 rounded-lg p-4 relative">
            <button
              onClick={() => copyToClipboard(codeExamples.response, 'response')}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              {copiedCode === 'response' ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}
            </button>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{codeExamples.response}</code>
            </pre>
          </div>
        </div>

        {/* Rate Limits & Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Rate Limits</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Free Tier</span>
                <span className="font-medium text-gray-900">100 requests/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pro Tier</span>
                <span className="font-medium text-gray-900">10,000 requests/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Enterprise</span>
                <span className="font-medium text-gray-900">Custom limits</span>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Pricing</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Free</span>
                <span className="font-medium text-gray-900">$0/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pro</span>
                <span className="font-medium text-gray-900">$29/month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Enterprise</span>
                <span className="font-medium text-gray-900">Contact us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};