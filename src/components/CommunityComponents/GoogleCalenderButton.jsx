import { useEffect, useRef } from "react";

function GoogleCalendarButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Check if already loaded
    if (document.getElementById("google-calendar-style")) return;

    // Load calendar stylesheet
    const style = document.createElement("link");
    style.id = "google-calendar-style";
    style.rel = "stylesheet";
    style.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
    document.head.appendChild(style);

    // Load calendar script
    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = () => {
      if (window.calendar && buttonRef.current) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2KGwxgLYJI73sTiS81PebrfLUWoW04b4l7aoIbszfdnTwvw43XH2-LtnmV_0haia3ko2NzUPX-?gv=true",
          color: "#0963ac",
          label: "Cook My Portfolio",
          target: buttonRef.current,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div ref={buttonRef} />;
}

export default GoogleCalendarButton;
