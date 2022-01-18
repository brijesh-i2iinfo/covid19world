import Typewriter from "typewriter-effect";
import { memo } from "react";
const dataStr = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
  "India",
];

function AutoType({ setPlaceHolder }) {
  const textNode = (char) => {
    console.log(char);
    setPlaceHolder(char);
    // return char;
  };
  return (
    <div style={{ fontSize: "1.3rem", color: "rgba(108,117,125,.6)" }}>
      <Typewriter
        options={{
          strings: [
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jharkhand",
            "Karnataka",
          ],
        //   pasteString: textNode,
          autoStart: true,
          loop: true,
          delay: 200,
        }}
      />
    </div>
  );
}

export default memo(AutoType);
