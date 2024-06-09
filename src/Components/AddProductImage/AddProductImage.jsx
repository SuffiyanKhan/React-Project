import { useState } from 'react';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        console.log(file)
        alert(file)
        setImage(file);
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{
                border: '1px solid #ccc',
                padding: '10px',
                height: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: dragging ? '#f0f0f0' : '#fff',
            }}
            className='bg-secondary border rounded-3'
        >
            {image ? (
                <img src={URL.createObjectURL(image)} width={100} alt="Uploaded Image" />
            ) : (
                <>
                    <label htmlFor="fileInput" className='fw-semibold fs-6'>Drop an image or click to select an image</label>
                </>
            )}
            <input
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="fileInput"
            />
        </div>
    );
};

export default ImageUploader;