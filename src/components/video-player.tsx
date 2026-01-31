'use client';

import { useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  movieTitle: string;
  onClose: () => void;
}

type LinkType = 'drive' | 'transfer' | 'unknown';

function getLinkType(url: string): LinkType {
  if (url.includes('drive.google.com')) return 'drive';
  if (url.includes('transfer.it') || url.includes('we.tl')) return 'transfer';
  return 'unknown';
}

function getDriveEmbedUrl(url: string): string {
  // Extract FILE_ID from various Drive URL formats
  const fileMatch = url.match(/\/file\/d\/([^\/]+)/);
  if (fileMatch) {
    return `https://drive.google.com/file/d/${fileMatch[1]}/preview`;
  }
  
  // Try to extract from other formats
  const idMatch = url.match(/id=([^&]+)/);
  if (idMatch) {
    return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
  }
  
  return url;
}

export default function VideoPlayer({ videoUrl, movieTitle, onClose }: VideoPlayerProps) {
  const linkType = getLinkType(videoUrl);
  
  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  
  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  const handleDownload = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Fechar player"
      >
        <X className="w-6 h-6 text-white" />
      </button>
      
      {linkType === 'drive' ? (
        // Google Drive Player
        <div className="w-full h-full p-4 md:p-8">
          <iframe
            src={getDriveEmbedUrl(videoUrl)}
            className="w-full h-full rounded-lg"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={`Player: ${movieTitle}`}
          />
        </div>
      ) : linkType === 'transfer' ? (
        // Transfer.it Download Message
        <div className="max-w-md mx-auto p-8 bg-zinc-900 rounded-2xl shadow-2xl">
          <div className="text-center space-y-6">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Download className="w-10 h-10 text-white" />
            </div>
            
            {/* Title */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Download Necessário
              </h2>
              <p className="text-zinc-400">
                {movieTitle}
              </p>
            </div>
            
            {/* Message */}
            <p className="text-zinc-300">
              Este filme está hospedado em um serviço de transferência de arquivos. 
              Para assistir, você precisa fazer o download primeiro.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={handleDownload}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                <div className="flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Baixar Arquivo
                </div>
              </button>
              
              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Unknown link type
        <div className="max-w-md mx-auto p-8 bg-zinc-900 rounded-2xl shadow-2xl">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Link não reconhecido
            </h2>
            <p className="text-zinc-400">
              Este tipo de link não é suportado pelo player integrado.
            </p>
            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
