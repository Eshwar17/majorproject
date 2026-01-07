import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

const WorkshopIllustrations = () => {
  const creattieRef = useRef(null);

  useEffect(() => {
    // Load Creattie script only once
    const existingScript = document.querySelector(
      'script[src^="https://creattie.com/js/embed.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://creattie.com/js/embed.js?id=3efa1fcb5d85991e845a";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <creattie-embed
        ref={creattieRef}
        src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/138546/rNdWNVPbplmV1pOH.json"
        delay="1"
        speed="100"
        frame_rate="24"
        trigger="loop"
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "transparent",
        }}
      />
    </Box>
  );
};

export default WorkshopIllustrations;
