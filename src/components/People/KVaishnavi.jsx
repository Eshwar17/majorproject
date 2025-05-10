import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Flex, Center, Image
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import people1 from "../../assets/images/PixelCrafter.png";
import people2 from "../../assets/images/AlgoAdept.png";
import people3 from "../../assets/images/CodeFusionist.png";
import people4 from "../../assets/images/ComponentCommander.png";
import people5 from "../../assets/images/FrontendStrategist.png";
import people6 from "../../assets/images/TechGrandmaster.png";

const KVaishnavi = () => {
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
        chatBoxElement.style.right = "8%";
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
    <Container maxW={"container.lg"} padding={"2"}>
      <Heading class="headerddd" children="K Vaishnavi" fontFamily={"Poppins"} textAlign={["center"]} />
      <Center>
      <svg width="260" height="20" viewBox="0 0 628 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z" fill="#FEBD00"/></svg></Center>
      {/* <Founder /> */}
      <Box p={6}>
      <Heading as="h1" textAlign="center" fontFamily={"Poppins"} fontSize="3xl" color={"blue.800"} mt={0} mb={8}>
        Frontend Strategist at GrapplTech
      </Heading>
      <Box flex="1" mb={6} order={[1, 1, 2]}>
          <Center>
            <Image
              src={people5} // Add your image source here
              alt="GrapplTech Team"
              borderRadius="lg"
              maxW="60%"
              objectFit="cover"
              borderWidth={4}
              borderColor="blue.500"
            />
          </Center>
        </Box>
      <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Box flex="1" mb={6} pr={[0, 0, 4]} order={[2, 2, 1]}>
          <Heading as="h2" fontSize="2xl" fontFamily={"Poppins"} textAlign={["center"]} mb={4}>
          GrapplTech Success Wall
          </Heading>
          <Center>
      <svg width="260" height="20" viewBox="0 0 628 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z" fill="#FEBD00"/></svg></Center>
          <Text mt={4} textAlign={'center'}>
          K Vaishnavi enrolled in the Front-End Development + DSA course at GrapplTech on Feb 03, 2025, and successfully completed it on June 12, 2025. With their relentless hard work, they have earned the <strong>"Frontend Strategist"</strong> badge at GrapplTech — a badge that signifies their proficiency in building seamless and strategic user interfaces with creativity and clarity.<br></br><br></br>This portal stands as the official verification of their achievements. We celebrate their journey of growth, perseverance, and excellence! 🌟🔥

          </Text>
          <Text mt={4} textAlign={'center'}>
          <strong>Full Name:</strong>K Vaishnavi<br></br>
<strong>Email:</strong>koovuruvyshnavi@gmail.com 
<br></br>
<strong>Phone Number:</strong> 8688718995<br></br>
<strong>College Name:</strong>Siddharth Institute of Engineering and technology<br></br>
<strong>Credential ID:</strong> KIR0GECCEL5X0J4K<br></br>
<strong>Course Completion Status:</strong> In Progress
          </Text>
        </Box>
      </Flex>
      <Box mt={10}>
  <Heading as="h2" fontSize="2xl" fontFamily={"Poppins"} textAlign={["center"]} mb={4}>
  🎖️ Your Skills, Sealed with a Badge!
  </Heading>
  <Text mt={4} textAlign={'center'}>
  At GrapplTech, learning isn't just about completing a course — it's about mastering a skill and owning it with pride. Our badge system turns your journey into milestones of achievement. From Pixel Crafter to Tech Grandmaster, each badge represents your dedication, hands-on expertise, and the real-world skills you've earned.

Showcase your badges to the world — in your resume, LinkedIn, or anywhere you shine. Because at GrapplTech, every line of code and every creative spark counts.

          </Text>
  <Center>
      <svg width="260" height="20" viewBox="0 0 628 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z" fill="#FEBD00"/></svg></Center>
  <Flex justifyContent="space-between" flexWrap="wrap">
    {/* Education First */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      {/* <Icon as={FaGraduationCap} boxSize={12} color="blue.500" /> */}
      <Center>
            <Image
              src={people1} // Add your image source here
              alt="GrapplTech Team"
              borderRadius="lg"
              maxW="30%"
              objectFit="cover"
              borderWidth={4}
              borderColor="blue.500"
            />
          </Center>
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
      Pixel Crafter
      </Heading>
      <Text>
      Frontend Course (HTML, CSS, JS) - Someone who crafts beautiful interfaces from pixels and create responsive websites.
      </Text>
    </Box>
    {/* Community Driven */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
    <Center>
            <Image
              src={people4} // Add your image source here
              alt="GrapplTech Team"
              borderRadius="lg"
              maxW="30%"
              objectFit="cover"
              borderWidth={4}
              borderColor="blue.500"
            />
          </Center>
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
      Component Commander
      </Heading>
      <Text>
      Advanced Frontend (React, Next.js) - Master of reusable and scalable UI components. Capable of creating responsive websites.
      </Text>
    </Box>
    {/* Innovation Hub */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
    <Center>
            <Image
              src={people2} // Add your image source here
              alt="GrapplTech Team"
              borderRadius="lg"
              maxW="30%"
              objectFit="cover"
              borderWidth={4}
              borderColor="blue.500"
            />
          </Center>
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
      Algo Adept
      </Heading>
      <Text>
        Data Structures and Algorithms Course(C++/Java/Python) - Problem-solving warrior with algorithmic skills.
      </Text>
    </Box>
    {/* Customer-Centric */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
    <Center>
            <Image
              src={people3} // Add your image source here
              alt="GrapplTech Team"
              borderRadius="lg"
              maxW="30%"
              objectFit="cover"
              borderWidth={4}
              borderColor="blue.500"
            />
          </Center>
      <Heading as="h3" fontFamily={"Poppins"} fontSize="xl" mt={2}>
      Code Fusionist
      </Heading>
      <Text>
      Frontend(ReactJS,NextJS) + Backend Course(Python/Java Focused) - A full-stack force, combining visual and logical prowess.
      </Text>
    </Box>
    {/* Ownership and Responsibility */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
    <Center>
            <Image
              src={people5} // Add your image source here
              alt="GrapplTech Team"
              borderRadius="lg"
              maxW="30%"
              objectFit="cover"
              borderWidth={4}
              borderColor="blue.500"
            />
          </Center>
      <Heading as="h3" fontFamily={"Poppins"} fontSize="xl" mt={2}>
      Frontend Strategist
      </Heading>
      <Text>
      Frontend(HTML,CSS,JS) + DSA Course(C++/Java/Python) - Builds stunning UIs with solid problem-solving tactics.
      </Text>
    </Box>
    {/* Diversity and Inclusion */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
    <Center>
            <Image
              src={people6} // Add your image source here
              alt="GrapplTech Team"
              borderRadius="lg"
              maxW="40%"
              objectFit="cover"
              borderWidth={4}
              borderColor="blue.500"
            />
          </Center>
      <Heading as="h3" fontFamily={"Poppins"} fontSize="xl" mt={2}>
      Tech Grandmaster
      </Heading>
      <Text>
      Frontend(HTML,CSS,JS,ReactJS,NextJS) + Backend(Python/Java Focused) + DSA Course - The elite – well-rounded and ready for any challenge.
      </Text>
    </Box>
  </Flex>
</Box>
      <Box mt={12} textAlign="center">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeMHlVXWljrZReK_AnGLjXvYSALy-RSUnl14scR92zx9IM51A/viewform?usp=dialog" target="_blank" rel="noreferrer">
      <Button
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          _hover={{ bg: 'blue.600' }}
        >
          Join Us Today
        </Button>
        </a>
      </Box>
    </Box>
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
    </Container>
  );
};

export default KVaishnavi;
