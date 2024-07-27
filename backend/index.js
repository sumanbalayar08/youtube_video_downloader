const express = require("express")
const fs = require('fs')
const ytdl = require('ytdl-core')
const app=express()
const cors = require("cors")
const os = require("os")
const path = require('path');


app.use(express.json());
app.use(cors());

const getDownloadsPath = () => {
    const homeDir = os.homedir();
    switch (os.platform()) {
      case 'win32':
        return path.join(homeDir, 'Downloads');
      case 'darwin':
        return path.join(homeDir, 'Downloads');
      case 'linux':
        return path.join(homeDir, 'Downloads');
      default:
        throw new Error('Unsupported OS');
    }
  };

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.post('/api/download', async(req, res) => {
    const { url } = req.body;
    console.log('Received URL:', url);
    if(ytdl.validateURL(url)){
        const videoId= ytdl.getURLVideoID(url);
        const downloadsPath = getDownloadsPath();
        const outputPath = path.join(downloadsPath, `video_${videoId}.mp4`);
        try{
            await ytdl(url,{quality:'highest'}).pipe(fs.createWriteStream(outputPath))
            .on('finish', () => {
                console.log('Download completed');
                res.status(200).send({ message: 'Download completed successfully', path: outputPath });
              }).on('error',(err)=>{
                console.error('Error downloading the video:', err);
                res.status(500).send({ message: 'Error downloading the video', error: err });
              })
        }catch(err){
            console.error('Error processing the download:', err);
            res.status(500).send({ message: 'Error processing the download', error: err });
        }
    }else {
        res.status(400).send({ message: 'Invalid URL' });
      }
  });

app.listen(4000,()=>{
try{
console.log('Server Started Successfully');
}
catch(err){
console.err("Error starting the server",{err});
}
});