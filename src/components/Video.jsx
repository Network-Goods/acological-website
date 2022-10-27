import { isSafari } from "react-device-detect";

export default function VideoModal() {
 
  return (
    <>
   <iframe
   className={`${!isSafari && "not-safari"}`}
   src="https://www.youtube.com/embed/YfpnGPYddK8"
   title="YouTube video player"
   frameBorder="0"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
   allowFullScreen></iframe>
   </>
  );
}


