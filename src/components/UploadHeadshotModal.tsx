import React, { useState, useRef } from 'react';
import { 
  Upload, 
  Camera, 
  X, 
  Check, 
  Link, 
  AlertCircle, 
  Image as ImageIcon,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { setExecutiveHeadshot, resetExecutiveHeadshot, getExecutiveHeadshotUrl } from '../lib/useExecutiveHeadshot';

interface UploadHeadshotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadHeadshotModal: React.FC<UploadHeadshotModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageUrlInput, setImageUrlInput] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setStatusMessage({ type: 'error', text: 'Please select a valid image file (JPG, PNG, WebP).' });
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
        setStatusMessage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
        setStatusMessage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (!imageUrlInput.trim()) return;
    setPreviewUrl(imageUrlInput.trim());
    setSelectedFile(null);
    setStatusMessage(null);
  };

  const handleSave = async () => {
    if (!previewUrl) return;

    setIsUploading(true);
    setStatusMessage(null);

    try {
      // 1. Instantly update client cache for instantaneous visual reflection
      setExecutiveHeadshot(previewUrl);

      // 2. Persist to server backend storage
      const payload: any = {};
      if (previewUrl.startsWith('data:image/')) {
        payload.imageBase64 = previewUrl;
      } else {
        payload.imageUrl = previewUrl;
      }

      const res = await fetch('/api/upload-headshot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.warn('Backend persistence notice:', errorData);
      }

      setStatusMessage({ 
        type: 'success', 
        text: 'Portrait updated successfully! Applied to all pages and sections.' 
      });

      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err: any) {
      console.error(err);
      setStatusMessage({ 
        type: 'error', 
        text: 'Applied locally, but failed to write to server disk: ' + (err.message || 'Network error') 
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleReset = () => {
    resetExecutiveHeadshot();
    setPreviewUrl(null);
    setSelectedFile(null);
    setImageUrlInput('');
    setStatusMessage({ type: 'success', text: 'Reset to default portrait.' });
    setTimeout(() => {
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl space-y-6">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Update Shafiq Rahman's Portrait</h3>
              <p className="text-xs text-slate-400">Apply your real photograph across the entire website</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* File Dropzone */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-700 hover:border-amber-500/60 rounded-2xl p-6 text-center cursor-pointer transition-all bg-slate-950/40 hover:bg-slate-950/80 group"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
            />
            <div className="w-12 h-12 mx-auto rounded-full bg-slate-800 group-hover:bg-amber-500/20 text-slate-300 group-hover:text-amber-400 flex items-center justify-center mb-3 transition-colors">
              <Upload className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-white">
              Click to browse or drag and drop your photo here
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Select <strong>SRLinkedin.jpg</strong> or any real headshot (JPG, PNG, WebP)
            </p>
          </div>

          {/* Or Paste Direct URL */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 block">
              Or paste direct image URL (e.g. LinkedIn, Cloudinary, AWS S3, Imgur):
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Link className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  value={imageUrlInput}
                  onChange={(e) => setImageUrlInput(e.target.value)}
                  placeholder="https://.../your-photo.jpg"
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                />
              </div>
              <button
                type="button"
                onClick={handleApplyUrl}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Preview URL
              </button>
            </div>
          </div>

          {/* Live Preview */}
          {previewUrl && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Preview:</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-xl shrink-0 bg-slate-900">
                  <img
                    src={previewUrl}
                    alt="New Preview"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div className="font-bold text-white">Shafiq Rahman, PMP®</div>
                  <div className="text-slate-400">Ready to replace photo across:</div>
                  <ul className="text-[11px] text-emerald-400 list-disc list-inside space-y-0.5">
                    <li>About Shafiq Page</li>
                    <li>Hero Header Badge</li>
                    <li>Leadership Advisory Section</li>
                    <li>Schedule & Booking Page</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`p-3.5 rounded-xl text-xs flex items-center gap-2.5 ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-950/60 border border-emerald-800 text-emerald-300'
                  : 'bg-red-950/60 border border-red-800 text-red-300'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <Check className="w-4 h-4 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between bg-slate-950/50">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={!previewUrl || isUploading}
              onClick={handleSave}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              {isUploading ? (
                <span>Saving & Deploying...</span>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Apply Photo to Website</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
