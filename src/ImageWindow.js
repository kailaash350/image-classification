import React from "react";
import './App.css';
import ImageUploading from "react-images-uploading";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import UploadIcon from '@mui/icons-material/UploadFile';
import PredictionCard from "./PredictionCard";




function ImageWindow() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 10;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App"><br></br>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // UI
          <div className="upload-image-wrapper">
            <button className="image-area"
              style={isDragging ? { color: "green" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click to Upload Image <UploadIcon/>
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="150" />
                <div className="image-item-btn-wrapper">
                  <DeleteIcon onClick={() => onImageRemove(index)}/>
                  <UpdateIcon onClick={() => onImageUpdate(index)}/>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <div className="prediction-wrapper">
               <PredictionCard/>
                
      </div>
    </div>
  );
}

export default ImageWindow;
