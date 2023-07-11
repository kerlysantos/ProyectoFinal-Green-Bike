import { Carousel } from 'react-carousel-minimal';



const photos = [
    {
      image: "https://images.squarespace-cdn.com/content/v1/5ec41d002368e95e183cf71c/07dd330a-cb82-40a4-a615-fd1656beaa7a/Screen+Shot+2021-04-07+at+3.06.12+PM.png",
    },
    {
      image: "https://deseret.brightspotcdn.com/dims4/default/fbcd001/2147483647/strip/true/crop/1200x685+0+87/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F9fUkzrWoy2IiePROheb_vmvZqZg%3D%2F0x0%3A1200x860%2F1200x860%2Ffilters%3Afocal%28600x430%3A601x431%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F18591630%2F1690506.jpg",
    },
    {
      image: "https://i.guim.co.uk/img/media/002ebca5a8d76126e7770794fd1ac28bf0538b9f/196_292_5734_3441/master/5734.jpg?width=620&quality=45&dpr=2&s=none",
    },
    {
      image: "https://images.squarespace-cdn.com/content/v1/5ec41d002368e95e183cf71c/07dd330a-cb82-40a4-a615-fd1656beaa7a/Screen+Shot+2021-04-07+at+3.06.12+PM.png",
    },
    {
      image: "https://deseret.brightspotcdn.com/dims4/default/fbcd001/2147483647/strip/true/crop/1200x685+0+87/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F9fUkzrWoy2IiePROheb_vmvZqZg%3D%2F0x0%3A1200x860%2F1200x860%2Ffilters%3Afocal%28600x430%3A601x431%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F18591630%2F1690506.jpg",
    },
  ];


function ImageCarousel() {
  


  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (

        
        <div style={{
        
          width: "100%",
        }}>
          <Carousel
            data={photos}
            time={4000}
            width="100vh"
            height="80vh"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "100vh",
              maxHeight: "80vh",
              margin: "40px auto",
            }}
          />
        </div>
      
  );
}

export default ImageCarousel;