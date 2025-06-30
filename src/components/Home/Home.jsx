/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { Button, Stack, Text, VStack, Image, Box, Center } from "@chakra-ui/react";
import "./home.css";
import { Link } from "react-router-dom";
import vg from "../../assets/images/hero2.png";
import vg1 from "../../assets/images/coffee-person.png";
import Features from "../Features/Features";
import FeaturesSection from "../Features/FeaturesSection";
import Alumni from "../alumni/Alumni";
import CardSlider from "../CardSliders/CardSlider";
import FaqPage from "../Faq/FaqPage";
import SomethingBigIsComingSection from "../Surprise/SomethingBigIsComingSection";
import TestimonialSlider from "../Testimonials/TestimonialSlider";



function Home() {
  useEffect(() => {
    const chatElement = document.getElementById("whats-chat");
    const chatTopRightElement = document.getElementById("chat-top-right");
    const sendBtnElement = document.getElementById("send-btn");

    function showchatbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "8%";
      }
    }

    function closechatbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "-500px";
      }
    }

    function showchatboxtime() {
      setTimeout(launchbox, 5000);
    }

    function launchbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "6%";
      }
    }

    function sendmsg() {
      const msgElement = document.getElementById("whats-in");
      if (msgElement) {
        var msg = msgElement.value;
        var relmsg = msg.replace(/ /g, "%20");
        window.open(
          "https://api.whatsapp.com/send?phone=918099523442&text=" + relmsg,
          "_blank"
        );
      }
    }

    if (chatElement) {
      chatElement.addEventListener("mouseover", showchatbox);
    }

    if (chatTopRightElement) {
      chatTopRightElement.addEventListener("click", closechatbox);
    }

    if (sendBtnElement) {
      sendBtnElement.addEventListener("click", sendmsg);
    }

    // You can use window.onload here to ensure the elements are present in the DOM
    window.onload = showchatboxtime;
  }, []);

  return (
    <section className="home">
    
<section className="landing-paged">
  <div className="containerd">
    <div className="contentd">
      <div className="text-contd">
        <h1 className="headerdd">
        Grappl & Grow
        </h1>
        <svg width="349" height="60" viewBox="0 0 273 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M117.287 38.5286C111.994 38.7894 106.671 38.8618 101.392 39.3544C78.9596 41.4262 56.527 43.6429 34.0943 45.7582C32.0056 45.961 29.8882 45.903 27.7851 45.8016C20.5746 45.4684 17.9994 41.9188 19.8593 34.9935C20.174 33.82 20.4602 32.6176 20.8751 30.9514C24.3945 30.5458 27.9997 30.2415 31.5764 29.6765C34.9813 29.1404 38.3005 28.0683 41.7197 27.6771C44.8672 27.3149 48.0861 27.7061 51.2479 27.5033C53.7515 27.3439 56.2695 26.9962 58.7016 26.4022C63.0651 25.3591 67.3713 24.0842 71.7205 22.9251C72.3643 22.7513 73.4802 22.4615 73.6662 22.7368C76.6277 26.9528 78.0584 23.2584 79.9754 22.3022C103.066 20.7809 125.756 15.855 148.704 12.8705C130.606 13.6818 112.48 14.073 94.4107 15.4204C67.7576 17.4197 41.1474 20.1144 14.5086 22.5049C12.0765 22.7222 9.64444 22.9396 7.19802 23.0121C2.86314 23.128 -0.0840126 18.8685 0.00182675 13.1168C0.0733595 7.9011 3.29232 8.69797 6.86895 8.62553C16.6546 8.40821 26.426 7.72727 36.1974 7.07531C45.3536 6.46682 54.5098 5.68443 63.666 4.96004C78.4017 3.801 93.1089 2.36671 107.873 1.5409C116.514 1.0628 125.227 1.51189 133.897 1.59882C140.564 1.67126 147.159 -0.16873 153.955 2.03344C156.816 2.96067 160.507 0.874439 163.84 0.801999C177.818 0.526728 191.795 0.396382 205.773 0.396382C213.699 0.396382 221.61 0.932373 229.536 0.874421C241.096 0.787493 252.656 0.584711 264.201 0.019681C268.836 -0.212126 272.27 1.59886 272.928 5.71344C273.4 8.65449 271.44 12.0302 270.338 15.1451C270.167 15.6377 268.822 15.9129 268.021 15.9274C249.537 16.1158 230.995 15.4203 212.583 16.6373C191.524 18.0137 170.579 21.0706 149.591 23.4322C147.717 23.6495 145.886 24.2 144.04 24.5912C144.054 25.0548 144.083 25.5185 144.097 25.9966C152.195 25.9966 160.292 25.8082 168.39 26.0545C176.03 26.2863 183.669 27.1556 191.309 27.4309C196.96 27.6337 202.64 27.5613 208.277 27.1556C213.499 26.7934 216.846 29.691 217.261 35.689C217.562 40.0064 215.158 42.2666 210.222 42.6722C189.678 44.4108 169.134 46.1927 148.604 48.0327C146.773 48.1921 144.984 48.8151 143.139 49.7134C158.762 52.0459 174.728 52.553 189.206 59.5072L189.478 61.6369C187.317 62.4627 185.129 64.0564 183.011 63.9985C169.091 63.5493 155.199 62.7091 141.279 62.0426C125.527 61.2748 109.79 60.5938 94.0388 59.7825C91.807 59.6666 89.6181 59.0291 87.3862 58.6959C80.4905 57.6818 79.5605 53.5381 81.7208 45.7002C81.9783 44.744 83.2087 43.4546 84.0814 43.3676C90.1474 42.7736 96.428 41.3538 102.265 42.3825C108.059 43.3966 112.551 41.716 117.43 40.0209C117.373 39.5138 117.33 39.0213 117.273 38.5142L117.287 38.5286Z" fill="#FEBD00"/>
</svg><h1 className="headerd">
         Connect with the tech talent you need, when you need it.
        </h1>
        <Text
              textAlign={["center", "left"]}
              fontSize={"1.2rem"}
              children="Skill up. Hire up. Tech up."
            />
        <Link to="/bootcamps">
              <Button size={"lg"} colorScheme="blue">
                Explore Now
              </Button>
            </Link>
        
      </div>
      {/* <div className="img-contd"> */}
        {/* <img className="imgd" src="https://img.freepik.com/free-photo/3d-portrait-people_23-2150793919.jpg?size=626&ext=jpg&uid=R120138073&ga=GA1.1.377232785.1697539441&semt=ais" /> */}
        <Image
            className="vector-graphics"
            boxSize={"lg"}
            src={vg}
            objectFit="contain"
          />
      {/* </div> */}
    </div>
  </div>
</section>
      <Center>
      <h1 className="headerddd">
         GrapplTech
        </h1></Center>
        <Center>
        <svg width="260" height="20" viewBox="0 0 628 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z" fill="#FEBD00"/>
</svg></Center>
        
      <Text
        textAlign={"center"}
        fontSize={"2rem"}
        color={"#FEBD00"}
        children="Your Gateway to Landing the Perfect Bootcamps!"
      />
      <Text
        textAlign={"center"}
        fontSize={"1rem"}
        
        children="GrapplTech is the ultimate platform for students and recent graduates to find bootcamps across a wide range of industries. Our platform connects aspiring grapplers with top companies, offering them invaluable experience, skills, and contacts to jumpstart their careers. "
      />
      {/* features */}
      <Features />
      {/* second hero */}
      <div className="container1">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
          <Image
            className="vector-graphics"
            boxSize={"md"}
            src={vg1}
            objectFit="contain"
          />
          <VStack
            width={"full"}
            alignItems={["center", "center"]}
            spacing="8"
          >
            {/* <Heading
              children="Internpixel"
              size={"2xl"}
              pr='6'
            /> */}
            <Center>
      <h1 className="headerddd">
         PixelBrew
        </h1></Center>
        <Center>
        <svg width="260" height="20" viewBox="0 0 628 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z" fill="#FEBD00"/>
</svg></Center>
            {/* <h1 className="mainHeading1">Pixel Brew</h1> */}
            <Text
              textAlign={["center", "left"]}
              fontSize={"1.8rem"}
              color={"#FEBD00"}
              children="Where Coffee Runs and Learning Happens!"
              pr="0"
            />
            <Text
              textAlign={["center", "left"]}
              fontSize={"1rem"}
              pr="0"
              children="At GrapplTech, we know that coffee runs are an essential part of any bootcamp experience. And while you're sipping on that latte, why not also gain some valuable skills and experience in your chosen industry? We promise we won't judge you if you spill your coffee during a video call with your boss, but we will encourage you to keep learning and growing in your career. Join us today and let's make your coffee-fueled career dreams a reality!"
            />
            
            <Link to="/bootcamps">
              <Button
                size={"m"}
                colorScheme="blue"
                opacity={0.57}
                p={[2,4]}
                m={0}
              >
                Apply for a Latte-tude of Opportunities!
              </Button>
            </Link>
            
          </VStack>
        </Stack>
      </div>
      {/* Features2 */}
      <Center>
      <h1 className="headerddd">
      GrapplTech Xperience
        </h1></Center><Center>
      {/* <h1 className="mainHeading1">InternPixel Xperience</h1> */}
      <svg width="392" height="40" viewBox="0 0 392 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M391.684 9.72238C373.052 8.86947 354.435 7.90085 335.804 7.22142C325.475 6.84556 315.147 7.01911 304.818 6.84563C295.682 6.68662 286.546 6.36858 277.41 6.12283C275.126 6.06501 272.856 5.97826 270.572 6.02163C255.029 6.36857 239.471 6.42633 223.957 7.22142C212.781 7.78521 201.663 9.37544 190.515 10.4452C184.008 11.0668 177.472 11.4571 170.979 12.2088C166.281 12.7581 161.627 13.7267 156.958 14.5507C154.229 15.0277 151.528 15.6927 148.785 16.0252C143.599 16.6468 138.399 17.0949 133.198 17.6154C132.322 17.7021 131.446 17.6587 130.584 17.7888C126.188 18.4972 121.793 19.1911 117.411 19.9717C113.504 20.6656 109.625 21.504 105.718 22.2124C100.719 23.1087 95.6913 23.8893 90.6778 24.7711C87.1297 25.3927 83.5671 25.971 80.0764 26.7806C74 28.1973 67.8661 29.4693 61.9333 31.3486C42.684 37.4491 23.5354 43.8388 4.28613 49.9248C3.13692 50.2862 0.465005 49.2743 0.235164 48.4069C-0.238884 46.6866 0.0196909 44.388 0.867232 42.8268C1.47057 41.7137 3.49602 41.2221 4.97563 40.7451C16.6545 37.0299 28.3045 33.1556 40.0839 29.8018C52.8258 26.1733 65.6251 22.6606 78.5537 19.8127C89.7441 17.3407 101.15 15.8951 112.455 13.958C123.488 12.0643 134.477 9.78015 145.567 8.30563C157.792 6.67209 170.102 5.67462 182.399 4.60487C189.481 3.99771 196.735 4.53266 203.674 3.23161C212.566 1.56916 221.328 1.8293 230.235 1.98832C237.087 2.11843 243.939 0.239197 250.82 0.065724C260.358 -0.18003 269.911 0.325884 279.464 0.557182C286.819 0.730655 294.159 0.947471 301.514 1.16431C307.418 1.33779 313.322 1.36672 319.212 1.72812C328.004 2.263 336.795 2.9135 345.572 3.69413C353.516 4.40248 361.431 5.5301 369.375 6.18062C374.949 6.62876 380.565 6.49866 386.153 6.81669C388.122 6.93234 390.046 7.61173 392 8.03096C391.899 8.59474 391.785 9.15859 391.684 9.72238Z" fill="#FEBD00"/>
</svg></Center>

      <Text
        textAlign={"center"}
        fontSize={"2rem"}
        color={"#FEBD00"}
        children="Revolutionizing the Bootcamp Experience with Unparalleled Features for Your Success"
      />
      <Text
        textAlign={"center"}
        fontSize={"1rem"}
        children="Immerse yourself in an unparalleled learning journey with GrapplTech's unique features. Engage in live classes, work on real client projects, receive guidance from dedicated mentors, earn valuable certificates, explore multiple domains, and savor the camaraderie of team lunches. Prepare to level up your skills and create unforgettable memories as you embark on a transformative bootcamp experience."
      />
      <FeaturesSection />
      <Text children="" />
      <Box padding={"8"}>
        {/* <Heading
        className="alumniHeading"
          textAlign={"center"}
          color={"black.400"}
          children="Our Students Work At"
        /> */}
        
        <h1 className="alumniHeading headerddd">Our Active Client Engagement</h1><Center>
        <svg width="260" height="20" viewBox="0 0 628 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z" fill="#FEBD00"/>
</svg></Center>

        <Text
        textAlign={"center"}
        fontSize={"1rem"}
        children="Welcome to our showcase of ongoing client projects! Explore our dynamic portfolio, where innovation meets dedication. Discover how we collaborate, create, and deliver tailored solutions that drive success. From concept to completion, witness the journey of our diverse range of projects across industries, exemplifying our commitment to excellence and client satisfaction. Dive into our world of ongoing endeavors, each representing our passion for innovation and quality service."
      />
      </Box>
      <Alumni />
      <SomethingBigIsComingSection />
      
    
      {/* features */}
      <h1 className="headerddd">GrapplTech's Trailblazing Path</h1><Center>
      <svg width="260" height="20" viewBox="0 0 628 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z" fill="#FEBD00"/></svg></Center>
      <Text
        textAlign={"center"}
        fontSize={"1.7rem"}
        children="Trending and Upcoming Bootcamps for Tomorrow's Innovators"
      />
      <Text
        textAlign={"center"}
        fontSize={"1rem"}
        children="Unleash your potential with GrapplTech's curated collection of trending and upcoming bootcamps. Elevate your skills, embrace cutting-edge industries, and embark on a transformative career journey that paves the way for future innovation."
      />
      <CardSlider />

      <TestimonialSlider />
      <FaqPage />
      <>
        <div id="chat-box">
          <div id="chat-top">
            Grappie: Your Bootcamp Guide{" "}
            <span id="chat-top-right">
              <svg
                id="close-box"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 48 48"
              >
                <path
                  d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
                  fill="#fff"
                />
              </svg>
            </span>
            <div className="clear" />
          </div>
          <div id="chat-msg">
            <p>
              Welcome to GrapplTech, your gateway to exciting bootcamps!
            </p>
            <div id="chat-form">
              <div className="chat-in">
                <input
                  type="text"
                  id="whats-in"
                  placeholder="Send Your Message..."
                />
              </div>
              <div id="send-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={38}
                  height={38}
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z"
                    fill="rgb(18, 140, 126)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="whats-chat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version={1}
            width={35}
            height={35}
            viewBox="0 0 90 90"
          >
            <path
              d="M90 44a44 44 0 0 1-66 38L0 90l8-24A44 44 0 0 1 46 0c24 0 44 20 44 44zM46 7C25 7 9 24 9 44c0 8 2 15 7 21l-5 14 14-4a37 37 0 0 0 58-31C83 24 66 7 46 7zm22 47l-2-1-7-4-3 1-3 4h-3c-1 0-4-1-8-5-3-3-6-6-6-8v-2l2-2 1-1v-2l-4-8c0-2-1-2-2-2h-2l-3 1c-1 1-4 4-4 9s4 11 5 11c0 1 7 12 18 16 11 5 11 3 13 3s7-2 7-5l1-5z"
              fill="#FFF"
            />
          </svg>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  body{width:100%}\n*{margin:0px;padding:0px;box-sizing:border-box;}\n#whats-chat{position:fixed;right:3%;bottom:10%;height:auto;width:auto;background:#0963ac;padding:12.5px;border-radius:50px;}\n#whats-chat:hover{cursor:pointer;box-shadow:2px 2px 15px #ccc;bottom:11%;}\n/*===============================*/\n#chat-box{position:fixed;right:-500px;bottom:18%;width:250px;height:200px;transition:all .5s;}\n#chat-top{width:100%;line-height:2;background:rgb(18, 140, 126);color:white;text-align:center;border-radius:5px 5px 0 0;padding:0 10px;}\n#chat-msg{background:#ece5dd;padding:10px;border-radius:0 0 5px 5px;box-shadow:0 0 25px -10px #999;}\n#chat-msg p{font-size:14px;padding:5px;border-radius:0 50px 50px 50px;margin-bottom:10px;}\n#chat-form{display:flex;}\n.chat-in{width:80%;}\n#chat-form input{border-radius:5px 0 5px 5px;border:none;outline:none;font-size:14px;padding:5px;line-height:2;}\n#send-btn{width:20%;padding: 0 5px;}\n#chat-top-right{float:right;padding:5px 0;}\n#chat-box:after{content:'';\n    position: absolute;\n    top:58%;\n    left: 90%;\n    width: 0;\n    height: 0;\n    border-top: 25px solid transparent;\n  border-bottom: 25px solid transparent; \n  \n  border-right:25px solid #ece5dd;}\n.right{float:right}\n.clear{clear:both}\n",
          }}
        />
      </>
    </section>
  );
}

export default Home;
