'use client';

import React, { useState, useTransition } from 'react';

interface H5PUploaderProps {
  onUploadSuccess?: (newContent: {
    id: string;
    title: string;
    contentPath: string;
  }) => void;
}

export default function H5PUploader({ onUploadSuccess }: H5PUploaderProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setMessage(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setMessage(null);

    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await fetch('/api/h5p/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.error || 'Fehler beim Hochladen');
        }

        setMessage({
          type: 'success',
          text: `"${data.data.title}" erfolgreich hochgeladen!`,
        });
        setSelectedFile(null);

        if (onUploadSuccess) {
          onUploadSuccess(data.data);
        }
      } catch (err) {
        setMessage({
          type: 'error',
          text:
            err instanceof Error
              ? err.message
              : 'Upload konnte nicht abgeschlossen werden',
        });
      }
    });
  };

  return (
    <div className="h5p-uploader-box">
      <h3 className="uploader-title">.h5p Datei hochladen</h3>
      <p className="uploader-desc">
        Wähle eine beliebige <code>.h5p</code>-Datei aus, um sie in MongoDB zu
        registrieren und sofort abzuspielen.
      </p>

      <form onSubmit={handleUpload} className="uploader-form">
        <input
          type="file"
          accept=".h5p"
          onChange={handleFileChange}
          className="uploader-input"
          disabled={isPending}
        />
        <button
          type="submit"
          disabled={!selectedFile || isPending}
          className="uploader-button"
        >
          {isPending ? 'Wird entpackt...' : 'Hochladen & Bereitstellen'}
        </button>
      </form>

      {message && (
        <div
          className={`uploader-alert ${
            message.type === 'success' ? 'alert-success' : 'alert-error'
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
