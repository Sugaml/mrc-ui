import  React, { useState, useRef, useEffect } from 'react';
import {
  IconButton,
  TableRow,
  TableCell,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tooltip,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileRow = ({ name,
   required, 
   supportedFormats,
    maxFileSize,
     onUpload, 
     uploadSizeRange,
      onDelete,
      onCompletionChange }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Check if the required file is completed whenever file state changes
    onCompletionChange(file !== null);
  }, [file, onCompletionChange]);
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
  
    if (selectedFile) {
      setErrorMessage(''); // Clear the error message when a new file is selected
  
      if (!checkFileSize(selectedFile)) {
        setErrorMessage(`File size must be between ${uploadSizeRange.min}MB and ${uploadSizeRange.max}MB`);
        setFile(null);
        setPreviewUrl(null);
        return;
      }
  
      if (!checkFileExtension(selectedFile)) {
        setErrorMessage(`File format not supported. Supported formats: ${supportedFormats}`);
        setFile(null);
        setPreviewUrl(null);
        return;
      }
  
      setErrorMessage('');
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      onUpload(selectedFile);
    } else {
      setErrorMessage('');
      setFile(null);
      setPreviewUrl(null);
    }
  };
  
  const checkFileSize = (file) => {
    const sizeInMB = file.size / (1024 * 1024);
    return sizeInMB >= uploadSizeRange.min && sizeInMB <= uploadSizeRange.max;
  };


  const checkFileExtension = (file) => {
    const supportedExtensions = supportedFormats.split(',').map((format) => format.trim().toLowerCase());
    const fileExtension = `.${file.name.split('.').pop().toLowerCase()}`; // Include the leading dot
  
    // Check if the file has an extension
    if (!fileExtension) {
      return false;
    }
  
    // Check if the file extension is supported
    return supportedExtensions.includes(fileExtension);
  };
  
  const handleDelete = () => {
    setErrorMessage('');
    setFile(null);
    setPreviewUrl(null);
    onDelete();
    onCompletionChange(false);
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleViewClick = () => {
    if (previewUrl) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatFileSize = (sizeInBytes) => {
    if (sizeInBytes < 1024) {
      return sizeInBytes.toFixed(2) + ' B';
    } else if (sizeInBytes < 1024 * 1024) {
      return (sizeInBytes / 1024).toFixed(2) + ' KB';
    } else {
      return (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB';
    }
  }; 

  return (
    <TableRow>
      <TableCell>
        <Typography variant="body1">{name}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{required ? 'Required' : 'Optional'}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">
          {supportedFormats} (Max file size: {maxFileSize}MB)
        </Typography>
      </TableCell>
      <TableCell>
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept={supportedFormats}
        />
        {file ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={previewUrl} alt="Preview" style={{ width: 100 }} />
              <div style={{ marginLeft: 8 }}>
                <Typography variant="body1">{file.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {formatFileSize(file.size)}
                </Typography>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
              <IconButton color="primary" onClick={handleViewClick}>
                <Tooltip title="Preview" arrow placement="top">
                  <VisibilityIcon />
                </Tooltip>
              </IconButton>
              <IconButton color="secondary" onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </div>
          </>
        ) : (
          <IconButton color="primary" component="span" onClick={handleUploadButtonClick}>
            <CloudUploadIcon />
          </IconButton>
        )}
      </TableCell>

      {/* Image Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Image Preview</DialogTitle>
        <DialogContent>
          {previewUrl && <img src={previewUrl} alt="Preview" style={{ width: '100%', height: 'auto' }} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Error Message */}
      {errorMessage && (
        <TableCell colSpan={5}>
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        </TableCell>
      )}
    </TableRow>
  );
};

export default FileRow;
